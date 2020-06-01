import { createColorIndex } from './react-dom/createColorIndex';


const postBuildTasks = [
  createColorIndex,
];

postBuildTasks.forEach(buildTask => buildTask());
