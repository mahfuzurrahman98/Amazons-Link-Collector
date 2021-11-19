chrome.runtime.onMessage.addListener((request, sender) => {
	//document.write("<h1>Done</h1>");
	let reqLink = request.curLink;
	// Update;
	chrome.storage.sync.get(["links"], function (res) {
		let links_arr = res.links;
		links_arr.push(reqLink);
		chrome.storage.sync.set({ links: links_arr });
	});
});
