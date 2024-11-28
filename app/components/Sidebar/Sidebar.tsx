import Menu from '../Menu/Menu';
import { ISidebar } from './Sidebar.props';

async function Sidebar({ ...props }: ISidebar) {
	return (
		<div {...props}>
			<Menu />
		</div>
	);
}
export default Sidebar;
