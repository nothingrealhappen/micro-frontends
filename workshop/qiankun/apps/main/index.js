import { registerMicroApps, start, initGlobalState, setDefaultMountApp } from 'qiankun';

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
        props: {
            onLoginSuccess: () => {
                history.pushState(null, '/dashboard', '/dashboard');
            },
        },
    },
    {
        name: 'home',
        entry: '//localhost:8003/',
        container: '#main',
        activeRule: '/home',
    },
    {
        name: 'dashboard',
        entry: '//localhost:8004/',
        container: '#main',
        activeRule: '/dashboard',
    },
]);

const { onGlobalStateChange, setGlobalState } = initGlobalState({
    currentApp: 'qiankun',
});

onGlobalStateChange((value, prev) =>
    console.log('[onGlobalStateChange - master]:', value, prev)
);

setGlobalState({
    isLogin: false,
});

setDefaultMountApp('/home');

start({ singular: false });
// start({ singular: false, sandbox: { strictStyleIsolation: true } });
