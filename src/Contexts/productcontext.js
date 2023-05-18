import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";


// here We create a context -- like a store or storage 
const ProductContext = createContext();

const ApiUrl =  "https://api.pujakaitem.com/api/products"

const ProductProvider = (props)=>{
    const state1 = {
        "name": "Harsh",
        "group": 23
    }

    // here we use useState to handel state because we can not directly change state object in update function , we have to use setstate to update state in run time
    const [state, setstate] = useState(state1);


    const update = ()=>{
        setTimeout(()=>{
            
            setstate({
                "name":"Hello"
            })
            
        }, 1000)
    }

    const getapiproducts = async (url)=>{
        const res = await axios.get(url);
        const products = await res.data;
        console.log(products);
    }

    useEffect(() => {
        
        getapiproducts(ApiUrl);

    
    }, [])
    

    return(
        // here it is like a provider which provide state to all childrens like app.js component
        <ProductContext.Provider value={{state,setstate,update}}>
           {/* here props.children refers to the app.js all component which wrapped in productstate  */}
            {props.children}  
        </ProductContext.Provider> 
    )
}

export { ProductContext, ProductProvider};