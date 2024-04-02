import { useState,useEffect } from "react";
import Gitimage from "../gitImage/gitimage";
import axios from "axios";
import './homepagelist.css';
import useHomepagelist from "../../../hooks/useHomepagelist";
function Homepagelist(){
    const [gitimagelist,setgitimagelist] = useHomepagelist([]);
return(
    <div>
        <div className="image-wrapper">
            {(gitimagelist.loading)?"loading..." : gitimagelist.gitImage.map((p) => <Gitimage image ={p.image} id={p.id} key={p.key} login={p.name}/>)}
           </div>
    </div>
)
}
export default Homepagelist;