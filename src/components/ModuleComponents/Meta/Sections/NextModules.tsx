import MetaCard from '../MetaCard';

function NextModules({ nextModules }: any) {
	return (
		<MetaCard.Container colorKey="color4">
			<MetaCard.Title>מודולים להמשך</MetaCard.Title>
			<ul>
				{nextModules?.map((nextModule: any) => {
					return <li key={nextModule}>{nextModule}</li>;
				})}
			</ul>
		</MetaCard.Container>
	);
}

export default NextModules;
