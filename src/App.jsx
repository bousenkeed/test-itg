import { createContext, useRef, useState } from 'react';

import Form from './components/Form/Form';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';

import './App.scss';

export const AppContext = createContext();

function App() {
    const [sidebarOpened, setSidebarOpened] = useState(false);
    const mainRef = useRef(null)
    
    return (
        <div className="app">
            <AppContext.Provider value={{ sidebarOpened, setSidebarOpened }}>
                <Header />
                <div className="main">
                    <Sidebar />
                    <main className="content" ref={mainRef}>
                        <Form scrollContainerRef={mainRef}/>
                    </main>
                </div>
            </AppContext.Provider>
        </div>
    );
}

export default App;
