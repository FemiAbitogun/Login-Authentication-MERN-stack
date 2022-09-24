import React, { useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { globalContext } from '../../context/ContextGlobal';


function Navbar() {

    const history = useHistory();
    const { CheckSignedAsync, signedIn, LogOutUser } = useContext(globalContext);

    const AwaitableInitialRun = async () => {
        await CheckSignedAsync();
    }
    useEffect(() => { AwaitableInitialRun(); }, []);

    const LogOutBtn = async () => {
        try {
            if (await LogOutUser()) {
                history.push('/')
            }
        } catch (error) {

        }
    };
    const RegisterBtn = () => history.push('/register');
    const LoginBtn = () => history.push('/login');
    const HomPageBtn = () => history.push('/');

    return (
        <div className='Navber'>
            {
                <>

                    <>
                        <div className='NavberInnerHomeBtn'>
                            <button className='Button3' onClick={HomPageBtn}><b>Home</b></button>
                        </div>
                        <div className="NavberInner">
                            {signedIn && <button className='Button3' style={{ "color": "white" }} onClick={RegisterBtn}><b>Register</b></button>}
                            {!signedIn && <button className='Button3' onClick={LoginBtn}><b>Login</b></button>}
                        </div>
                    </>

                    {signedIn && <button className='Button3' onClick={LogOutBtn}><b>Log out</b></button>}
                </>
            }
        </div>
    )
}
export default Navbar
