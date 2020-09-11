import { model } from './model';
import { Site } from './classes/site';
import { SideBar } from './classes/sideBar';
import './styles/main.css';

const site = new Site('#site')

new SideBar('#nav')

site.render(model)
