
import React, { useContext, useEffect, useState } from 'react';
import { globalContext } from '../../context/ContextGlobal';
import {
  updateFirstNameAsync, updateLastNameAsync, updateEmailAsync
  , updatePhoneNumberAsync, updatePasswordAsync
} from '../../api/editUserProfile';

function ResetUserNamePassword() {
  const { userData } = useContext(globalContext);


  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [password1, setPassword1] = useState("");

  const [registerError, setRegisterError] = useState(undefined);

  const runToUpdateField = () => {
    setFirstName(userData.firstName);
    setLastName(userData.lastName);
    setEmail(userData.email);
    setPhoneNumber(userData.phoneNumber);
  }

  useEffect(() => {
    runToUpdateField();

  }, []);







  const _setFirstName = (value) => {
    setFirstName(value)

  }

  const _setLastName = (value) => {
    setLastName(value)
  }
  const _setEmail = (value) => {
    setEmail(value)
  }
  const _setPhoneNumber = (value) => {
    setPhoneNumber(value)
  }

  const _setPassword = (value) => {
    setPassword(value);
  }









  const updateFirstName = async () => updateFirstNameAsync(userData._id, firstName);
  const updateLastName = async () => updateLastNameAsync(userData._id, lastName);
  const updateEmail = async () => updateEmailAsync(userData._id, email);
  const updatePhoneNumber = async () => updatePhoneNumberAsync(userData._id, phoneNumber)

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
  /*
  _id
  : 
  "6357bd6842ea43e0580e7a7b"
  */
  return (
    <div className='EditProfile '>
      <>
      {registerError && <div className='RegisterErrorMessage'>{registerError} !!</div>}
        <div className='ChangeDisplayPic'>
          <img src={userData.imagePath} alt="" width={100} height={100} />
          <button>Change picture</button>
        </div>


        <div className='ChangeUserName '>

          <input type='text' value={firstName}
            onChange={e => _setFirstName(e.target.value)}
          />

          <button onClick={updateFirstName}>Save First Name</button>
        </div>

        <div className='ChangeLastName'>
          <input type='text' value={lastName}
            onChange={e => _setLastName(e.target.value)}
          />
          <button onClick={updateLastName}>Save Last Name</button>
        </div>

        <div className='ChangeEmail'>
          <input type='text' value={email}
            onChange={e => _setEmail(e.target.value)}
          />
          <button onClick={updateEmail} >Save Email</button>
        </div>

        <div className='ChangePhoneNumber'>
          <input type='text' value={phoneNumber}
            onChange={e => _setPhoneNumber(e.target.value)}
          />
          <button onClick={updatePhoneNumber}>Save Phone Number</button>
        </div>



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