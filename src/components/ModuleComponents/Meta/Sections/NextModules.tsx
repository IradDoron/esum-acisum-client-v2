// import libraries
import React, { useEffect, useState } from 'react';
import { useRecoilValue } from 'recoil';

// import components
import MetaCard from '../MetaCard';

// import states
import { allModules } from '../../../../pages/ModulesPage/ModulesPage/states';

// import helpers
import { getModulesTitlesFromIds } from '../../helpers';

// types
interface Props {
	nextModules: any;
}

function NextModules(props: Props) {
	const { nextModules } = props;
	const [modulesTitles, setModulesTitles] = useState<any>([]);
	const allModulesState = useRecoilValue(allModules);
	useEffect(() => {
		if (nextModules && allModulesState) {
			setModulesTitles(getModulesTitlesFromIds(nextModules, allModulesState));
		}
	}, [nextModules, allModulesState]);

	return (
		<MetaCard.Container colorKey="color4">
			<MetaCard.Title>מודולים להמשך</MetaCard.Title>
			<ul>
				{modulesTitles?.map((nextModule: any) => {
					return <li key={nextModule}>{nextModule}</li>;
				})}
			</ul>
		</MetaCard.Container>
	);
}

export default NextModules;
