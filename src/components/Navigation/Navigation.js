import React from 'react';
import { TabMenu } from 'primereact/tabmenu';

const Navigation = () => {
	const items = [
		{ label: 'Home', icon: 'pi pi-fw pi-home' },
		{ label: 'Calendar', icon: 'pi pi-fw pi-calendar' },
		{ label: 'Edit', icon: 'pi pi-fw pi-pencil' },
		{ label: 'Documentation', icon: 'pi pi-fw pi-file' },
		{ label: 'Settings', icon: 'pi pi-fw pi-cog' }
	];
	let activeIndex = 0;
	const setActiveIndex = (i) => {
		activeIndex = i;
	};
	return (
		<nav>
			<TabMenu model={items} activeIndex={activeIndex} onTabChange={(e) => setActiveIndex(e.value)} />
		</nav>
	);
};

export default Navigation;
