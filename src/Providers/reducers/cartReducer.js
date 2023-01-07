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
        }
    }
}