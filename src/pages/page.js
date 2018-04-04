// ES6
// export default class Page {
// 	constructor() {
// 		this.title = 'My Page';
// 	}
//
// 	open(path) {
// 		browser.url(path);
// 	}
// }

function Page () {
    this.title = 'My Page';
}

Page.prototype.open = function (path) {
    browser.url(path)
}

module.exports = new Page()
