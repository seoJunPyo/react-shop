import styled from '@emotion/styled';
import React from 'react';
import { Container } from '../Components/ShoppingList/ShoppingList';
import { Title, List } from '../Components/ShoppingList/ItemList';
import { ImgCon, Card, Info } from '../Components/ShoppingList/ItemCard';
import loading from '../assets/Image/Loading.gif';

interface LoadingPageProps {
	length: number;
}

const LoadingPage = (props: LoadingPageProps) => {
	return (
		<Container>
			{Array.from({ length: props.length }).map((_, idx) => (
				<ListContainer key={idx}>
					<Title>Loading...</Title>
					<List>
						{Array.from({ length: 4 }).map((_, idx) => (
							<Card key={idx}>
								<ImgCon>
									<img src={loading} alt="loading" />
								</ImgCon>
								<Info />
							</Card>
						))}
					</List>
				</ListContainer>
			))}
		</Container>
	);
};

const ListContainer = styled.div`
	padding: 40px;
`;

export default LoadingPage;
