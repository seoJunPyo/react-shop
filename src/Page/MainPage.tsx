import styled from '@emotion/styled';
import React, { useEffect, useState } from 'react';
//page & component
import Carousel from '../Components/Carousel/Carousel';
import ShoppingList from '../Components/ShoppingList/ShoppingList';
import LoadingPage from './LoadingPage';

interface MaingPageProps {
	isLoading?: boolean;
}

const MainPage = (props: MaingPageProps) => {
	const [loading, setLoading] = useState('');

	useEffect(() => {
		setLoading('end');

		return () => {
			setLoading('');
		};
	}, []);

	return (
		<Container className={loading}>
			<Carousel />
			{props.isLoading ? <LoadingPage length={4} /> : <ShoppingList />}
		</Container>
	);
};

const Container = styled.div`
	opacity: 0;
	transition: opacity 0.5s;

	&.end {
		opacity: 1;
	}
`;

export default MainPage;
