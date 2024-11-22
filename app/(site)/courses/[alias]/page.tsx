import { getPage } from '@/api/page';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';

export const metadata: Metadata = {
	title: 'Course'
};

async function PageCourse({ params }: { params: { alias: string } }) {
	const page = await getPage(params.alias);

	if (!page) {
		notFound();
	}

	return (
		<div>
			Курс про {params.alias}, с тегами: {page.tags} и категорией:{' '}
			{page.category}
		</div>
	);
}
export default PageCourse;
