const style = 'margin: 0;';

function row(content, styles = '') {
  return `<div class="row" style="${style} ${styles}">${content}</div>`;
}

function col(content) {
  return `<div class="col-sm">${content}</div>`;
}

function css(styles = {}) {
  const toString = key => `${key}: ${styles[key]}`
  return Object.keys(styles).map(toString).join(';')
}

export { row, col, css };
