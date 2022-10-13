import ChapterBox from './ChapterBox';
import ChaptersContainer from './ChaptersContainer';
import Description from './Description';
import ElementsBox from './ElementsBox';
import Title from './Title';
import Element from './Element';

type ComponentsObject = {
	[key: string]: React.FC;
};

const Content: ComponentsObject = {
	ChaptersContainer,
	ChapterBox,
	Description,
	ElementsBox,
	Title,
	Element,
};

export default Content;
