import axios from 'axios'

const url = "";
// you are expecting no data..... just httpOnly cookie
export const PostLoginForm = async (body) => {
    try {
        await axios.post(url, body)
        return true;
    } catch (error) {
        return false;
    }
}
// data ,true of false is expected.....
export const PostSignedIn = async () => {
    try {
        const { data } = await axios.post(url);
        return data;
    } catch (error) {
        return false;
    }
}
export const LogOutUser = async () => {
    try {
        await axios.post();
        return true;
    } catch (error) {
        return false;
    }
}

