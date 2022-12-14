import styled from '@emotion/styled';
import { grey } from '@mui/material/colors';
import React, { useEffect, useState, useRef, LegacyRef } from 'react';
import { BiSearch } from 'react-icons/bi';
import { useRecoilState } from 'recoil';
import {
	Button,
	FlexTemplate,
	WrapStyle,
} from '../../assets/Style/CommonStyle';
import { hoverStyle, inputBgc } from '../../assets/Style/darkLightColor';
import { darkLightModeAtom, shoppingListAtom } from '../../Atom/AtomStore';
import { ShoppingListType } from '../../Type/Type';
import { getSearchResult } from './getSearchReesult';
import SearchResult from './SearchResult';
import SearchResultMobile from './SearchResultMobile';

const NavInput = () => {
	const [shoppingList] = useRecoilState(shoppingListAtom);
	const [darkLightMode] = useRecoilState(darkLightModeAtom);
	const [searchKeyword, setserchKeyword] = useState('');
	const [result, setResult] = useState<ShoppingListType[]>([]);
	const [mobileInputState, setMobileInputState] = useState(false);
	const [wrap, setWrap] = useState(false);

	useEffect(() => {
		const getResult = getSearchResult(shoppingList, searchKeyword);
		setResult(getResult);
	}, [searchKeyword]);

	const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setserchKeyword(e.target.value);
		e.target.value !== '' ? setWrap(true) : setWrap(false);
	};

	const reset = () => {
		setserchKeyword('');
		setMobileInputState(false);
		setWrap(false);
	};

	const searBtnClick = () => {
		setMobileInputState(!mobileInputState);
		setWrap(!wrap);
		setserchKeyword('');
	};

	const wrapClick = () => {
		setWrap(!wrap);
		setMobileInputState(false);
	};

	return (
		<>
			<SearchBtn hover={hoverStyle(darkLightMode)} onClick={searBtnClick}>
				<BiSearch />
			</SearchBtn>
			<Wrap display={wrap ? 'block' : 'none'} onClick={wrapClick} />

			{/* 일반 인풋 */}
			<InputCon>
				<Input
					type="text"
					placeholder="검색"
					onChange={handleOnChange}
					value={searchKeyword}
					bgc={inputBgc(darkLightMode)}
				/>
				{wrap && result.length >= 1 && searchKeyword !== '' && (
					<SearchResult result={result} reset={reset} />
				)}
			</InputCon>

			{/* 모바일 인풋 */}
			<MobileInputCon
				display={mobileInputState ? 'block' : 'none'}
				bgc={inputBgc(darkLightMode)}>
				<MobileInput
					type="text"
					placeholder="검색"
					onChange={handleOnChange}
					value={searchKeyword}
				/>
				{wrap && result.length >= 1 && searchKeyword !== '' && (
					<SearchResultMobile result={result} reset={reset} />
				)}
			</MobileInputCon>
		</>
	);
};

interface MobileInputStyle {
	bgc: string;
	display: string;
}

const SearchBtn = styled.button`
	padding: 12px;
	border-radius: 10px;
	${Button}
	${FlexTemplate}
	
	:hover {
		background-color: ${(props: { hover: string }) => props.hover};
		transition: background-color 0.3s;
	}

	@media (min-width: 576px) {
		display: none;
	}
`;

const InputCon = styled.div`
	@media (max-width: 576px) {
		display: none;
	}
`;

const Input = styled.input`
	width: 200px;
	padding: 12px;
	margin: 0 4px;
	background-color: ${(props: { bgc: string }) => props.bgc};
	border-radius: 5px;
	color: inherit;
	font-size: 12px;
	outline: none;
	transition: background-color 0.3s;

	::placeholder {
		color: #9ca3af;
		opacity: 0.6;
	}
`;

const Wrap = styled.div`
	${WrapStyle}
	display :${(props: { display: string }) => props.display};
	top: 64px;
	left: 0;
`;

const MobileInputCon = styled.div`
	position: fixed;
	left: 0;
	top: 64px;
	width: 100%;
	z-index: 999;
	display: ${(props: MobileInputStyle) => props.display};
	background-color: ${(props) => props.bgc};
	transition: opacity 0.2s;

	@media (min-width: 576px) {
		display: none;
	}
`;

const MobileInput = styled.input`
	width: 100%;
	padding: 16px 16px;
	background-color: inherit;
	color: inherit;
	outline: none;
	/* border-bottom: 1px solid #e3e3e3; */
`;

export default NavInput;
