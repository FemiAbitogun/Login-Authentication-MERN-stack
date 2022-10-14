import axios from 'axios'

const url = "http://localhost:5678/";
export const postNewReportAsync = async (body) => {
    try {
        // console.log('sent to server')
        await axios.post(`${url}newReport/post`, body, {
            headers: { 'content-type': 'multipart/form-data' }
        });
        return true;
    } catch (error) {
        return false;
    }
}