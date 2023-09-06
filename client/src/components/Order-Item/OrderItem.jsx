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

    function submitItem() {
        let prevQuantity = order[menuItem.name] || 0
        setOrder((prevState) => ({
            ...prevState,
            [menuItem.name]: parseInt(itemQuantity)+parseInt(prevQuantity)
        }))
        closeItemForm()
    }
    function handleItemQuantityChange(event) {

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
    function closeItemForm(event){
        setItemFormShown(false)
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
    return(
        <div className="OrderItem_container" onClick={() => setItemFormShown(true)} index={index} ref={menuItemRef}>
            <div className="single_item_container" >
                <div className="item_name_and_price" ><span>{menuItem.name}</span> <span className="order_item_price">${menuItem.price}</span></div>
                <p>{`${menuItem.description}`}</p>
            </div>

            {itemFormShown? (
            <>
                {screenWidth<769 ? (
                    <>
                 
                    <div className={`item_form_small_screen`} onClick={handleItemFormClick} ref={itemFormRef}> 
                        <div className="item_form_nav">
                            <button onClick={closeItemForm}>&lt;</button>
                        </div>
                        <div className="item_form_body">
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
                    </>
                    ) :   
                    <>
                    <div className="item_form_overlay" onClick={closeItemForm}></div>
                    <div className={`item_form`} style = {{transform: `${itemFormTranslateX} ${itemFormTranslateY}`}} onClick={handleItemFormClick} ref={itemFormRef}> 
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
                    </>
                    }
                    
            </>
            ) : <></>}
        </div>
    )
}

export default OrderItem