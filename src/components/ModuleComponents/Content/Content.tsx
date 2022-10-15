import ChapterBox from './ChapterBox';
import ChaptersContainer from './ChaptersContainer';
import Element from './Element';
import Title from './Title';

// new components
import Card from './Card';

type ComponentsObject = {
	[key: string]: React.FC | ComponentsObject | any;
};

const Content: ComponentsObject = {
	ChaptersContainer,
	ChapterBox,
	Title,
	Element,
	Card,
};

export default Content;
