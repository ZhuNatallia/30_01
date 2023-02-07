import React, { useState } from 'react';
import { useEffect } from 'react';
import Product from '../Product';
import s from './style.module.css';

export default function ProductContainer() {
	const [products, setProducts] = useState([]);

	useEffect(() => {
		(async () => {
			const resp = await fetch('https://dummyjson.com/products');
			const data = await resp.json();
			const result = data.products.map(
				({ id, title, price, description, images, discountPercentage }) => ({
					id,
					title,
					price,
					description,
					image: images[0],
					discountPercentage,
				})
			);
			setProducts(result);
		})();
	}, []);

	const deleteProduct = (delId) =>
		setProducts(products.filter(({ id }) => id !== delId));

	const countProductMin = +products.reduce(
		(prev, { discountPercentage }) => prev + (discountPercentage < 10),
		0
	);

	const countProductMax = +products.reduce(
		(prev, { discountPercentage }) => prev + (discountPercentage > 10),
		0
	);

	return (
		<div>
			<h3>Товары</h3>
			<div className={s.container}>
				{products.map((product) => (
					<Product
						key={product.id}
						{...product}
						deleteProduct={deleteProduct}
					/>
				))}
			</div>
			<div className={s.calculation}>
				<p>
					Всего товаров: {products.length}
					<p className={s.max}>
						Количество товаров со скидкой больше 10% : {countProductMin}{' '}
					</p>
					<p className={s.min}>
						Количество товаров со скидкой менее 10%: {countProductMax}
					</p>
				</p>
			</div>
		</div>
	);
}
