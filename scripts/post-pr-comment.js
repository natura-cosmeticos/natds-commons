import { postComment } from '@mixmaxhq/post-github-comment-from-travis';
import pkg from '../package.json';

const numDependencies = Object.keys(pkg.scripts).length;

postComment(`there are now ${numDependencies} dependencies`, { purpose: 'dependency-count' })
  .then((result) => console.log(result));
