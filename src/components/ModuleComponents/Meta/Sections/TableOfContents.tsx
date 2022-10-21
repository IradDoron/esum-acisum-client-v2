// import components
import MetaCard from '../MetaCard';
import ParagraphElement from '../../Content/elements/ParagraphElement';

// import libraries
import React from 'react';

function TableOfContents({ tableOfContents }: any) {
	return (
		<MetaCard.Container colorKey="color3">
			<MetaCard.Title colorKey="color3">תוכן עניינים</MetaCard.Title>
			<ul>
				{tableOfContents()?.map((title: any) => {
					return (
						<li key={title}>
							<ParagraphElement content={title} />
						</li>
					);
				})}
			</ul>
		</MetaCard.Container>
	);
}

export default TableOfContents;
