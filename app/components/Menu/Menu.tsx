import { getMenu } from '@/api/menu';
import { IFirstLevelMenuItem, IPageItem } from '@/interface/menu.interface';
import { TopLevelCategory } from '@/interface/pages.interfase';
import cn from 'classnames';
import Link from 'next/link';
import BookIcon from '../../../helpers/icons/books.svg';
import CourssIcon from '../../../helpers/icons/courses.svg';
import ProductIcon from '../../../helpers/icons/products.svg';
import ServiseIcon from '../../../helpers/icons/services.svg';
import styles from './Menu.module.css';

const firstLevelMenu: IFirstLevelMenuItem[] = [
	{
		route: 'courses',
		name: 'Курсы',
		icon: <CourssIcon />,
		id: TopLevelCategory.Courses
	},
	{
		route: 'services',
		name: 'Сервисы',
		icon: <ServiseIcon />,
		id: TopLevelCategory.Services
	},
	{
		route: 'books',
		name: 'Книги',
		icon: <BookIcon />,
		id: TopLevelCategory.Books
	},
	{
		route: 'products',
		name: 'Продукты',
		icon: <ProductIcon />,
		id: TopLevelCategory.Products
	}
];

async function Menu() {
	const dataMenu = await getMenu(0);

	const buildFirstLevel = () => {
		return (
			<>
				{firstLevelMenu.map(m => {
					return (
						<div key={m.route}>
							<Link href={`/${m.route}`}>
								<div
									className={cn(styles.firstLevel, {
										[styles.active]: m.id === 0
									})}
								>
									{m.icon}
									<span>{m.name}</span>
								</div>
							</Link>
							{m.id === 0 && buildSecondLevel(m)}
						</div>
					);
				})}
			</>
		);
	};

	const buildSecondLevel = (menuItem: IFirstLevelMenuItem) => {
		return (
			<div className={styles.secondBlock}>
				{dataMenu.map(m => (
					<div key={m._id.secondCategory}>
						<div className={styles.secondLevel}>{m._id.secondCategory}</div>
						<div
							className={cn(styles.secondLevelBlock, {
								[styles.secondLevelBlockOpened]: m.isOpened
							})}
						>
							{buildThirdLevel(m.pages, menuItem.route)}
						</div>
					</div>
				))}
			</div>
		);
	};

	const buildThirdLevel = (pages: IPageItem[], route: string) => {
		return pages.map(page => (
			<a
				key={page.alias}
				href={`/${route}/${page.alias}`}
				className={cn(styles.thirdLevel, {
					[styles.active]: true
				})}
			>
				{page.category}
			</a>
		));
	};

	return <div className={styles.menu}>{buildFirstLevel()}</div>;
}
export default Menu;
