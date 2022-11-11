import axios from 'axios'
 
// const url = "http://localhost:5678/";
const url = "https://sevenupngintranetwork.herokuapp.com/";
export const postNewReportAsync = async (body) => {
    const ticketValue = localStorage.getItem("ticket");
    try {
        // console.log('sent to server')
        await axios.post(`${url}newReport/post?ticket=${ticketValue}`, body, {
            headers: { 'content-type': 'multipart/form-data' }
        });
        return true;
    } catch (error) {
        return false;
    }
}