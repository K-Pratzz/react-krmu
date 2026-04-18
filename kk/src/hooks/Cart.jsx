import {useState} from 'react'
const Cart=()=>{
    const [quantity, setQuantity] = useState(0)
    return (
        <div>
            <p>Quantity: {quantity}</p>
            <button onClick={()=>setQuantity(quantity+1)}>Add</button>
            <button onClick={()=>setQuantity(quantity-1)}>Remove</button>
        </div>
    )
}
export default Cart