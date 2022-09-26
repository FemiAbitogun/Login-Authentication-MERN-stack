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
                    <div className="NavberInner">
                        {/* <button className='Button3 NavberHomeBtn' onClick={HomPageBtn}><b>Home</b></button> */}
                        <div className='LoginProfilePic'>
                            <img src={require('../../images/pepsi.jpg')} alt="" />
                        </div>

                        <div className="NavberInnerNavs">
                            {signedIn && <button className='Button3' style={{ "color": "white" }} onClick={RegisterBtn}><b>Register</b></button>}


                            <div className='LoginMessage'>
                                <h2><b className='BigFont'>W</b>elcome {"Femi!"}</h2>
                            </div>



                            {signedIn && <button className='Button3'
                                onClick={LoginBtn}><b>Login</b></button>}
                            {!signedIn && <button className='Button3 LogOut' onClick={LogOutBtn}><b>Log out</b></button>}
                        </div>
                    </div>
                </>
            }
        </div>
    )
}
export default Navbar
