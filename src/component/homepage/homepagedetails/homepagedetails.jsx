import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import './homepagedetails.css';
function Homepagedetails({ids}){
    const {id} = useParams();
   const [pagedetails,setpagedetails] = useState([]);
   const [pagedetailsingles,setpagedetailsingles] = useState([]);
   async function downloads(){
    let response;
    if(ids){
        response = await axios.get(`https://avatars.githubusercontent.com/u/${ids}?v=4`);
        console.log('llllll',response)
        setpagedetailsingles({
            image:response.config.url,
        })
    }
    else{
        response = await axios.get(`https://avatars.githubusercontent.com/u/${id}?v=4`); 
    
    console.log('llllll',response)
    setpagedetails({
        image:response.config.url,
    })
   }}
   useEffect(() =>{
    downloads();
    },[]);
    return(
       <div className="route-details">
            {/* <img className="image-details" src={pagedetails.image} alt="" /> */}
            <img  className="image-details-id" src={pagedetailsingles.image} />
       </div>
    )
}
export default Homepagedetails;