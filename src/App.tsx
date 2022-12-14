//libray
import { Routes, Route } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import axios from 'axios';
import useSWR from 'swr';
import styled from '@emotion/styled';
//component & page
import Nav from './Components/Nav/Nav';
import Footer from './Components/Footer/Footer';
import MainPage from './Page/MainPage';
import DetailPage from './Page/DetailPage';
import CategoryPage from './Page/CategoryPage';
import CartPage from './Page/CartPage';
import NotFoundPage from './Page/NotFoundPage';
//atom
import { atomShoppingList, atomDarkLightMode } from './Atom/AtomStore';
//css
import './App.css';
import { bodyBgc, bodyText } from './assets/style/darkLightColor';

function App() {
	const [_, setShoppingList] = useRecoilState(atomShoppingList);

	const [darkLigthMode] = useRecoilState(atomDarkLightMode);

	const { isLoading } = useSWR('key', async () => {
		const result = await axios.get('https://fakestoreapi.com/products');
		setShoppingList(result.data);
		return result.data;
	});

	return (
		<Body color={bodyText(darkLigthMode)} bgc={bodyBgc(darkLigthMode)}>
			<Nav />
			<Routes>
				<Route path="/" element={<MainPage isLoading={isLoading} />} />
				<Route path="/item/:id" element={<DetailPage />} />
				<Route
					path="category/:category"
					element={<CategoryPage isLoading={isLoading} />}
				/>
				<Route path="/cart" element={<CartPage />} />
				<Route path="/*" element={<NotFoundPage />} />
			</Routes>
			<Footer />
		</Body>
	);
}

interface BodyStyle {
	color: string;
	bgc: string;
}

const Body = styled.div<BodyStyle>`
	background-color: ${(props) => props.bgc};
	color: ${(props) => props.color};
	transition: all 0.3s;
`;

export default App;
