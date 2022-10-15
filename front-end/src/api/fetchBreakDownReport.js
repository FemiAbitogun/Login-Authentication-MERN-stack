import axios from 'axios'

const url = "http://localhost:5678/";
export const getBreakDownAsync = async () => {
    try {
        const { data } = await axios.get(`${url}getBreakDown/getReport`)
        //  console.log(data)
        if (data) {
            return data;
        }
        else{return [];}

    } catch (error) {
        return null;
    }
}