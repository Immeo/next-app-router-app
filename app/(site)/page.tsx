import Button from '@/app/components/Button/Button';
import Htag from '@/app/components/Htag/Htag';
import RatingRedser from '@/app/components/Rating/RatingRedser';
import VariableTag from '@/app/components/VariableTag/VariableTag';

export default function Home() {
	// const { rating, setRating } = useStateRating(4);

	return (
		<>
			<Htag tag='h1'>Nекст</Htag>
			<Button appearance='primary' className='test' arrowSvg='down'>
				primary
			</Button>
			<Button appearance='ghost' arrowSvg='right'>
				ghost
			</Button>

			<VariableTag size='s' color='ghost'>
				ghost
			</VariableTag>
			<RatingRedser />
		</>
	);
}
