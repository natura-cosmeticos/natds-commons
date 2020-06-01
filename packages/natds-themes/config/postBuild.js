import postBuildTasks from './shared/config';

export const postBuild = () => postBuildTasks.forEach(buildTask => buildTask());

export default postBuild;
