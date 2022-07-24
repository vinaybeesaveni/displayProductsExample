import {BrowserRouter,Routes, Route} from 'react-router-dom'
import {Component} from 'react'
import Home from './components/Home'
import ProductDetails from './components/ProductDetails'
import './App.css';

class App extends Component{
  render(){
    return (
  
      <BrowserRouter>
  <Routes>
  <Route  path="/" element={<Home/>}/>
    <Route exact path="/product/:id" element={<ProductDetails/>}/>
  </Routes>
    
  </BrowserRouter>
    )
    
  }
}
  
  

  


export default App;
