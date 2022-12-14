import styled from '@emotion/styled';
import React from 'react';
//icons
import {
	AmericanExpress,
	DinersClub,
	Discover,
	MasterCard,
	PayPal,
	Visa,
} from '../../assets/Icon/Icons';
//style
import { FlexTemplate } from '../../assets/Style/CommonStyle';

const CardArea = () => {
	return (
		<Container>
			<Card>
				<Visa />
			</Card>
			<Card>
				<MasterCard />
			</Card>
			<Card>
				<AmericanExpress />
			</Card>
			<Card>
				<PayPal />
			</Card>
			<Card>
				<DinersClub />
			</Card>
			<Card>
				<Discover />
			</Card>
		</Container>
	);
};

const Container = styled.ul`
	${FlexTemplate}
	margin-top : 36px;
`;

const Card = styled.li`
	margin: 4px;
`;
export default CardArea;
