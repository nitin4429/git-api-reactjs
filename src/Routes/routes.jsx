import { Route,Routes } from "react-router-dom";
import Homepagedetails from '../component/homepage/homepagedetails/homepagedetails';
import Homepage from "../component/homepage/homepage";
function Customroutes(){
    return(
        <Routes>
            <Route path="/" element={<Homepage/>}/>
            <Route path="/github/user/:id" element={<Homepagedetails/>}/>
        </Routes>
    )
}
export default Customroutes;