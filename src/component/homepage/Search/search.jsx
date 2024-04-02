import { useState } from 'react';
import Homepage from '../homepage';
import useDebounce from '../../../hooks/useDebounce';
import './search.css';
function Search({updateSearchTerm}){
   const debouncecallback = useDebounce((e) =>updateSearchTerm(e.target.value))
    return(
        <div className="input-wrapper">
            <input type='number'
             className="input"
              placeholder="Enter photo id"
             onChange={debouncecallback }/>
        </div>
    )
}
export default Search;