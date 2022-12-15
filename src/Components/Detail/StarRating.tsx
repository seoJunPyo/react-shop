import React from 'react';
import { Rating } from '@mui/material';
import styled from '@emotion/styled';
import { FlexTemplate } from '../../assets/style/CommonStyle';

interface StarRatingProps {
	rate: {
		rate: number;
		count: number;
	};
}

const StarRating = (props: StarRatingProps) => {
	return (
		<RatingCon>
			<Rating defaultValue={props.rate.rate} size={'large'} readOnly />
			<Text>
				{props.rate.rate} / {props.rate.count} 참여
			</Text>
		</RatingCon>
	);
};

const RatingCon = styled.div`
	${FlexTemplate}
	justify-content: flex-start;

	.MuiRating-iconFilled {
		color: #facc15;
	}

	.MuiRating-iconEmpty {
		color: #544f34;
	}
`;

const Text = styled.p`
	margin-left: 8px;
`;

export default StarRating;
