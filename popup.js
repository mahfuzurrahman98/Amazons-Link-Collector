const ul = document.getElementById("ul_list");

document.addEventListener("DOMContentLoaded", () => {
	document.getElementById("clr").addEventListener("click", () => {
		document.getElementById("clr").classList.add("d-none");
		ul.innerHTML = `<p class="text-danger me-4">No_links_are_stored</p>`;
		chrome.storage.sync.set({ links: ["No_links_are_stored"] });
	});

	chrome.storage.sync.get(["links"], function (res) {
		if (!res.links) {
			document.getElementById(
				"main"
			).innerHTML = `<p class="text-danger me-4 mt-2">No_links_are_stored</p>`;
			chrome.storage.sync.set({ links: ["No_links_are_stored"] });
		} else {
			let n = res.links.length;
			if (n == 1) {
				document.getElementById(
					"main"
				).innerHTML = `<p class="text-danger me-4 mt-2">No_links_are_stored</p>`;
				chrome.storage.sync.set({ links: ["No_links_are_stored"] });
			} else {
				document.getElementById("clr").classList.remove("d-none");
				for (let i = 1; i < n; i++) {
					const e = res.links[i];
					const li = document.createElement("li");
					const p = document.createElement("p");
					const sp = document.createElement("div");

					if (i % 11 == 0) {
						sp.classList.add("my-3", "text-primary");
						sp.innerHTML = "----------------------------";
						ul.append(sp);
					}

					p.textContent = e;
					li.append(p);
					ul.append(li);
				}
			}
		}
	});
});
