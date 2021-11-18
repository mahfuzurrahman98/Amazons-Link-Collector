window.onload = () => {
	let curLoc = window.location.href;
	if (curLoc.includes("amazon")) {
		document
			.getElementById("amzn-ss-text-link")
			.addEventListener("click", () => {
				setTimeout(() => {
					const linkText = document.getElementById(
						"amzn-ss-text-shortlink-textarea"
					).textContent;
					console.log("from content.js: ", linkText);
					const msg = { curLink: linkText };
					chrome.runtime.sendMessage(msg);
				}, 1000);
			});
	}
};
