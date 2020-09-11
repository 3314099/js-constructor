import image from './assets/image.png'
import {TitleBlock, ImageBlock, TextBlock, TextColumnsBlock}  from './classes/blocks'

export const model = [
	new TitleBlock('Test Title', {
		tag: 'h1',
		styles: 'background: linear-gradient(to right, #ff0099, #493240);color: #fff;padding: 1.5rem;text-align: center;'
	}),
	new ImageBlock(image, {
		styles: 'padding: 2rem 0; display: flex; justify-content: center;',
		alt: 'my image',
		imgStyles: 'width: 500px; height: auto;'
	}),
	new TextBlock('Lorem ipsum dolor sit amet', {
		tag: 'h2',
		styles: 'padding: 2rem 0; background: linear-gradient(to right, #f7bc25, #76f725);color: #000;'
	}),
	new TextColumnsBlock([
		'text 1', 'text 2', 'text 3', 'text 4'
	], {
		styles: 'padding: 2rem 0; color: #fff;background: linear-gradient(to bottom, #8e2de2, #4a00e0);font-weight: bold;'
	}),
]
