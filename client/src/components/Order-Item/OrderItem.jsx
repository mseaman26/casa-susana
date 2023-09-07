import React, {useState, useEffect, useRef} from "react";
import './OrderItem.css'

const OrderItem = function({ menuItem, order, setOrder, index, setOrderHeaderButtonShown, setOrderHeaderText }){

    const [itemFormShown, setItemFormShown] = useState(false)
    const [itemQuantity, setItemQuantity] = useState(1)
    const [itemTotal, setItemTotal] = useState(0)
    const [itemFormTranslateX, setItemFormTranslateX] = useState(``)
    const [itemFormTranslateY, setItemFormTranslateY] = useState(``)
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);
    const itemFormRef = useRef(null)
    const menuItemRef = useRef(null)
    const quantityRef = useRef(null)

    function incrementQuantity() {
        // Use the functional form of setState
        setItemQuantity((prevItemQuantity) => {
            const newValue = parseInt(prevItemQuantity) + 1;
            quantityRef.current.value = newValue;
            return newValue.toFixed(2);
        });
    }
    
    function decrementtQuantity() {
        if (itemQuantity > 1) {
            // Use the functional form of setState
            setItemQuantity((prevItemQuantity) => {
                const newValue = parseInt(prevItemQuantity) - 1;
                quantityRef.current.value = newValue;
                return newValue.toFixed(2);
            });
        }
    }
    

    function submitItem(e) {

        let prevQuantity = order[menuItem.name] || 0
        setOrder((prevState) => ({
            ...prevState,
            [menuItem.name]: parseInt(itemQuantity)+parseInt(prevQuantity)
        }))
        setOrderHeaderButtonShown(false)
        setItemFormShown(false)
        setOrderHeaderText('PLACE ORDER ONLINE')
    }
    function handleItemQuantityChange(event) {

        const newValue = event.target.value;

        if(parseInt(newValue) < 1){
            console.log(parseInt(newValue))
            setItemQuantity(0).toFixed(2)
            setItemTotal(0*menuItem.price).toFixed(2)
        }else{
            setItemQuantity(newValue)
            setItemTotal(newValue*menuItem.price).toFixed(2)
        }
        
    }
    function closeItemForm(event){
        event.stopPropagation()
        console.log('close item form')
        setItemFormShown(false)
        console.log(itemFormShown)
        setOrderHeaderButtonShown(false)
        setOrderHeaderText('PLACE ORDER ONLINE')
    }
    function handleItemFormClick(event){
        event.stopPropagation()
    }
   
    useEffect(() => {

        if (itemFormShown && menuItemRef.current) {
            if(screenWidth < 769){
                setOrderHeaderButtonShown(true)
                setOrderHeaderText(menuItem.name)
            }
            menuItemRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
            setItemTotal(menuItem.price)
            const menuItemContainer = menuItemRef.current
            const itemFormContainer = itemFormRef.current

            const menuItemHeight  = menuItemContainer.clientHeight
            const menuItemWidth = menuItemContainer.clientWidth
            const itemFormHeight = itemFormContainer.clientHeight
            console.log('item form height: ', itemFormHeight)
            setItemFormTranslateY(`translateY(${(menuItemHeight*-.5)-(itemFormHeight/2)}px)`)
            
            if(index%2===0){
                setItemFormTranslateX(`translateX(${menuItemWidth+20}px)`)
                console.log('menuItemHeight', menuItemHeight)
            }else{
                setItemFormTranslateX(`translateX(-320px)`)
                console.log('odd')
            }

        }
      }, [itemFormShown]);

    //   EVENT LISTENTER FOR SCREEN SIZE
      useEffect(() => {
        const handleResize = () => {
          setScreenWidth(window.innerWidth);
        };
    
        window.addEventListener('resize', handleResize);
    
        return () => {
          window.removeEventListener('resize', handleResize);
        };
      }, []);

      useEffect(() => {
        if(screenWidth < 769 && itemFormShown){
            setOrderHeaderButtonShown(true)
            setOrderHeaderText(menuItem.name)
        }
       
      }, [screenWidth])

      useEffect(() => {
        console.log(parseInt(itemQuantity), menuItem.price)
        setItemTotal((parseInt(itemQuantity)*(menuItem.price)).toFixed(2))
      }, [itemQuantity])


    return(
        <div className="OrderItem_container" onClick={() => setItemFormShown(true)} index={index} ref={menuItemRef}>
            <div className="single_item_container" >
                <div className="item_name_and_price" ><span>{menuItem.name}</span> <span className="order_item_price">${menuItem.price}</span></div>
                <p>{`${menuItem.description}`}</p>
            </div>

            {itemFormShown? (
            <>
                  
                    <>
                    <div className="item_form_overlay" onClick={closeItemForm}></div>
                    {/* LARGE SCREEN ITEM FORM */}
                    <div className={`item_form_large_screen`} style = {{transform: screenWidth >= 769? `${itemFormTranslateX} ${itemFormTranslateY}` : ''}} onClick={handleItemFormClick} ref={itemFormRef}> 
                        <div className="item_form_body_large_screen">
                            <button className="item_form_nav_button" onClick={closeItemForm}>&lt;</button>
                            <p className="item_description">{menuItem.description}</p> 
                            <p className="special_instructions">Special Instructions</p>
                            <textarea type="text" rows='2'></textarea><br/>
                            <p className="special_instructions">Quantity</p>
                            <div className="input_container">
                                <input type="number" ref={quantityRef}defaultValue={itemQuantity} min={1} onChange={handleItemQuantityChange} pattern="^[1-9]\d*$"></input>
                                <div>
                                <button onClick={decrementtQuantity}>-</button>
                                <button onClick={incrementQuantity}>+</button>
                                </div>
                            </div>
                        </div>
                        <div className="add_to_cart_div_large_screen" onClick={submitItem}>
                            <div className="add_to_cart_orange">
                                <span>${itemTotal}</span>
                                <div className="add_to_cart">
                                    Add To Cart
                                </div>
                            </div>
                        </div>
                    </div>
                    </>

                    
            </>
            ) : <></>}
        </div>
    )
}

export default OrderItem