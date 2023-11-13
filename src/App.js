import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./component/header/Header";
import Home from "./component/home/Home";
import Services from "./component/Services/Services";
import Footer from "./component/footer/Footer";
import Price from "./component/price/Price";
import Gallery from "./component/gallery/Gallery";
import ScrollTop from "./component/utility/ScrollTop";
import NotFound from "./component/errorComp/NotFound";
import Cookie from "./component/footer/Cookie";

function App() { 

  return (    
    <BrowserRouter>
      <ScrollTop />
      <Header />
      <Routes>       
          <Route path="/" exact element={ <Home /> } />
          <Route path="/szolgaltatasok" element={ <Services /> } />       
          <Route path="/arak" element={ <Price /> } /> 
          <Route path="/munkak/*" element={ <Gallery /> } />
          <Route path="/*" element={ <NotFound /> } />
      </Routes>
      <Cookie />
      <Footer />
    </BrowserRouter>
  );
}

export default App;