export const cartReducer=(state,action)=>{
    switch(action.type){
        case 'ADD_TO_CART':{
            console.log(state,action);
            const previousCartItems=[...state.cart];
            console.log(previousCartItems)
           const isExistedAlready= previousCartItems.findIndex(item=>item.id===action.payload.id);   
           if(isExistedAlready <0){
                previousCartItems.push({...action.payload,quantity:1});
                return {...state,cart:previousCartItems}
           }else{
                const existedItem={...previousCartItems[isExistedAlready]};
                existedItem.quantity++;
                previousCartItems[isExistedAlready]=existedItem
                return  {...state,cart:previousCartItems}
           }
        };


        case 'REMOVE_PRODUCT':{
            console.log(state,action);
            const updatedCart=[...state.cart];
            const findItem=updatedCart.findIndex(item=>item.id===action.payload.id);
            const clonefindedObject={...updatedCart[findItem]};
            if(clonefindedObject.quantity ===1){
              const remaindItems=updatedCart.filter(item=>item.id!==clonefindedObject.id);
              return {...state,cart:remaindItems}
            }else{
                clonefindedObject.quantity--;
                updatedCart[findItem]=clonefindedObject;
                return {...state,cart:updatedCart}
            }
        }
    }
}