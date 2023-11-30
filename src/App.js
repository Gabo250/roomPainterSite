import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./component/header/Header";
import Footer from "./component/footer/Footer";
import NotFound from "./component/errorComp/NotFound";
import Cookie from "./component/footer/Cookie";
import Home from "./component/sites/Home";
import Services from "./component/sites/Services";
import Price from "./component/sites/Price";
import Gallery from "./component/sites/Gallery";
import RoomPaint from "./component/sites/RoomPaint";
import Daub from "./component/sites/Daub";
import PaperHanging from "./component/sites/PaperHanging";
import PlasterBorading from "./component/sites/PlasterBoarding";
import ScrollTop from "./component/utility/ScrollTop";

function App() { 

  return (    
    <BrowserRouter>
      <ScrollTop />
      <Header />
      <Routes>       
          <Route path="/" exact element={ <Home /> } />
          <Route path="/szolgaltatasok" element={ <Services /> } />
          <Route path="/szobafestes" element={ <RoomPaint /> } />
          <Route path="/mazolas" element={ <Daub /> } />
          <Route path="/tapetazas" element={ <PaperHanging /> } />
          <Route path="/gipszkartonozas" element={ <PlasterBorading /> } />
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