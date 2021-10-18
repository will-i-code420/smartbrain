import React, { Component } from 'react';
import { TabMenu } from 'primereact/tabmenu';

class Navigation extends Component {
	constructor(props) {
		super(props);
		this.state = {
			items: [
				{ label: 'Home', icon: 'pi pi-fw pi-home' },
				{ label: 'Calendar', icon: 'pi pi-fw pi-calendar' },
				{ label: 'Edit', icon: 'pi pi-fw pi-pencil' },
				{ label: 'Documentation', icon: 'pi pi-fw pi-file' },
				{ label: 'Settings', icon: 'pi pi-fw pi-cog' }
			],
			activeIndex: 0
		};
	}
	setActiveIndex = (i) => {
		this.setState({ activeIndex: i });
	};
	render() {
		const { items, activeIndex } = this.state;
		return (
			<nav>
				<TabMenu model={items} activeIndex={activeIndex} onTabChange={(e) => this.setActiveIndex(e.value)} />
			</nav>
		);
	}
}

export default Navigation;
