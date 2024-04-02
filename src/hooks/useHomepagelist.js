import { useEffect,useState } from "react";
import axios from "axios";
function useHomepagelist(){
    // const [loading,setloading] = useState(true);
    // const [gitImage,setgitImage] = useState([]);
    const [gitimagelist,setgitimagelist] = useState({
        loading: 'true',
        gitImage:[],
    })
    async function download(){
        const response = await axios.get("https://api.github.com/users");
        console.log('nnnn',response.data)
        const gitResult = response.data;
        console.log(gitResult);
        const res = gitResult.map((image) =>{
            const gitimage = image;
            return{
                image: gitimage.avatar_url,
                id: gitimage.id,
                key: gitimage.url,
                name:gitimage.login,
            } 
        });
        console.log('rrrr',res);
        setgitimagelist({...gitimagelist, gitImage:res,loading:false});
        // setloading(false);
    }

    useEffect(() =>{
        download()
    },[]);

    return[gitimagelist,setgitimagelist]
  
}
export default useHomepagelist;