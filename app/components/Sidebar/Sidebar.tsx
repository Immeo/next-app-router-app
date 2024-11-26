import { getMenu } from '@/api/menu';
import { ISidebar } from './Sidebar.props';

async function Sidebar({ ...props }: ISidebar) {
	const menu = await getMenu(0);

	return (
		<div {...props}>
			<ul>
				{menu.map(m => (
					<li key={m._id.secondCategory}>{m._id.secondCategory}</li>
				))}
			</ul>
		</div>
	);
}
export default Sidebar;
