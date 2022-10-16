// import components
import MetaCard from '../MetaCard';
import ParagraphElement from '../../Content/elements/ParagraphElement';

// import libraries
import React from 'react';

function Goals({ goals }: any) {
	return (
		<>
			<MetaCard.Container colorKey="color2">
				<MetaCard.Title>מטרות המודול</MetaCard.Title>
				<ul>
					{goals?.map((goal: any) => {
						return (
							<li key={goal}>
								<ParagraphElement content={goal} />
							</li>
						);
					})}
				</ul>
			</MetaCard.Container>
		</>
	);
}

export default Goals;
