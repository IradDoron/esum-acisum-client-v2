import Element from '../Element';
function OrderedList(props: any) {
	const { content, items } = props;
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
