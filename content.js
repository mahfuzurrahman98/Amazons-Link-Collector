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
					chrome.runtime.sendMessage({ curLink: linkText });
					setTimeout(() => {
						document.getElementsByClassName("a-popover")[0].remove();
					}, 250);
				}, 500);
			});
	}
};
