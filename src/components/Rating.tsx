interface RatingProps {
  rating: number,
};

export const Rating = ({rating}:  RatingProps) => {

  return (
    <p className='text-blue-500'>{rating}</p>
  );
};