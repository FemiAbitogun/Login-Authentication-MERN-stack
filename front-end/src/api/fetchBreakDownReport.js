import axios from 'axios' 
const url = "http://localhost:5678/";
export const getBreakDownRegionAsync = async () => {
    try {
        const { data } = await axios.get(`${url}getBreakDown/getReport`)
        //  console.log(data)
        if (data) {
            return data;
        }
        else { return []; }

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