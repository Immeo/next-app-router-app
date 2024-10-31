'use client';

import { useStateRating } from '@/app/hook/workState/useStateRating';
import Rating from './Rating';

function RatingRedser() {
	const { rating, setRating } = useStateRating(1);
	return (
		<>
			<Rating isEditable={true} rating={rating} setRating={setRating} />
		</>
	);
}
export default RatingRedser;
