import axios from 'axios'

// const url = "http://localhost:5678/";
// const url = "https://sevenupngintranetwork.herokuapp.com/";
const url = "https://sevenupngintranetwork-4s1v.onrender.com/";
export const registerNewUserAsync = async (body) => {
    try {
        // console.log('sent to server')
        await axios.post(`${url}registerNewUser`, body, {
            headers: { 'content-type': 'multipart/form-data' }
        });
        return true;
    } catch (error) {
        return (error.response.data.errorMessage);
    
    }
}
export const PostLoginFormAsync = async (body) => {
    try {
        // if (await axios.post(`${url}login/loginUser`, body)) {
        //     return true;
        // }
        const { data } = await axios.post(`${url}login/loginUser`, body);
        if (data) {
            localStorage.setItem("ticket", data.ticket);
            return true;
        }
        else { return false; }
    } catch (error) {
        // console.log(error.response.data.errorMessage)
        return (error.response.data.errorMessage);

    }
}



// data ,true of false is expected.....HttpCookieOnly
export const CheckIfSignedIn = async () => {
    /* try {
         const { data } = await axios.post(`${url}checkSignedIn/check`);
         // console.log(data);
         if (data) return true;
         else return false;
     } catch (error) {
         return false;
     }
     */
}


//local storage
export const CheckIfSignedIn_NoHttpCookie = async () => {
    try {
        const ticketValue = localStorage.getItem("ticket");
        if (!ticketValue) {
            // localStorage.setItem("ticket", "");
            return false;
        }
        const { data } = await axios.post(`${url}checkSignedIn/check/checkLST/?ticket=${ticketValue}`);
        if (data) { return true; }
        else { 
            localStorage.clear();
            return false;
         }
    } catch (error) {
        return false;
    }
}


export const LogOutUserAsync = async () => {
    try {
        //httOnly clearing method
        // await axios.post(`${url}logOut/logOutUser`);
        localStorage.clear();
        return true;
    } catch (error) {
        return false;
    }
}

