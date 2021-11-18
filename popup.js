const ul = document.getElementById("ul_list");

const makeBlank = () => {
	chrome.storage.sync.set({ links: ["No_links_are_stored"] });
	document.getElementById("clr").classList.add("d-none");
	ul.innerHTML = `<li><a class="text-danger" href="javascript:void(0)">No_links_are_stored</a></li>`;
};

document.addEventListener("DOMContentLoaded", () => {
	document.getElementById("clr").addEventListener("click", makeBlank);

	chrome.storage.sync.get(["links"], function (res) {
		if (!res.links) {
			makeBlank();
		} else {
			let n = res.links.length;
			if (n == 1) {
				makeBlank();
			} else {
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
