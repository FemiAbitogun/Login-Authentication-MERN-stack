import axios from 'axios'

// const url = "http://localhost:5678/";
const url = "https://sevenupngintranetwork.herokuapp.com/";
export const getLoggedInUserAsync = async () => {
    try {
        const { data } = await axios.get(`${url}getLoggedInUser/getUser`)
        //  console.log(data)
        if (data) {
            return data;
        }
        else { return null; }

    } catch (error) {

        return error;
    }
}