export function getModulesTitlesFromIds(
	modulesIds: number[] | any,
	allModules: any
) {
	// TODO: fix any
	const titles: string[] = [];
	for (const moduleId of modulesIds) {
		const moduleData: any = allModules.find(
			(module: any) => Number(module.id) === moduleId
		);
		titles.push(moduleData?.meta?.title);
	}
	return titles;
}
