import React, { } from 'react';
import { useHistory } from 'react-router-dom';


function Navbar() {

    const history = useHistory();
    const logOut = () => {


    };
    const Register = () => {

        history.push('/register');
    };
    const Login = () => {

        history.push('/login');
    };

    const HomPage = () => { history.push('/'); }

    return (
        <div className='Navber'>
            {
                (2 > 3) ? <div>
                    <button className='Button3' onClick={logOut}><b>Log out</b></button>
                </div>

                    :
                    <>
                        <div className='NavberInnerHomeBtn'>
                            <button className='Button3' onClick={HomPage}><b>Home</b></button>
                        </div>
                        <div className="NavberInner">
                            <button className='Button3' style={{ "color": "white" }} onClick={Register}><b>Register</b></button>
                            <button className='Button3' onClick={Login}><b>Login</b></button>
                        </div>

                    </>
            }
        </div>
    )
}
export default Navbar
