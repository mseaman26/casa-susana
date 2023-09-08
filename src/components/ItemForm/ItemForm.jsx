import React from "react";
import './ItemForm.css'

const ItemForm = () => {
    const [itemFormShown, setItemFormShown] = useState(false)
    const [itemFormPosition, setItemFormPosition] = useState({top: 0, left: 0})
    const [itemFormXPosition, setItemFormXPosition] = useState(0)
    const [itemQuantity, setItemQuantity] = useState(1)
    const [itemTotal, setItemTotal] = useState(0)
    const itemFormRef = useRef(null)
    const menuItemRef = useRef(null)

    function submitItem() {
        let prevQuantity = order[menuItem.name] || 0
        setOrder((prevState) => ({
            ...prevState,
            [menuItem.name]: itemQuantity+prevQuantity
        }))
        setItemFormShown(false)
    }
    function handleItemQuantityChange(event) {
        // Get the value from the input
        const newValue = event.target.value;
        if(parseInt(newValue) < 1){
            console.log(parseInt(newValue))
            console.log('lessthanone')
            setItemQuantity(0)
            setItemTotal(0*menuItem.price)
        }else{
            setItemQuantity(newValue)
            setItemTotal(newValue*menuItem.price)
        }
        
    }
    function showItemForm(event){

        setItemFormShown(true)
        const menuItemContainer = menuItemRef.current

        const rect = menuItemContainer.getBoundingClientRect()
        const menuItemHeight  = menuItemContainer.clientHeight
        const menuItemWidth = menuItemContainer.clientWidth

        let itemFormXPosition
        console.log('width', menuItemWidth)
        console.log('top', rect.top)
        if(index%2===0){
            setItemFormXPosition(0)
            console.log('menuItemHeight', menuItemHeight)
        }else{
            setItemFormXPosition(0)
            console.log('odd', itemFormXPosition)
        }
        console.log(rect.top + window.scrollY + (menuItemHeight/2))
        setItemFormPosition({
            top: 0,
            left: 0
        })
        itemFormRef.current.scrollIntoView({behavior: 'smooth'})
    }
    function closeItemForm(event){
        event.stopPropagation()
        setItemFormShown(false)
    }
    function handleItemFormClick(event){
        event.stopPropagation()
    }
    return(
        <div className="item_form_overlay" onClick={closeItemForm}>
            <div className={`item_form`} style = {{top: itemFormPosition.top, left: itemFormXPosition}} onClick={handleItemFormClick} ref={itemFormRef}> 
                <p>{menuItem.description}</p> 
                <p>Special Instructions</p>
                <textarea type="text" rows='2'></textarea><br/>
                <p>Quantity</p>
                <input type="number" defaultValue={itemQuantity} min={1} onChange={handleItemQuantityChange} pattern="^[1-9]\d*$"></input>
                <div className="add_to_cart_button">
                    <span>${itemTotal}</span>
                    <button onClick={submitItem}>Add To Cart</button>
                </div>
            </div>
        </div>
    )
}
export default ItemForm