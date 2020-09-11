function row(content, styles = '') {
	return `<div class="row" style="${styles}">${content}</div>`
}

function col(content) {
	return `<div class="col-sm">${content}</div>`
}

export {row, col}
