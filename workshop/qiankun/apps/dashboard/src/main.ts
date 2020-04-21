import Vue from 'vue';
import App from './App.vue';
import { MicroAppStateActions } from 'qiankun';

Vue.config.productionTip = false;

let instance: null | Vue = null;

interface AppProps extends Partial<MicroAppStateActions> {
    container?: Element;
}

function render(props: AppProps = {}) {
    const { container } = props;

    const targetContainer = container
        ? container.querySelector('#app')
        : '#app';

    instance = new Vue({
        render: (h) => h(App),
    }).$mount(targetContainer || undefined);
}

if (!window.__POWERED_BY_QIANKUN__) {
    render();
}

function storeTest(props: AppProps) {
    props.onGlobalStateChange &&
        props.onGlobalStateChange(
            (value, prev) =>
                console.log(`[onGlobalStateChange ]:`, value, prev),
            true
        );
}

export async function bootstrap() {
    console.log('[vue] vue app bootstraped');
}

export async function mount(props: any) {
    console.log('[vue] props from main framework', props);
    storeTest(props);
    render(props);
}

export async function unmount() {
    instance && instance.$destroy();
    instance = null;
}
