import config from './buildHtmlConfig';
import registerCreatePathsAction from './actions/registerCreatePathsAction';
import { registerHtmlFormat, registerSpectrumHtmlFormat } from './formats/registerHtmlFormat';

export default {
  actions: [registerCreatePathsAction],
  config,
  formats: [registerHtmlFormat, registerSpectrumHtmlFormat],
  transforms: [],
};
