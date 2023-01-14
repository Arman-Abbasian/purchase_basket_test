export const cartReducer=(state,action)=>{
    function addToCart(state,action){
            const previousCartItems=[...state.cart];
           const isExistedAlready= previousCartItems.findIndex(item=>item.id===action.payload.id);   
           if(isExistedAlready <0){
                previousCartItems.push({...action.payload,quantity:1});
                console.log(previousCartItems)
                return {...state,cart:previousCartItems,total:state.total+action.payload.offPrice}
           }else{
                const existedItem={...previousCartItems[isExistedAlready]};
                existedItem.quantity++;
                previousCartItems[isExistedAlready]=existedItem
                return  {...state,cart:previousCartItems,total:state.total+action.payload.offPrice}
           }
    };
    function removeProduct(state,action){
        const updatedCart=[...state.cart];
            const findItem=updatedCart.findIndex(item=>item.id===action.payload.id);
            const clonefindedObject={...updatedCart[findItem]};
            if(clonefindedObject.quantity ===1){
              const remaindItems=updatedCart.filter(item=>item.id!==clonefindedObject.id);
              return {...state,cart:remaindItems ,total:state.total-action.payload.offPrice}
            }else{
                clonefindedObject.quantity--;
                updatedCart[findItem]=clonefindedObject;
                return {...state,cart:updatedCart,total:state.total-action.payload.offPrice}
            }
    }
    switch(action.type){
        case 'ADD_TO_CART':{
           return addToCart(state,action)
        };


        case 'REMOVE_PRODUCT':{
           return removeProduct(state,action)
        }
        default:
            return state;
    }
}