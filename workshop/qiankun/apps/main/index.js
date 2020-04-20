import { registerMicroApps, start } from 'qiankun';

registerMicroApps([
  {
    name: 'nav',
    entry: '//localhost:8000/',
    container: '#nav',
    activeRule: () => true,
  },
  {
    name: 'home', // app name registered
    entry: '//localhost:8001/',
    container: '#main',
    activeRule: '/home',
  },
  {
    name: 'dashboard',
    entry: '//localhost:8002/',
    container: '#main',
    activeRule: '/dashboard',
  },
]);

start({ singular: false });
