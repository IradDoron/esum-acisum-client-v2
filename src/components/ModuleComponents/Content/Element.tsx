// import elements
import Chordilon from './elements/Chordilon';
import ImageElement from './elements/ImageElement';
import ListItem from './elements/ListItem';
import OrderedList from './elements/OrderedList';
import ParagraphElement from './elements/ParagraphElement';
import SubTitle from './elements/SubTitle';
import UnorderedList from './elements/UnorderedList';
import VideoElement from './elements/VideoElement';

// import quiz elements
import QuizContainer from './quizElements/QuizContainer';

// import libraries
import React from 'react';

function Element(props: any) {
	// type is the type of the comoonent
	const { type, content, children, tonic, scaleType, title, quiz, quizSections } = props;

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
			case 'subTitle': {
				return <SubTitle content={content} />;
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
			
			case 'quiz': {
				return <QuizContainer quizSections={quizSections} />;
			}
			default: {
				return <div>Unknown element type</div>;
			}
		}
	}
	return <div>{renderElement(type, content, children)}</div>;
}

export default Element;
