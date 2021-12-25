type RatingProps = {
  rating: number;
};

function Rating({rating}: RatingProps): JSX.Element {
  const stars = new Array(5).fill(null);
  const roundedRating = Math.round(rating);
  return (
    <>
      {stars.slice(0, roundedRating).map(() => (
        <svg key={Math.random()} width="12" height="11" aria-hidden="true">
          <use xlinkHref="#icon-full-star"></use>
        </svg>
      ))}
      {stars.slice(roundedRating, stars.length).map(() => (
        <svg key={Math.random()} width="12" height="11" aria-hidden="true">
          <use xlinkHref="#icon-star"></use>
        </svg>
      ))}
    </>
  );
}

export default Rating;
