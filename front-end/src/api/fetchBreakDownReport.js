import axios from 'axios'
// const url = "http://localhost:5678/";
// const url = "https://sevenupngintranetwork.herokuapp.com/";
const url = "https://sevenupngintranetwork-4s1v.onrender.com/";
export const getBreakDownRegionAsync = async () => {
    try {
        //httpOnly
        // const { data } = await axios.get(`${url}getBreakDown/getReport`)

        const ticket = localStorage.getItem("ticket");
        const { data } = await axios.get(`${url}getBreakDown/getReport?ticket=${ticket}`);
        //  console.log(data)
        if (data) {
            return data;
        }
        else { return []; }

    } catch (error) {
        console.log(error.message);
        return error;
    }
}


export const deleteSolutionByIDAsync = async (id) => {
    try {
        const { data } = await axios.post(`${url}delete?id=${id}`);
        if (data) {
            return true;
        }
        else { return false; }

    } catch (error) {
        return null;
    }
}

export const getBreakDownSolutionByIDAsync = async (id) => {
    try {
        const { data } = await axios.get(`${url}getBreakDown/getReportById/${id}`)
        if (data) {
            return data;
        }
        else { return {}; }

    } catch (error) {
        return null;
    }
}
export const getBreakDownBySelectedRegionAsync = async (region) => {
    try {
        const { data } = await axios.get(`${url}getBreakDown/getSelectedRegion?region=${region}`)
        if (data) {
            return data;
        }
        else { return []; }

    } catch (error) {
        return null;
    }
}


