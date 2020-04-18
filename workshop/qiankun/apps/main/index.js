import { registerMicroApps, start } from 'qiankun';

registerMicroApps([
  {
    name: 'home', // app name registered
    entry: '//localhost:8001/',
    container: '#main',
    activeRule: '/home',
  },
  {
    name: 'giphy',
    entry: { scripts: ['//localhost:7100/giphy.js'] },
    container: '#main',
    activeRule: '/giphy',
  },
]);

start();
