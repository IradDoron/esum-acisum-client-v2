import Element from '../Element';

function UnorderedList(props: any) {
	const { content, items } = props;
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
