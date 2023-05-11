import { HashRouter, Routes, Route } from 'react-router-dom';
import Test from './views/test';
import App from './App';
import Main from './views/main.js';


const RSRoutes = () => {
    return (
        <HashRouter>
            <Routes>
                <Route exact path="/main" element={<App/>} />
                <Route exact path="/test" element={<Test/>} />
                <Route path="/" element={<Main/>} />
            </Routes>
        </HashRouter>
    )
}

export default RSRoutes;
