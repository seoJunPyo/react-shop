import styled from '@emotion/styled';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useRecoilState } from 'recoil';
//atom
import { atomShoppingList } from '../Atom/AtomStore';
//type
import { ShoppingListType } from '../Type/dataType';
// components
import DetailImg from '../Components/Detail/DetailImg';
import DetailInfo from '../Components/Detail/DetailInfo';
import CategoryBar from '../Components/Common/CategoryBar';
//style
import { PageContainer } from '../assets/style/CommonStyle';

const DetailPage = () => {
	const { id } = useParams();
	const [shoppingList] = useRecoilState(atomShoppingList);
	const [detailInfo, setDetailInfo] = useState<ShoppingListType[]>([]);
	const [loading, setLoading] = useState('');

	useEffect(() => {
		setTimeout(() => {
			setLoading('end');
		}, 50);

		return () => {
			setLoading('');
		};
	}, []);

	useEffect(() => {
		const Info = shoppingList.filter((item) => item.id.toString() === id);
		setDetailInfo(Info);
	}, [shoppingList, id]);

	if (detailInfo.length < 1) {
		return <div></div>;
	}
	const { category, image, price, rating, title, description } = detailInfo[0];

	return (
		<Container className={loading}>
			<CategoryBar root={category} currnet={title} />
			<Detail>
				<DetailImg img={image} alt={title} />
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
	align-content: center;
	margin-top: 32px;

	@media (max-width: 968px) {
		flex-direction: column;
	}
`;

export default DetailPage;
