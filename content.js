window.onload = () => {
	if (window.location.href.includes("amazon")) {
		document
			.getElementById("amzn-ss-text-link")
			.addEventListener("click", () => {
				setTimeout(() => {
					chrome.runtime.sendMessage(
						{
							curLink: document.getElementById(
								"amzn-ss-text-shortlink-textarea"
							).value,
						},
						() => {
							document.write(
								`<h1 style="font-family:ubuntu;color:green;margin-left:auto;margin-right:auto;margin-top:7vh;margin-bottom:10vh;text-align: center;">Done, Link Coppied!</h1>`
							);
						}
					);
				}, 500);
			});
	}
};
