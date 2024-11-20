import { getMenu } from '@/api/menu';
import Button from '@/app/components/Button/Button';
import Htag from '@/app/components/Htag/Htag';
import RatingRedser from '@/app/components/Rating/RatingRedser';
import VariableTag from '@/app/components/VariableTag/VariableTag';

export default async function Home() {
	const menu = await getMenu(0);

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
			<ul>
				{menu.map(m => (
					<li key={m._id.secondCategory}>{m._id.secondCategory}</li>
				))}
			</ul>
		</>
	);
}
