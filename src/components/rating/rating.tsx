import { StarType } from '../../const';
import { StarSize } from './const';

type RatingProps = {
  rating: number;
  starType: string;
};

function Rating({rating, starType}: RatingProps): JSX.Element {
  const stars = new Array(5).fill(null);
  const roundedRating = Math.round(rating);

  const isRatingDefault = starType === StarType.Default;
  return (
    <>
      {stars.slice(0, roundedRating).map(() => (
        <svg key={Math.random()}
          width={isRatingDefault ? StarSize.default.width : StarSize.product.width}
          height={isRatingDefault ? StarSize.default.height : StarSize.product.height}
          aria-hidden="true"
        >
          <use xlinkHref="#icon-full-star"></use>
        </svg>
      ))}
      {stars.slice(roundedRating, stars.length).map(() => (
        <svg key={Math.random()}
          width={isRatingDefault ? StarSize.default.width : StarSize.product.width}
          height={isRatingDefault ? StarSize.default.height : StarSize.product.height}
          aria-hidden="true"
        >
          <use xlinkHref="#icon-star"></use>
        </svg>
      ))}
    </>
  );
}

export default Rating;
