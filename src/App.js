import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./component/header/Header";
import Home from "./component/home/Home";
import Services from "./component/Services/Services";
import Footer from "./component/footer/Footer";
import ScrollTop from "./component/utility/ScrollTop";
import Price from "./component/price/Price";

function App() {
  return (    
    <BrowserRouter>
      <ScrollTop />
      <Header />
      <Routes>       
          <Route path="/" exact element={ <Home /> } />
          <Route path="/szolgaltatasok" element={ <Services /> } />       
          <Route path="/arak" element={ <Price /> } /> 
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;