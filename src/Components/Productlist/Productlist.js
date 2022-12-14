import React from 'react'
import { useFilterContext } from '../../Contexts/filtercontext'
import Gridlist from '../Gridlist/Gridlist';
import Listlist from '../Listlist/Listlist';

const Productlist = () => {
  
    const filter_data = useFilterContext();

    if(filter_data.grid_view){
        return <Gridlist data={filter_data}/>
    }
    else{
        return <Listlist data={filter_data}/>
    }
}

export default Productlist