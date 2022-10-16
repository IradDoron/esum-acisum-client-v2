import ImageElement from './elements/ImageElement';
import ListItem from './elements/ListItem';
import OrderedList from './elements/OrderedList';
import ParagraphElement from './elements/ParagraphElement';
import UnorderedList from './elements/UnorderedList';
import VideoElement from './elements/VideoElement';
import Chordilon from './elements/Chordilon';

function Element(props: any) {
	// type is the type of the comoonent
	const { type, content, children, tonic, scaleType, title } = props;

	function renderElement(type: string, content: any, children: any) {
		switch (type) {
			case 'paragraph': {
				return <ParagraphElement content={content}>{content}</ParagraphElement>;
			}
			case 'video': {
				return <VideoElement content={content} />;
			}
			case 'image': {
				return <ImageElement content={content} />;
			}
			case 'orderedList': {
				return <OrderedList content={content} items={children} />;
			}
			case 'unorderedList': {
				return <UnorderedList content={content} items={children} />;
			}
			case 'listItem': {
				return <ListItem content={content} children={children} />;
			}

			case 'chordilon': {
				return (
					<Chordilon
						content={content}
						tonic={tonic}
						scaleType={scaleType}
						title={title}
					/>
				);
			}
			default: {
				return <div>Unknown element type</div>;
			}
		}
	}
	return <div>{renderElement(type, content, children)}</div>;
}

export default Element;
