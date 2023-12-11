import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Cards from "./pages/Cards";
import NavBar from "./components/NavBar";
import './index.css';
import { Provider } from "react-redux";
import store from "./store/store"
function App() {
  return (
    <div className="App">
     <Provider store= {store}>
     <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/card" element={<Cards/>}/>
      </Routes>
      </BrowserRouter>
     </Provider>
    </div>
  );
}

export default App;
