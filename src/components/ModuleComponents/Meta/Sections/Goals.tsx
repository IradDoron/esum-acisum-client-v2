
import MetaCard from '../MetaCard';


function Goals({ goals }: any) {
	return (
		<>
		<MetaCard.Container colorKey="color2">
			<MetaCard.Title>מטרות המודול</MetaCard.Title>
			<ul>
				{goals?.map((goal: any) => {
					return <li key={goal}>{goal}</li>;
				})}
			</ul>
		</MetaCard.Container>
			
		</>
	);
}

export default Goals;
