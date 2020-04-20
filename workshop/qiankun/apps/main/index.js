import { registerMicroApps, start } from 'qiankun';

registerMicroApps([
    {
        name: 'nav',
        entry: '//localhost:8001/',
        container: '#nav',
        activeRule: () => true,
    },
    {
        name: 'login',
        entry: '//localhost:8002/',
        container: '#main',
        activeRule: '/login',
    },
    {
        name: 'home', // app name registered
        entry: '//localhost:8003/',
        container: '#main',
        activeRule: '/home',
    },
]);

start({ singular: false });
// start({ singular: false, sandbox: { strictStyleIsolation: true } });
