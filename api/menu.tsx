import { API } from '@/app/api';
import { IMenuItem } from '@/interface/menu.interface';

export async function getMenu(firstCategory: number): Promise<IMenuItem[]> {
	const res = await fetch(API.topPage.find, {
		method: 'POST',
		body: JSON.stringify({
			firstCategory
		}),
		headers: new Headers({ 'content-type': 'application/json' })
	});
	if (!res.ok) {
		throw new Error('Failed to fetch data');
	}
	return res.json();
}
