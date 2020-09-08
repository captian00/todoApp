import axios from 'axios'
export default function callAPI(endpoint, method = "GET",data){
    return axios({
        method : method,
        url : `https://5f462bf5e165a60016ba9549.mockapi.io/${endpoint}`,
        data : data 
    }).catch(err => {
        console.log(err);
    })
}