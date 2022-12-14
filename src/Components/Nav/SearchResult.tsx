import styled from '@emotion/styled';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ShoppingListType } from '../../Type/Type';
import { useRecoilState } from 'recoil';
import { darkLightModeAtom } from '../../Atom/AtomStore';
import { hoverStyle, resultBgc } from '../../assets/Style/darkLightColor';

interface SearchResultProps {
	result: ShoppingListType[];
	reset: () => void;
}

const SearchResult = (props: SearchResultProps) => {
	const navigate = useNavigate();
	const [darkLightMode] = useRecoilState(darkLightModeAtom);

	return (
		<Container bgc={resultBgc(darkLightMode)}>
			{props.result.map((result) => (
				<Result
					hover={hoverStyle(darkLightMode)}
					key={result.title}
					onClick={() => {
						navigate(`/item/${result.id}`);
						props.reset();
					}}>
					{result.title}
				</Result>
			))}
		</Container>
	);
};

const Container = styled.div`
	position: absolute;
	top: calc(100% + 12px);
	width: 250px;
	padding: 6px 12px;
	background-color: ${(props: { bgc: string }) => props.bgc};
	border-radius: 0 0 10px 10px;
	z-index: 1000;
`;

const Result = styled.p`
	margin-bottom: 4px;
	padding: 12px;
	font-size: 14px;
	cursor: pointer;
	border-radius: 10px;

	:last-of-type {
		margin-bottom: 0;
	}

	:hover {
		background-color: ${(props: { hover: string }) => props.hover};
		transition: background-color 0.3s;
	}
`;

export default SearchResult;
