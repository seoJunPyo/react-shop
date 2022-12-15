import React from 'react';
import styled from '@emotion/styled';
import { useNavigate } from 'react-router-dom';
import { useRecoilState, useRecoilValue } from 'recoil';
//style
import { hoverStyle } from '../../assets/style/darkLightColor';
//data
import {
	atomDarkLightMode,
	getCategoryList,
	atomSideNav,
} from '../../Atom/AtomStore';

const SideNav = () => {
	const categoryList = useRecoilValue(getCategoryList);
	const [sideNavState, setSideNavState] = useRecoilState(atomSideNav);
	const [darkLightMode] = useRecoilState(atomDarkLightMode);
	const navigate = useNavigate();

	return (
		<>
			<Wrap
				display={sideNavState ? 'block' : 'none'}
				onClick={(e) => {
					e.stopPropagation();
					setSideNavState(!sideNavState);
				}}></Wrap>
			<Nav position={sideNavState ? '0' : '-100%'}>
				{categoryList.map((category) => (
					<Item
						hover={hoverStyle(darkLightMode)}
						onClick={() => {
							navigate(`/category/${category}`);
							setSideNavState(!sideNavState);
						}}
						key={category}>
						{category}
					</Item>
				))}
			</Nav>
		</>
	);
};

const Wrap = styled.div<{ display: string }>`
	position: fixed;
	display: ${(props) => props.display};
	width: 100vw;
	height: 100vh;
	background-color: rgba(0, 0, 0, 0.2);

	z-index: 1001;
`;

const Nav = styled.ul<{ position: string }>`
	position: fixed;
	left: ${(props) => props.position};
	height: 100vh;
	width: 300px;
	padding: 12px 24px;
	background-color: inherit;
	z-index: 1002;
	transition: left 0.3s;
`;

const Item = styled.li<{ hover: string }>`
	padding: 12px;
	margin-bottom: 8px;
	border-radius: 10px;
	font-size: 20px;
	color: inherit;
	cursor: pointer;

	:hover {
		background-color: ${(props) => props.hover};
		transition: background-color 0.3s;
	}
`;
export default SideNav;
