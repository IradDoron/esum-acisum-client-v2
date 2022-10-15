import Element from '../Element';
import React from 'react';
function OrderedList(props: any) {
	const { items } = props;
	return (
		<ol>
			{items.map((item: any, index: any) => {
				return (
					<Element key={index} content={item.content} type={item.type}>
						{item.children}
					</Element>
				);
			})}
		</ol>
	);
}

export default OrderedList;
