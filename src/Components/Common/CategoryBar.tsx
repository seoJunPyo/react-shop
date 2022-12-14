import React from 'react';
import styled from '@emotion/styled';
import { IoIosArrowForward } from 'react-icons/io';

interface CategoryBarProps {
	root: string;
	currnet: string | undefined;
}

const CategoryBar = (props: CategoryBarProps) => {
	return (
		<Category>
			{props.root} <IoIosArrowForward /> {props.currnet}
		</Category>
	);
};

const Category = styled.h2`
	display: flex;
	align-items: center;
	padding: 0 24px;
	font-size: 14px;
	line-height: 1.2;
	opacity: 0.8;

	svg {
		margin: 0 4px;
		transform: translateY(2px);

		@media (max-width: 576px) {
			margin: 0;
		}
	}

	@media (max-width: 576px) {
		padding: 0 100px 0 0;
		font-size: 12px;
		text-overflow: ellipsis;
		overflow: hidden;
		display: -webkit-box;
		-webkit-line-clamp: 1;
		-webkit-box-orient: vertical;
	}
`;

export default CategoryBar;
