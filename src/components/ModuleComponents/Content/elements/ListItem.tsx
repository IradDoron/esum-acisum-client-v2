import Element from '../Element';

function ListItem(props: any) {
	const { type, content, children } = props.children[0];
	return (
		<li>
			<Element type={type} content={content}>
				{children}
			</Element>
		</li>
	);
}

export default ListItem;
