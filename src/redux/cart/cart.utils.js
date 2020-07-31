export const addItemToCart=(cartItems,itemToAdd)=>
{
    const exist=cartItems.find(c=>c.id==itemToAdd.id);
    if(exist)
    {
      return cartItems.map(item=>
        item.id==itemToAdd.id?{...itemToAdd,quantity:item.quantity+1}:item )
    }
    return [...cartItems,{...itemToAdd,quantity:1}]
}