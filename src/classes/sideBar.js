export class SideBar {
	constructor(selector) {
		this.$el = document.querySelector(selector)

		this.init()
	}


	init() {
	this.$el.innerHTML = `<h1>test<h1/>`
	}
}
