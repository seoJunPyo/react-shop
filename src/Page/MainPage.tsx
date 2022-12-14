import styled from '@emotion/styled';
import React from 'react';
import { useRecoilState } from 'recoil';
import { WrapStyle } from '../assets/Style/CommonStyle';

import Carousel from '../Components/Carousel/Carousel';
import ShoppingList from '../Components/ShoppingList/ShoppingList';
import LoadingPage from './LoadingPage';

interface MaingPageProps {
	isLoading?: boolean;
}

const MainPage = (props: MaingPageProps) => {
	return (
		<>
			<Carousel />
			{props.isLoading ? <LoadingPage length={4} /> : <ShoppingList />}
		</>
	);
};

export default MainPage;
