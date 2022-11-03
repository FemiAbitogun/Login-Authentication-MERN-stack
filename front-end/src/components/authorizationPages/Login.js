import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { globalContext } from '../../context/ContextGlobal';
import { PostLoginFormAsync } from '../../api/post'
import { getLoggedInUserAsync } from '../../api/fetch'

export default function Login() {
    const history = useHistory();
    const { CheckSignedAsync, setSignedIn, setUserData } = useContext(globalContext);
    const [error, setError] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const body = {
        email, password
    }
    const CancelBtn = () => { history.push('/'); }
    const LoginBtn = async (event) => {
        try {
            event.preventDefault();
            const getLoginTag = document.getElementsByClassName("LoginBtn");
            getLoginTag[0].disabled = true;
            getLoginTag[0].textContent = "Sending..";
            getLoginTag[0].style.backgroundColor = "green";

            const loginResult = await PostLoginFormAsync(body);

            //attempt to push to dashboard....   
            if (loginResult === true) {
                if (await CheckSignedAsync()) {
                    const { data } = await getLoggedInUserAsync();
                    setUserData(data);
                    setSignedIn(true);
                    history.push('/dashboard');
                }
            }
            else {
                
                setError(loginResult);
                setTimeout(() => {
                    setError("");
                }, 2000);
                getLoginTag[0].disabled = false;
                getLoginTag[0].textContent = "Submit";
                getLoginTag[0].style.backgroundColor = "red";
                
                return null;
              
            }
        }
        catch (error) {
            // console.log(error);

            return;
        }
    }

    return (
        <div className='Login'>
            <div className='LoginForm'>
                <div className='LoginInner'>
                    {error && <div className='LoginErrorMessage'>{error} !!</div>}

                    <div className='user-input-wrp LoginFormDiv'>
                        <br></br>
                        <input id='InputEmailId' onChange={(e) => { setEmail(e.target.value.toLowerCase().trim()) }} type="text" className="inputText" required />
                        <span className="floating-label">Email</span>
                    </div>
                
                    <div className='user-input-wrp LoginFormDiv'>
                        <br></br>
                        <input id='InputPasswordId' onChange={(e) => { setPassword(e.target.value) }} type="password" className="inputText" required />
                        <span className="floating-label">Password</span>
                    </div>

                    <div className='LoginFormDiv'>
                        <button className='Button2 LoginBtn' onClick={(event) => { LoginBtn(event) }} ><b>Submit</b></button>
                    </div>

                    <div className='LoginFormDiv'>
                        <button className='Button2 CancelRegBtn' onClick={(event) => { CancelBtn(event) }} ><b>Cancel</b></button>
                    </div>
                </div>

            </div>

        </div>
    )
}
