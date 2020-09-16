import { App } from './App';

if (module.hot) module.hot.accept();

const root = document.getElementById('app-root');

root.appendChild(App());
