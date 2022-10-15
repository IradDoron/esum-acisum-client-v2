import Element from '../Element';

// import libraries
import React from 'react';

function UnorderedList(props: any) {
	const { items } = props;
	return (
		<ul>
			{items.map((item: any, index: any) => {
				return (
					<Element key={index} content={item.content} type={item.type}>
						{item.children}
					</Element>
				);
			})}
		</ul>
	);
}

export default UnorderedList;
