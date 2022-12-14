import styled from '@emotion/styled';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useRecoilState } from 'recoil';
//atom
import { shoppingListAtom } from '../Atom/AtomStore';
//type
import { ShoppingListType } from '../Type/Type';
// components
import DetailImg from '../Components/Detail/DetailImg';
import DetailInfo from '../Components/Detail/DetailInfo';
import CategoryBar from '../Components/Common/CategoryBar';
//style
import { PageContainer } from '../assets/Style/CommonStyle';

const DetailPage = () => {
	const { id } = useParams();
	const [shoppingList] = useRecoilState(shoppingListAtom);
	const [detailInfo, setDetailInfo] = useState<ShoppingListType[]>([]);

	useEffect(() => {
		const Info = shoppingList.filter((item) => item.id.toString() === id);
		setDetailInfo(Info);
	}, [shoppingList, id]);

	if (detailInfo.length < 1) {
		return <div></div>;
	}
	const { category, image, price, rating, title, description } = detailInfo[0];

	return (
		<Container>
			<CategoryBar root={category} currnet={title} />
			<Detail>
				<DetailImg img={image} />
				<DetailInfo info={{ title, description, price, rating }} />
			</Detail>
		</Container>
	);
};

const Container = styled.section`
	${PageContainer}
`;

const Detail = styled.div`
	display: flex;
	align-items: center;
	margin-top: 32px;

	@media (max-width: 968px) {
		flex-direction: column;
	}
`;

export default DetailPage;
