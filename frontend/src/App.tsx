import React from 'react';
import { BrowserRouter as Router} from "react-router-dom"
import GlobalStile from "./styles/global"
import Routes from "./routes"
import AppProvider from "./hooks/index"

const App: React.FC = () => (
    <Router>
      <AppProvider>
        <Routes/>
      </AppProvider>
      <GlobalStile/>
    </Router>
)

export default App;
