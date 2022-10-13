import ChapterBox from './ChapterBox';
import ChaptersContainer from './ChaptersContainer';
import Element from './Element';
import ElementsBox from './ElementsBox';
import Title from './Title';

// new components
import Card from './Card';

type ComponentsObject = {
	[key: string]: React.FC | ComponentsObject;
};

const Content: ComponentsObject = {
	ChaptersContainer,
	ChapterBox,
	ElementsBox,
	Title,
	Element,
	Card,
};

export default Content;
