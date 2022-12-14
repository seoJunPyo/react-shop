import React from 'react';
import styled from '@emotion/styled';
import { useRecoilState } from 'recoil';
//component
import NavHeader from './NavHeader';
import NavInputArea from './NavInputArea';
import SideNav from './SideNav';
//style
import { CommonWidth, FlexTemplate } from '../../assets/style/CommonStyle';
import {
	navBgc,
	navBoxShadow,
	navText,
} from '../../assets/style/darkLightColor';
//data
import { atomDarkLightMode } from '../../Atom/AtomStore';

const Nav = () => {
	const [darkLightMode] = useRecoilState(atomDarkLightMode);

	return (
		<>
			<SideNav />
			<NavContainer
				bgc={navBgc(darkLightMode)}
				color={navText(darkLightMode)}
				boxShadow={navBoxShadow(darkLightMode)}>
				<Wrap>
					<NavHeader />
					<NavInputArea />
				</Wrap>
			</NavContainer>
		</>
	);
};

interface NavStyle {
	bgc: string;
	color: string;
	boxShadow: string;
}

//styled Components
const NavContainer = styled.nav<NavStyle>`
	position: sticky;
	top: 0;
	z-index: 1000;
	${FlexTemplate}
	background-color: ${(props) => props.bgc};
	color: ${(props) => props.color};
	box-shadow: ${(props) => props.boxShadow};
	transition: background-color, color 0.3s;
`;

const Wrap = styled.div`
	${CommonWidth}
	${FlexTemplate}
	justify-content : space-between;
	padding: 8px 32px;

	@media (max-width: 968px) {
		padding: 8px 12px;
	}
`;

export default Nav;
