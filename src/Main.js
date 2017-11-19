import React, {Component} from 'react';
import SideBar from './SideBar'
import HeaderBar from './HeaderBar'
import Content from './Content'
import './Pagecomponents.css';
import { HashRouter } from "react-router-dom";

class Main extends Component {
	render(){
		return(
			<div>
				<HashRouter>
					<div>
						<SideBar />
						<HeaderBar />
						<Content />
					</div>
				</HashRouter>
			</div>
		)
	}
}


class TextArea extends Component {
	render(){
		const {label_value} = this.props;
		return(
			<div>
				<label class="whiteText">{label_value}</label>
				<input type="text"
					class="textArea" 
					/>
			</div>
		)
	}
}

export default Main;