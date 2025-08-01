// src/App.jsx
import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';
import Accolades from './components/Accolades';
import EZeeScaping from './components/EZeeScaping';
import EZeeRotation from './components/EZeeRotation';
import Features from './components/Features';
import Faq from './components/Faq.jsx';
import Pricing from './components/Pricing';
import { MantineProvider, createTheme } from '@mantine/core';
import '@mantine/core/styles.css';

import { createAppTheme } from "./theme.ts";
import { ThemeProvider, useTheme } from './contexts/ThemeContext';

import './App.css';

function AppContent() {
    const { getMantinePrimaryColor, currentTheme, colorScheme } = useTheme();
    const mantineTheme = React.useMemo(() => {
        return createAppTheme(getMantinePrimaryColor());
    }, [currentTheme, getMantinePrimaryColor]);

    return (
        <MantineProvider
            forceColorScheme={colorScheme}
            theme={mantineTheme}
        >
            <Router>
                <div className="App">
                    <Navbar />
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/accolades" element={<Accolades />} />
                        <Route path="/ezeerotation" element={<EZeeRotation />} />
                        <Route path="/ezeescaping" element={<EZeeScaping />} />
                        <Route path="/features" element={<Features />} />
                        <Route path="/faq" element={<Faq />} />
                        <Route path="/pricing" element={<Pricing />} />
                    </Routes>
                    <Footer />
                </div>
            </Router>
        </MantineProvider>
    );
}

function App() {
    return (
        <ThemeProvider>
            <AppContent />
        </ThemeProvider>
    );
}

export default App;
