import Image from 'next/image';

interface Props {
	params: { [key: string]: string };
}

export const dynamicParams = true ;

export function generateStaticParams(){
   return [{ topic: 'sports' }, { topic: 'cars' }];
}

export default async function Topic({ params: { topic } }: Props) {
	const clientId = '11XnFh_2t9tTXTGYmbpRCeD5eCPBIJksfiwjr1SnyAo';
	const response = await fetch(
		`https://api.unsplash.com/photos/random?query=${topic}&count=5&client_id=${clientId}`,
	);

	const images = await response.json();

	return (
		<>
			<h1>{topic}</h1>
			{images.map((image: any) => {
				return (
					<Image
						key={image.urls.raw}
						width={250}
						height={250}
						src={image.urls.raw}
						alt='DESC'
					/>
				);
			})}
		</>
	);
}
