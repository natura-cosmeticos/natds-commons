import { App } from './App';
import { globalStyles, reset } from './styles/global';
import jss from './styles/jss';

jss
  .createStyleSheet(reset)
  .attach();

jss
  .createStyleSheet(globalStyles)
  .attach();

if (module.hot) module.hot.accept();

const root = document.getElementById('app-root');

root.appendChild(App());
