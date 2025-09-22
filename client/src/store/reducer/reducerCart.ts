const initialState={
    cart:[
        {
            id:1,
            title:"Cake",
            price:10,
            quantity:15
        },
        {
            id:2,
            title:"Hamberger",
            price:15,
            quantity:15
        }
    ]
}
export const reducerCart=(state= initialState,aciton)=>{
    switch (aciton.type) { 
        case "INCREMENT"
            console.log("TĂNG GIÁ TRỊ");
            
        default:
            return state;
    }
}