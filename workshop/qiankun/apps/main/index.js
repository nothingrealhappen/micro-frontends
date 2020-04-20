import { registerMicroApps, start, initGlobalState } from 'qiankun';

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
        name: 'home', // app name registered
        entry: '//localhost:8003/',
        container: '#main',
        activeRule: '/home',
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

start({ singular: false });
// start({ singular: false, sandbox: { strictStyleIsolation: true } });
