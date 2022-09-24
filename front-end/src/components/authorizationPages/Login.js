import React from 'react'


export default function Login() {
    return (
        <div className='Login'>
           

            <div className='LoginForm'>
                <div>
                    <div className='user-input-wrp LoginFormDiv'>
                        <br></br>
                        <input type="text" className="inputText" required />
                        <span className="floating-label">Email</span>
                    </div>

                    <div className='user-input-wrp LoginFormDiv'>
                        <br></br>
                        <input type="password" className="inputText" required />
                        <span className="floating-label">Password</span>
                    </div>

                    <div className='LoginFormDiv'>
                        <button className='Button3' ><b>Login</b></button>
                    </div>
                </div>

            </div>

        </div>
    )
}
