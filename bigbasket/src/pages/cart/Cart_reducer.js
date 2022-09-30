//cart =[{itemname:"",quantity:number,price:number,category:""}]
let intialstate={
    cart:[],
    loading:false,
    error:false,
    total:0,
    essentials:[],
    topoffers:[],
    bestdeals:[]
}

export const Cart_reducer =(state=intialstate,{type,payload})=>{

    switch(type){

        case "a":{

        }




        default:{
            return state
        }
    }


    

}