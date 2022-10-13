import MetaCard from '../MetaCard';

function Prerequisites({ prerequisites }: any) {
	return (
		<MetaCard.Container colorKey="color1">
			<MetaCard.Title>מודולים קודמים נחוצים</MetaCard.Title>
			<ul>
				{prerequisites?.map((prerequisite: any) => {
					return <li key={prerequisite}>{prerequisite}</li>;
				})}
			</ul>
		</MetaCard.Container>
	);
}

export default Prerequisites;
