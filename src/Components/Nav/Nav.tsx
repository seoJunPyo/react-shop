import styled from '@emotion/styled';
import React, { useState } from 'react';
import { useRecoilState } from 'recoil';
//style
import { CommonWidth, FlexTemplate } from '../../assets/Style/CommonStyle';
import {
	navBgc,
	navBoxShadow,
	navText,
} from '../../assets/Style/darkLightColor';
import { darkLightModeAtom } from '../../Atom/AtomStore';
import NavHeader from './NavHeader';
import NavInputArea from './NavInputArea';
import SideNav from './SideNav';

const Nav = () => {
	const [darkLightMode] = useRecoilState(darkLightModeAtom);

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
const NavContainer = styled.nav`
	position: sticky;
	top: 0;
	z-index: 1000;
	${FlexTemplate}
	background-color: ${(props: NavStyle) => props.bgc};
	color: ${(props) => props.color};
	box-shadow: ${(props) => props.boxShadow};
	transition: background-color, color 0.3s;
`;

const Wrap = styled.div`
	${CommonWidth}
	${FlexTemplate}
	justify-content : space-between;
	padding: 8px 40px;

	@media (max-width: 968px) {
		padding: 8px 12px;
	}
`;

export default Nav;
