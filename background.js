console.log("back loaded");

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
	let reqLink = request.curLink;
	// Update;
	chrome.storage.sync.get(["links"], function (res) {
		let links_arr = res.links;
		console.log("req_link:", reqLink);
		links_arr.push(reqLink);
		chrome.storage.sync.set({ links: links_arr });
	});
});
