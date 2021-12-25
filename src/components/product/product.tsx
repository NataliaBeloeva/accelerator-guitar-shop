import { Guitar } from '../../types/guitar';
import Rating from '../rating/rating';

type GuitarProps = {
  guitar: Guitar;
};

function Product({guitar}: GuitarProps): JSX.Element {
  const {id, name, previewImg, rating, price} = guitar;
  const previewImgUrl = previewImg.split('/');

  return (
    <div key={id} className="product-card">
      <img src={`img/content/${previewImgUrl[1]}`} width="75" height="190" alt="СURT Z30 Plus Acoustics" />
      <div className="product-card__info">
        <div className="rate product-card__rate" aria-hidden="true"><span className="visually-hidden">Рейтинг:</span>
          <Rating rating={rating} />
          <span className="rate__count">{rating}</span>
          <span className="rate__message"></span>
        </div>
        <p className="product-card__title">{name}</p>
        <p className="product-card__price">
          <span className="visually-hidden">Цена:</span>
          {price} ₽
        </p>
      </div>
      <div className="product-card__buttons">
        <a className="button button--mini" href="#!">Подробнее</a>
        <a className="button button--red button--mini button--add-to-cart" href="#!">Купить</a>
      </div>
    </div>
  );
}

export default Product;
