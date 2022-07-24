import { useParams } from "react-router-dom"
import {useEffect, useState} from 'react'
import './index.css'

const ProductDetails = ()=>{
    const params =useParams()
    const [apiStatus, setStatus] = useState({status:'initial', product:{}})
    useEffect(()=>{
       const getDetails = async ()=>{
        const {id} = params
        console.log(id)
    const response = await fetch("https://dummyjson.com/products")
    const data = await response.json()
    const {products} = data
    const filteredProduct = products.filter(each=>each.id===parseInt(id)) 
    const product = filteredProduct[0]
    setStatus({status:'success', product})   
       }
       getDetails()
    },[])

const renderProduct=()=>{
    const {product} = apiStatus
    return (
    <div className="product-container">
            <img src={product.thumbnail} alt="product-img" className="product-image" />
            <div className="description-container">
                <h1 className="product-title">{product.title}</h1>
                <p className="product-price">Rs. {product.price}/-</p>
            </div>
    </div>)

}

    switch(apiStatus.status){
        case 'success':
            return renderProduct()
        default:
            return null
    }
}

export default ProductDetails