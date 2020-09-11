const style = 'margin: 0;'

function row(content, styles = '') {
	return `<div class="row" style="${style} ${styles}">${content}</div>`
}

function col(content) {
	return `<div class="col-sm">${content}</div>`
}

export {row, col}
