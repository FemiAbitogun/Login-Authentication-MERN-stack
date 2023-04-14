import axios from 'axios'

// const url = "http://localhost:5678/";
// const url = "https://sevenupngintranetwork.herokuapp.com/";
const url = "https://sevenupngintranetwork-4s1v.onrender.com/";
export const postNewReportAsync = async (body) => {
    const ticketValue = localStorage.getItem("ticket");
    try {
        await axios.post(`${url}newReport/post?ticket=${ticketValue}`, body, {
            headers: { 'content-type': 'multipart/form-data' }
        });
        return true;
    } catch (error) {
        return false;
    }
}
export const EditReportAsync = async (body) => {
    const ticketValue = localStorage.getItem("ticket");
    try {
        await axios.post(`${url}editreport/edit?ticket=${ticketValue}`, body, {
            headers: { 'content-type': 'multipart/form-data' }
        });
        return true;
    } catch (error) {
        return false;
    }
}