# LocalStorage vs SessionStorage vs IndexedDB

window.sessionStorage - lives as long as your page is open in a browser (even if you reload the page). If you close all tabs where the app is running, it's deleted. I *think* that each tab gets it's own session storage.

window.localStorage - has no expiration date, doesn't get cleared automatically. Stored even if the browser is closed. You can access the same data across multiple tabs.