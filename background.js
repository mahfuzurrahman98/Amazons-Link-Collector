chrome.runtime.onMessage.addListener((request, sender) => {
	let reqLink = request.curLink;
	chrome.storage.sync.get(["links"], function (res) {
		let links_arr = res.links;
		links_arr.push(reqLink);
		chrome.storage.sync.set({ links: links_arr });
	});
});
