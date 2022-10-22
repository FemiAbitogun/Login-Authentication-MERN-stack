import axios from 'axios'

const url = "http://localhost:5678/";
export const registerNewUserAsync = async (body) => {
    try {
        // console.log('sent to server')
        await axios.post(`${url}registerNewUser`, body, {
            headers: { 'content-type': 'multipart/form-data' }
        });
        return true;
    } catch (error) {
        return false;
    }
} 
export const PostLoginFormAsync = async (body) => {
    try {
        if (await axios.post(`${url}login/loginUser`, body)) {
            return true;
        }
        else return false;

    } catch (error) {
        return (error.response.data.errorMessage);

    }
}



// data ,true of false is expected.....
export const CheckIfSignedIn = async () => {
    try {
        const { data } = await axios.post(`${url}checkSignedIn/check`);
        // console.log(data);
        if (data) return true;
        else return false;
    } catch (error) {
        return false;
    }
}
export const LogOutUserAsync = async () => {
    try {
        await axios.post(`${url}logOut/logOutUser`);
        return true;
    } catch (error) {
        return false;
    }
}

