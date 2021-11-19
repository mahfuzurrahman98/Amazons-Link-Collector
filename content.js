window.onload = () => {
	let curLoc = window.location.href;
	if (curLoc.includes("amazon")) {
		document
			.getElementById("amzn-ss-text-link")
			.addEventListener("click", () => {
				setTimeout(() => {
					const linkText = document.getElementById(
						"amzn-ss-text-shortlink-textarea"
					).value;
					const msg = { curLink: linkText };
					chrome.runtime.sendMessage(msg);
					document.write(
						`<h1 style="color:green;margin-left:auto;margin-right:auto;margin-top:7vh;margin-bottom:10vh;text-align: center;">Done, Link Coppied!</h1>`
					);
					// document.write(
					// 	`<h1 style="color:green;text-align:center;">Done, Link Coppied!</h1>`
					// );
				}, 500);
			});
	}
};
