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
	prerequisites: string[];
}

function Prerequisites(props: Props) {
	const { prerequisites } = props;
	const [prerequisitesList, setPrerequisitesList] = useState<any>([]);
	const allModulesState = useRecoilValue(allModules);
	useEffect(() => {
		if (prerequisites && allModulesState) {
			setPrerequisitesList(
				getModulesTitlesFromIds(prerequisites, allModulesState)
			);
		}
	}, [prerequisites, allModulesState]);
	return (
		<MetaCard.Container colorKey="color1">
			<MetaCard.Title>מודולים קודמים נחוצים</MetaCard.Title>
			{prerequisitesList.length === 0 ? (
				<ul>
					<li>אין מודולים קודמים נחוצים</li>
				</ul>
			) : (
				<ul>
					{prerequisitesList?.map((prerequisitesList: any) => {
						return <li key={prerequisitesList}>{prerequisitesList}</li>;
					})}
				</ul>
			)}
		</MetaCard.Container>
	);
}

export default Prerequisites;
