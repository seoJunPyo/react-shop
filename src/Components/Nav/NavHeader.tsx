import React from 'react';
import styled from '@emotion/styled';
import { FlexTemplate } from '../../assets/Style/CommonStyle';
import { useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import {
	categoryListAtom,
	darkLightModeAtom,
	sideNavAtom,
} from '../../Atom/AtomStore';
import { HiOutlineViewList } from 'react-icons/hi';
import { hoverStyle } from '../../assets/Style/darkLightColor';

const NavHeader = () => {
	const [categoryList] = useRecoilState(categoryListAtom);
	const [sideNavState, setSideNavState] = useRecoilState(sideNavAtom);
	const [darkLightMode] = useRecoilState(darkLightModeAtom);

	const navigate = useNavigate();

	const toHome = () => {
		navigate('/');
	};

	return (
		<Header>
			<SideNavBtn
				onClick={() => {
					setSideNavState(!sideNavState);
				}}
				hover={hoverStyle(darkLightMode)}>
				<HiOutlineViewList />
			</SideNavBtn>
			<Title onClick={toHome}>React Shop</Title>
			<List>
				{categoryList.map((category) => (
					<Item
						hover={hoverStyle(darkLightMode)}
						onClick={() => {
							navigate(`/category/${category}`);
						}}
						key={category}>
						{category}
					</Item>
				))}
			</List>
		</Header>
	);
};

const Header = styled.section`
	display: flex;
	align-items: center;
`;

const SideNavBtn = styled.button`
	${FlexTemplate}
	width: 36px;
	height: 36px;
	margin: 0 4px 0 0;
	padding: 4px;
	font-size: 30px;
	background-color: inherit;
	color: inherit;
	border-radius: 10px;
	cursor: pointer;
	transform: translateY(1px);

	:hover {
		background-color: ${(props: { hover: string }) => props.hover};
		transition: background-color 0.3s;
	}

	@media (min-width: 968px) {
		display: none;
	}
`;

const Title = styled.h1`
	box-sizing: content-box;
	font-size: 20px;
	font-weight: 700;
	line-height: 1.5em;
	margin-right: 12px;
	cursor: pointer;
`;

const List = styled.ul`
	display: flex;
	margin-top: 4px;

	@media (max-width: 968px) {
		display: none;
	}
`;

const Item = styled.li`
	${FlexTemplate}
	font-size: 12px;
	font-weight: 600;
	border-radius: 10px;
	cursor: pointer;
	padding: 12px 16px;

	:hover {
		background-color: ${(props: { hover: string }) => props.hover};
		transition: background-color 0.3s;
	}
`;

export default NavHeader;
