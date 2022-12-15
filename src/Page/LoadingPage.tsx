import styled from '@emotion/styled';
import React from 'react';
import { Container } from '../Components/ShoppingList/ShoppingList';
import { Title, List } from '../Components/ShoppingList/ItemList';
import { ImgCon, Card, Info } from '../Components/ShoppingList/ItemCard';
import loadingLight from '../assets/Image/Loading_light.gif';
import loadingDark from '../assets/Image/Loading_dark.gif';
import { darkLightModeAtom } from '../Atom/AtomStore';
import { useRecoilState } from 'recoil';
import { cardBgc, cardBorder } from '../assets/Style/darkLightColor';

interface LoadingPageProps {
	length: number;
}

const LoadingPage = (props: LoadingPageProps) => {
	const [darkLightMode] = useRecoilState(darkLightModeAtom);

	return (
		<Container>
			{Array.from({ length: props.length }).map((_, idx) => (
				<ListContainer key={idx}>
					<Title>Loading...</Title>
					<List>
						{Array.from({ length: 4 }).map((_, idx) => (
							<Card key={idx} border={cardBorder(darkLightMode)}>
								<ImgCon>
									<Img
										src={darkLightMode ? loadingDark : loadingLight}
										alt="loading"
									/>
								</ImgCon>
								<Info bgc={cardBgc(darkLightMode)} />
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

const Img = styled.img`
	width: 80%;
`;

export default LoadingPage;
