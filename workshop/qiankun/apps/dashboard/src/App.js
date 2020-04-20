import React from 'react';
import './app.css';

const App = () => {
    return (
        <div className="dashboard-container">
            <iframe
                title="COVID-19 dashboard"
                style={{ width: '100%', height: '100%', position: 'absolute', top: 0, left: 0 }}
                src="https://www.youtube.com/embed/x6UiR9Rs6dA?autoplay=1"
                frameBorder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
            />
        </div>
    );
};

export default App;
