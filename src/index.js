import { model } from './model';
import { Site } from './classes/site';
import { SideBar } from './classes/sideBar';
import './styles/main.css';

const site = new Site('#site')

const apdateCallBack = newBlock => {
	model.push(newBlock)
	site.render(model)
}

new SideBar('#nav', apdateCallBack)

site.render(model)
