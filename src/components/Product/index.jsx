import React from 'react';
import s from './style.module.css';

export default function Product({
	id,
	title,
	description,
	price,
	image,
	deleteProduct,
	discountPercentage,
}) {
	return (
		<div className={s.card}>
			<img src={image} alt={title} />
			<p>{title}</p>
			<p>{description}</p>
			<p>Стоимость: {price} дол</p>
			<p>Размер скидки: {discountPercentage}%</p>
			<div className={s.containerBut}>
				<button onClick={() => deleteProduct(id)}>Удалить</button>
			</div>
		</div>
	);
}
