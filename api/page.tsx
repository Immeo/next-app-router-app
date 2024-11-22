import { API } from '@/app/api';
import { ITopPageModel } from '@/interface/pages.interfase';

export async function getPage(alias: string): Promise<ITopPageModel | null> {
	// await new Promise(res =>
	// 	setTimeout(() => {
	// 		res('');
	// 	}, 3000)
	// );
	const res = await fetch(API.topPage.byAlias + alias, {
		next: { revalidate: 10 }
	});
	if (!res.ok) {
		return null;
	}
	return res.json();
}
