
import React, { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { globalContext } from '../../context/ContextGlobal';
import {
  updateFirstNameAsync, updateLastNameAsync, updateEmailAsync
  , updatePhoneNumberAsync, updatePasswordAsync, updateUserImageAsync
} from '../../api/editUserProfile';



function ResetUserNamePassword() {
  const history = useHistory();


  useEffect(() => {
    runToUpdateField();
  }, []);


  const { userData } = useContext(globalContext);
  const [userImage, setUserImage] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [password1, setPassword1] = useState("");

  const [registerError, setRegisterError] = useState(undefined);

  const runToUpdateField = async () => {
    setFirstName(userData.firstName);
    setLastName(userData.lastName);
    setEmail(userData.email);
    setPhoneNumber(userData.phoneNumber);
  }





  const OnFileChange = (e) => {
    setUserImage(e.target.files[0]);

  }


  const _setFirstName = (value) => {
    setFirstName(value)


  }

  const _setLastName = (value) => {
    setLastName(value);

  }
  const _setEmail = (value) => {
    setEmail(value);


  }
  const _setPhoneNumber = (value) => {
    setPhoneNumber(value);

  }

  const _setPassword = (value) => {
    setPassword(value);

  }



  const updateUserImage = async () => {
    const formData = new FormData();
    formData.append("userImage", userImage);
    formData.append("_id", userData._id);
    formData.append("firstName", firstName);
    formData.append("lastName", lastName);
    let returnedData = updateUserImageAsync(formData);
    history.push('/dashboard')

  }



  const saveChanges = async () => {
    firstName && updateFirstNameAsync(userData._id, firstName);
    lastName && updateLastNameAsync(userData._id, lastName);
    email && updateEmailAsync(userData._id, email);
    phoneNumber && updatePhoneNumberAsync(userData._id, phoneNumber);

    history.push('/dashboard');
    // history.push('/ResetUserNamePassword')
  }









  const updatePassword = async () => {

    if (password === password1) {
      updatePasswordAsync(userData._id, password);
    }
    else {

      setRegisterError("Password and Confirm password does not match");
      setTimeout(() => {
        setRegisterError("");
      }, 1000);

      return;

    }

  }

  return (
    <div className='EditProfile '>
      <>
        {registerError && <div className='RegisterErrorMessage'>{registerError} !!</div>}
        <div className='ChangeDisplayPic'>
          <img src={userData.imagePath} alt="" width={100} height={100} />

          <div id='ImageReg'>
            <label>Update photo</label>
            <input type="file" accept="image/png, image/jpeg" required onChange={(e) => { OnFileChange(e); }} />
          </div>

          <button onClick={updateUserImage}>Save</button>

        </div>


        <div className='ChangeUserName '>

          <input type='text' value={firstName}
            onChange={e => _setFirstName(e.target.value)}
          />

          {/* <button onClick={updateFirstName}>Save First Name</button> */}
        </div>

        <div className='ChangeLastName'>
          <input type='text' value={lastName}
            onChange={e => _setLastName(e.target.value)}
          />
          {/* <button onClick={updateLastName}>Save Last Name</button> */}
        </div>

        <div className='ChangeEmail'>
          <input type='text' value={email}
            onChange={e => _setEmail(e.target.value)}
          />
          {/* <button onClick={updateEmail} >Save Email</button> */}
        </div>

        <div className='ChangePhoneNumber'>
          <input type='text' value={phoneNumber}
            onChange={e => _setPhoneNumber(e.target.value)}
          />
          {/* <button onClick={updatePhoneNumber}>Save Phone Number</button> */}
        </div>

        <button style={{
          backgroundColor: "coral",
          width: "20%",
          height: "100%"
        }} onClick={saveChanges}>Save</button>

        <div className='PasswordChange'>

          <>
            <div className='user-input-wrp'>
              <br></br>
              <input type="password" className='inputText' required onChange={(e) => setPassword(e.target.value)} id='InputPasswordId' />
              <span className="floating-label">New Password</span>
            </div>

            <div className='user-input-wrp'>
              <br></br>
              <input type="password" className='inputText' id='InputPasswordId' required onChange={(e) => setPassword1(e.target.value)} />
              <span className="floating-label">Comfirm Password</span>
            </div>


            <div className='user-input-wrp'>
              <br></br>
              <hr />
              <button className='bg-danger' onClick={updatePassword}>Reset Password</button>
            </div>
          </>

        </div>





      </>
    </div>
  )
}

export default ResetUserNamePassword