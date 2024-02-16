import './App.css';
import Index from './pages/Index.';
import Apropos from './pages/Index.';
import {BrowserRouter as Router,Routes,Route}

function App() {
  return(
    <div className="App">
       <Router>
          <Routes>
            <Route path= '/' element={ <Index />} />
            <Route path= '/about' element={ <Apropos />} />  
          </Routes>
        n</Router>
    {/* Index /> */}
  </div>
  );
}

export default App;
