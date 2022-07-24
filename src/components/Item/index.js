import {Link} from 'react-router-dom'
import './index.css'
const Item = props =>{
    const {item} = props
    const {thumbnail, price, title, id} = item
    return (
        <li key={id} >
            <Link to={`/product/${id}`} className="list-item">
            <img src={thumbnail} alt="one" className='image'/>
            <h1 className='title'>{title}</h1>
            <p className='price'>{price}</p>
            </Link>
        </li>
    )
}

export default Item