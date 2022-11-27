import axios from 'axios'

// const url = "http://localhost:5678/";
// const url = "https://sevenupngintranetwork.herokuapp.com/";
const url = "https://sevenupngintranetwork.onrender.com/"
export const getLoggedInUserAsync = async () => {
    try {

        //with httpOnly cookie method
        // const { data } = await axios.get(`${url}getLoggedInUser/getUser`)

        const ticket = localStorage.getItem("ticket");
        const { data } = await axios.get(`${url}getLoggedInUser/getUser?ticket=${ticket}`)

        if (data) {
            return data;
        }
        else { return null; }

    } catch (error) {

        return error;
    }
}