import {Component} from 'react'
import Item from '../Item'
import './index.css'

class  Home extends Component{

  state = {filteredProducts:[], apiStatus: 'initial'}

componentDidMount(){
  this.getDetails()
}

getDetails =  async ()=>{
  const response = await fetch("https://dummyjson.com/products")
  const data = await response.json()
  const {products} = data
  const filteredProducts = products.filter(each=>each.id%2 === 0)
  this.setState({filteredProducts, apiStatus:'success'})

}

renderProducts = ()=>{
const {filteredProducts} = this.state
return (
  <div className='main-container'>
  <ul className='list-container'>
    {filteredProducts.map(each=><Item item={each} key={each.id}/>)}
  </ul>
  </div>
)
}

  render(){
    const {apiStatus} = this.state
    switch(apiStatus){
      case 'success':
        return this.renderProducts()
      default:
        return null

    }
  
  }
}

export default Home;
