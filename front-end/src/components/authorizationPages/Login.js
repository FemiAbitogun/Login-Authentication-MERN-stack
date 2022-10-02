import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { globalContext } from '../../context/ContextGlobal';
import { PostLoginFormAsync } from '../../api/post'

export default function Login() {
    const history = useHistory();
    const { error, setError, CheckSignedAsync, setSignedIn } = useContext(globalContext);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const body = {
        email, password
    }

    const LoginBtn = async (event) => {
        try {
            event.preventDefault();
            if (await PostLoginFormAsync(body)) {
                //attempt to push to dashboard....    
                if (await CheckSignedAsync()) {
                    setSignedIn(true);
                    history.push('/dashboard');
                }

            }
        } catch (error) {
            setError(error);
        }
    }

    return (
        <div className='Login'>
            <div className='LoginForm'>
                <div>
                    <div style={{ "backgroundColor": "red" }}>
                        <h3>{error}</h3>
                    </div>

                    <div className='user-input-wrp LoginFormDiv'>
                        <br></br>
                        <input onChange={(e) => { setEmail(e.target.value.trim()) }} type="text" className="inputText" required />
                        <span className="floating-label">Email</span>
                    </div>

                    <div className='user-input-wrp LoginFormDiv'>
                        <br></br>
                        <input onChange={(e) => { setPassword(e.target.value) }} type="password" className="inputText" required />
                        <span className="floating-label">Password</span>
                    </div>

                    <div className='LoginFormDiv'>
                        <button className='Button3' onClick={(event) => { LoginBtn(event) }} ><b>Login</b></button>
                    </div>
                </div>

            </div>

        </div>
    )
}
