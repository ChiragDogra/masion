import "./App.css";
import Home from "./pages/home/Home";
import Header from "./components/header/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SearchPage from "./pages/searchpage/searchPage";
import Footer from "./components/footer/footer";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />

        <Routes>
          <Route path="/" element={<Home />}/>
          

          <Route path = "/search" element = {<SearchPage/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
