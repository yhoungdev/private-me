import axios from "axios";
import { toast } from "react-toastify";


interface Props {
    url?: any;
    payload?: any;
}


const defaultUrl = 'http://localhost:5500/api'

export const Post = async ({url}: Props) => {

    try {
        
        const request = await axios.post(`${defaultUrl}${url}`);
    
    } catch (error) {
        console.log(error);
    }


}

//function to get request 
export const Get = async ({url}: Props) => {

    try {

        const request = axios.get(`${defaultUrl}${url}`);

    } catch ( error ) {
        console.log(error)
    }

}