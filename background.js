chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
	let reqLink = request.curLink;
	// Update;
	chrome.storage.sync.get(["links"], function (res) {
		let links_arr = res.links;
		links_arr.push(reqLink);
		chrome.storage.sync.set({ links: links_arr });
	});
});
