import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { NavBar } from './components/common/NavBar';
import { LandingPage } from './components/pages/LadingPage';
import { Footer } from './components/common/Footer';

import { ScrollToTop } from './hooks/ScrollTop';

function App() {
    return (
        <BrowserRouter basename="/mejoravit-2-1.0">
            <ScrollToTop />

            <NavBar />

            <Routes>
                <Route path="/" element={<LandingPage />} />
            </Routes>

            <Footer />
        </BrowserRouter>
    );
}

export default App;