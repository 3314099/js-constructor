import image from './assets/image.jpg';
import {
  TitleBlock, ImageBlock, TextBlock, TextColumnsBlock,
} from './classes/blocks';

const lorem = `"Что такое JavaScript?" 
<br> 
<br> 
1) JavaScript — язык сценариев, или скриптов.
Скрипт представляет собой программный код — набор инструкций,
который не требует предварительной обработки (например, компиляции) перед запуском.
Код JavaScript интерпретируется движком браузера во время загрузки веб-страницы.
Интерпретатор браузера выполняет построчный анализ, обработку и выполнение
исходной программы или запроса.
<br>
<br>
2) JavaScript — объектно-ориентированный язык с прототипным наследованием.
Он поддерживает несколько встроенных объектов, а также позволяет создавать или
удалять свои собственные (пользовательские) объекты. Объекты могут наследовать
свойства непосредственно друг от друга, образуя цепочку объект-прототип.`;

const text = [
  'С помощью JavaScript можно запускать одностраничные приложения на стороне клиента;',
  'JavaScript используется на стороне сервера с такими технологиями, как Node.js;',
  'JavaScript помогает создавать настольные приложения с Electron и может '
	+ 'использоваться для работы с одноплатными'
	+ ' компьютерами типа Raspberry Pi;',
  'Также, JavaScript используется для обучения моделей машинного обучения '
	+ 'в браузере с помощью технологии TensorFlow.js.',
];

export const model = [
  new TitleBlock('Javascript', {
    tag: 'h1',
    styles: 'background: linear-gradient(to right, #ff0099, #493240);color: #fff;padding: 1.5rem;text-align: center;',
  }),
  new ImageBlock(image, {
    styles: 'padding: 2rem 0; display: flex; justify-content: center;',
    alt: 'my image',
    imgStyles: 'width: 800px; height: 200px;',
  }),
  new TextBlock(lorem, {
    tag: 'h4',
    styles: 'padding: 2rem 0; background: linear-gradient(to right, #f7bc25, #76f725);color: #000;',
  }),
  new TextColumnsBlock([
    text[0], text[1], text[2], text[3],
  ], {
    styles: 'padding: 2rem 0; color: #fff;background: linear-gradient(to bottom, #8e2de2,'
			+ ' #4a00e0); font-weight: bold;',
  }),
];
