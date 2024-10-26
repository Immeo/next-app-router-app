import Button from '@/components/Button/Button';
import Htag from '@/components/Htag/Htag';

export default function Home() {
	return (
		<div>
			<Htag tag='h1'>Nекст</Htag>
			<Button appearance='primary'>primary</Button>
			<Button appearance='ghost'>ghost</Button>
		</div>
	);
}
