
import { useState } from 'react';
import Search from './Search/search';
import './homepage.css';
import Homepagelist from './homepageList/homepagelist';
import Homepagedetails from './homepagedetails/homepagedetails';
function Homepage(){
    const [searchterm,setsearchterm] = useState('');
    return(
        <div className="homepage-wrapper">
            <Search updateSearchTerm={setsearchterm}/>
          {(searchterm.length == 0) ? <Homepagelist/>: <Homepagedetails key={searchterm} ids={searchterm}/>}
        </div>
       
    )
    
}
export default Homepage;