import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { globalContext } from '../../context/ContextGlobal';
import { PostLoginFormAsync } from '../../api/post'
import { getLoggedInUserAsync } from '../../api/fetch'

export default function Login() {
    const history = useHistory();
    const {CheckSignedAsync, setSignedIn,setUserData } = useContext(globalContext);
    const[error,setError]=useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const body = {
        email, password
    }
const CancelBtn=()=>{history.push('/');}
    const LoginBtn = async (event) => {
        try {
            event.preventDefault();
            const loginResult = await PostLoginFormAsync(body);
            //attempt to push to dashboard....   
            if (loginResult) {
                if (await CheckSignedAsync()) {
                    const { data } = await getLoggedInUserAsync();
                    setUserData(data);
                    setSignedIn(true);
                    history.push('/dashboard');
                }
            }
            setError(loginResult);
            return null;

        }
        catch (error) {
            return null;
        }
    }

    return (
        <div className='Login'>
            <div className='LoginForm'>
                <div>
                    <div >
                    {error&&<h3 className='LoginErrorMessage'>{error} !!</h3>}
                        
                    </div>

                    <div className='user-input-wrp LoginFormDiv'>
                        <br></br>
                        <input  onChange={(e) => { setEmail(e.target.value.trim()) }} type="text" className="inputText" required />
                        <span className="floating-label">Email</span>
                    </div>

                    <div className='user-input-wrp LoginFormDiv'>
                        <br></br>
                        <input onChange={(e) => { setPassword(e.target.value) }} type="password" className="inputText" required />
                        <span className="floating-label">Password</span>
                    </div>

                    <div className='LoginFormDiv'>
                        <button className='Button3 LoginBtn' onClick={(event) => { LoginBtn(event) }} ><b>Login</b></button>
                    </div>

                    <div className='LoginFormDiv'>
                        <button className='Button3' onClick={(event) => { CancelBtn(event) }} ><b>Cancel</b></button>
                    </div>
                </div>

            </div>

        </div>
    )
}
