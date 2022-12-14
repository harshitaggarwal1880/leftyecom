import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Contact from './Pages/Contact/Contact'
import Products from './Pages/Products/Products'
import About from './Pages/About/About';
import Product from './Pages/Product/Product';
import Cart from './Pages/Cart/Cart';
import NotFound from './Pages/NotFound/NotFound';
import GlobalStyle from './Pages/GlobalStyle/GlobalStyle';
import { ThemeProvider } from 'styled-components';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import { ProductProvider } from './Contexts/productcontext';
import { ReducerProvider } from './Contexts/reducercontext';
import { FiltercontextProvider } from './Contexts/filtercontext';


const App = () => {

  const theme = {
    colors:{
      heading: "rgb(24 24 29)",
      text: "rgba(29 ,29, 29, .8)",
      white: "#fff",
      black: " #212529",
      helper: "#8490ff",

      bg: "#F6F8FA",
      footer_bg: "#0a1435",
      btn: "rgb(98 84 243)",
      border: "rgba(98, 84, 243, 0.5)",
      hr: "#ffffff",
      gradient:
        "linear-gradient(0deg, rgb(132 144 255) 0%, rgb(98 189 252) 100%)",
      shadow:
        "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;",
      shadowSupport: " rgba(0, 0, 0, 0.16) 0px 1px 4px",
    },
    media: {
      mobile: "768px",
      tab: "998px",
    },
  }


  return (
    <ReducerProvider>
    <ProductProvider>
    <FiltercontextProvider> 
    <ThemeProvider theme={theme}>
    <Router> 

      <GlobalStyle/>
      <Header/>
      <Routes>
        <Route exact path='/' element={<Home/>} />
        <Route exact path='/about' element={<About/>} />
        <Route exact path='/products' element={<Products/>} />          
        <Route exact path='/contact' element={<Contact/>} />
        <Route path='/product/:id' element={<Product/>} />
        <Route exact path='/cart' element={<Cart/>} />
        <Route exact path='*' element={<NotFound/>} />
      </Routes> 
      <Footer/>

    </Router>
    </ThemeProvider>   
    </FiltercontextProvider>
    </ProductProvider> 
    </ReducerProvider>
  )
}

export default App