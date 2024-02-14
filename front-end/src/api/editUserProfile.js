import axios from 'axios' 
// const url = "http://localhost:5678/";
// const url = "https://sevenupngintranetwork.herokuapp.com/";
const url = "https://sevenupngintranetwork-4s1v.onrender.com/";

 

export const updateUserImageAsync = async (body) => {
    try {
       const ServerResponse= await axios.post(`${url}profile/updateProfilePic`, body, {
            headers: { 'content-type': 'multipart/form-data' }
        });
       if(ServerResponse){
        return true;
       } 
    } catch (error) {
        return (error.response.data.errorMessage);

    }
}



export const updateFirstNameAsync = async (_id,firstName) => {
    try { 
        const { data } = await axios.post(`${url}profile/updateFirstName?id=${_id}&firstName=${firstName}`);
        if (data) {
            return data;
        }
        else { return []; }

    } catch (error) {
        // console.log(error.message);
        return error;
    } 
}

export const updateLastNameAsync = async (_id,lastName) => {
    try { 
        const { data } = await axios.post(`${url}profile/updateLastName?id=${_id}&lastName=${lastName}`);
        if (data) {
            return data;
        }
        else { return []; }

    } catch (error) {
        // console.log(error.message);
        return error;
    }
}

export const updateEmailAsync = async (_id,email) => {
    try { 
        const { data } = await axios.post(`${url}profile/updateEmail?id=${_id}&email=${email}`);
        if (data) {
            return data;
        }
        else { return []; }

    } catch (error) {
        // console.log(error.message);
        return error;
    }
}

export const updatePhoneNumberAsync = async (_id,phoneNumber) => {
    try { 
        const { data } = await axios.post(`${url}profile/updatePhoneNumber?id=${_id}&phoneNumber=${phoneNumber}`);
        if (data) {
            return data;
        }
        else { return []; }

    } catch (error) {
        // console.log(error.message);
        return error;
    }
}

export const updatePasswordAsync = async (_id,password) => {
    try { 
        const { data } = await axios.post(`${url}profile/updatePassword?id=${_id}&password=${password}`);
        if (data) {
            return data;
        }
        else { return []; }

    } catch (error) {
        // console.log(error.message);
        return error;
    }
}






