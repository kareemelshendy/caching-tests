import Image from 'next/image';
import Link from 'next/link';

// export const dynamic = "force-dynamic";

interface Props {
	searchParams: { [key: string]: string };
}

export default async function Home({ searchParams }: Props) {
	const clientId = '11XnFh_2t9tTXTGYmbpRCeD5eCPBIJksfiwjr1SnyAo';
	const response = await fetch(
		`https://api.unsplash.com/photos/random?client_id=${clientId}`
	);

	const images = await response.json();

	return (
		<main className='flex min-h-screen flex-col items-center justify-between p-24'>
			<h2 style={{ fontSize: '30px' }}>{Math.random()}</h2>
			<Link href='/tests'>Go to test</Link>
			{JSON.stringify(searchParams)}
			<Image width={250} height={250} src={images.urls.raw} alt='DESC' />
		</main>
	);
}
