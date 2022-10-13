import ImageElement from './elements/ImageElement';
import ListItem from './elements/ListItem';
import OrderedList from './elements/OrderedList';
import ParagraphElement from './elements/ParagraphElement';
import UnorderedList from './elements/UnorderedList';
import VideoElement from './elements/VideoElement';

function Element(props: any) {
	// type is the type of the comoonent
	const { type, content, children } = props;

	function renderElement(type: string, content: any, children: any) {
		switch (type) {
			case 'paragraph': {
				return (
					<ParagraphElement content={content}>{content}</ParagraphElement>
				);
			}
			case 'video': {
				return <VideoElement content={content}>{children}</VideoElement>;
			}
			case 'image': {
				return <ImageElement content={content}>{children}</ImageElement>;
			}
			case 'orderedList': {
				return <OrderedList content={content} items={children}/>;
			}
			case 'unorderedList': {
				return <UnorderedList content={content} items={children}/>;
			}
			case 'listItem': {
				return <ListItem content={content} children={children}/>;
			}
			default: {
				return <div>Unknown element type</div>;
			}
		}
	}
	return <div>{renderElement(type, content, children)}</div>;
}

export default Element;
