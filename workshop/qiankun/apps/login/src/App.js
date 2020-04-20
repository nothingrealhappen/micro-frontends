import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import { Divider } from 'antd';

import 'antd/dist/antd.min.css';
import './App.css';

import LibVersion from './components/LibVersion';
import HelloModal from './components/HelloModal';

import SignIn from './pages/SignIn';
const SignUp = lazy(() => import('./pages/SignUp'));

const RouteExample = () => {
    return (
        <Router basename={window.__POWERED_BY_QIANKUN__ ? '/login' : '/'}>
            <nav>
                <Link to="/">Sign in</Link>
                <Divider type="vertical" />
                <Link to="/signup">Sign up</Link>
            </nav>
            <Suspense fallback={null}>
                <Switch>
                    <Route path="/" exact component={SignIn} />
                    <Route path="/signup" component={SignUp} />
                </Switch>
            </Suspense>
        </Router>
    );
};

export default function App() {
    return (
        <div className="app-main">
            <LibVersion />
            <HelloModal />

            <Divider />

            <RouteExample />
        </div>
    );
}
