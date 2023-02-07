import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

/* First level: реализуйте React  приложение, которое отображает товары, загруженные по ссылке https://dummyjson.com/products.
Должна быть возможность удалить товар по нажатию на кнопку. 
Внизу должен быть расчет общего количества товаров, цены без скидки и цены со скидкой.
Для лучшего понимания итогового результата вы можете ориентироваться на макет https://www.figma.com/file/U9FC0rXCjqTTDhRvHzF8ZT/Products?node-id=0%3A1&t=5vWebASvPbXh1Dg9-1 */
