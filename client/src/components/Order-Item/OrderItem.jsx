import React, {useState, useEffect} from "react";
import './OrderItem.css'

const OrderItem = function({ menuItem, order, setOrder, index}){

    const [itemFormShown, setItemFormShown] = useState(false)
    const [itemFormPosition, setItemFormPosition] = useState({top: 0, left: 0})

    const addItem = () => {
        if(!order[menuItem.name]){
            setOrder((prevState) => ({
                ...prevState,
                [menuItem.name]: 1
            }))
        }else{
            setOrder((prevState) => ({
                ...prevState,
                [menuItem.name]: order[menuItem.name] + 1
            }))
        }
    }
    function showItemForm(event){
        setItemFormShown(true)
        const menuItemContainer = event.currentTarget
        const rect = menuItemContainer.getBoundingClientRect()
        setItemFormPosition({
            top: rect.top + window.scrollY,
            left: rect.left + window.scrollX
        })
    }
    function closeItemForm(event){
        event.stopPropagation()
        setItemFormShown(false)
    }
   
    useEffect(() => {
        console.log(itemFormShown);
    }, [itemFormShown]);
    return(
        <div className="OrderItem_container" onClick={showItemForm}>
            <div className="single_item_container">
                <div className="item_name_and_price"><span>{menuItem.name}</span> <span>${menuItem.price}</span></div>
                <p>{`${menuItem.description}`}</p>
                {/* <button onClick={addItem}>Add to cart</button>
                <p>In your cart: {order[menuItem.name]? order[menuItem.name]: 0}</p> */}
            </div>
            {itemFormShown? (
                <div className="item_form_overlay">
                    <div className={`${index%2 === 0 ? 'item_form_left' : 'item_form_right'} item_form`} style = {{top: itemFormPosition.top, left: itemFormPosition.left}}>
                        <button onClick={closeItemForm}>close</button>
                    </div>
                </div>
            ) : <></>}
        </div>
       
    )
}

export default OrderItem