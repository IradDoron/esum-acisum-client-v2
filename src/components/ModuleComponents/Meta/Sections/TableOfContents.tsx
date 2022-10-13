import MetaCard from '../MetaCard';

function TableOfContents({ tableOfContents }: any) {
	return (
		<MetaCard.Container colorKey="color3">
			<MetaCard.Title>תוכן עניינים</MetaCard.Title>
			<ul>
				{tableOfContents()?.map((title: any) => {
					return <li key={title}>{title}</li>;
				})}
			</ul>
		</MetaCard.Container>
	);
}

export default TableOfContents;
