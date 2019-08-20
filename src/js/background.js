import '../img/icon-128.png'
import '../img/icon-34.png'

chrome.browserAction.onClicked.addListener(function(tab) { 

    // Go to the url in the active tab
    chrome.tabs.query( { active: true, currentWindow: true }, function( tabs ) {

        // Parse tab url into a URL object
        var url = new URL(tabs[0].url);

        // Parse tab url parameters into URLSearchParams object
        var search_params = new URLSearchParams(url.search); 

        // Set the cache busting query string
        search_params.set('qs-bust-v', Date.now());

        // change the search property of the tab url
        url.search = search_params.toString();

        // Go to the new url
        chrome.tabs.update( tabs[0].id, { url: url.toString() } ); 
    });

});