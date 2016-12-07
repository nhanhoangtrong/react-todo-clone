import React from 'react'
import Sidebar from './sidebar/Sidebar'
import MainSection from './main/MainSection'
import style from '../style/style.styl'

const App = React.createClass({
	render() {
		return (
			<div className={style.app}>
				<Sidebar name="left">
				</Sidebar>
				<MainSection>
				</MainSection>
				<Sidebar name="right">
				</Sidebar>
			</div>
		)
	}
})

export default App