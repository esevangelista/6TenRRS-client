import React, {Component} from 'react';
// import '../Pagecomponents.css'
import SideBar from '../components/Sidebar'
import Text from '../Text'
import HeaderBar from '../HeaderBar'


class Home extends Component {
	render(){
		return(
			<div class="contentHolder">
				<SideBar />
				<HeaderBar
					term=""/>
				<div style={{'margin-top':'7%'}}>
					<Text 
						text="Home"
						classname="contentText"
						/>
				</div>
			</div>
		)
	}
}

export default Home;