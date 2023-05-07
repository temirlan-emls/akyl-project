import { Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import LayoutPage from './pages/LayoutPage';
import ParkingPage from './pages/ParkingPage';
import MapsPage from './pages/MapsPage';

function App() {
    return (
        <Routes>
            <Route path="/login" element={<LoginPage />}></Route>
            <Route path="/" element={<LayoutPage />}>
                <Route path="/parkings" element={<ParkingPage />}></Route>
                <Route path="/maps" element={<MapsPage />}></Route>
            </Route>
        </Routes>
    );
}

export default App;
