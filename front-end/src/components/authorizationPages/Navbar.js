import React, { useContext, useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { globalContext } from '../../context/ContextGlobal';
import { getLoggedInUserAsync } from '../../api/fetch'

function Navbar() {
    const history = useHistory();
    const { CheckSignedAsync, signedIn, setSignedIn, LogOut, userData, setUserData } = useContext(globalContext);

    //  const img = [img, setImg] = useState("");
    const AwaitableInitialRun = async () => {
        try {
            const result = await CheckSignedAsync();
            if (result) {
                const { data } = await getLoggedInUserAsync();
                setUserData(data);
                setSignedIn(true);
            }

        } catch (error) {

        }

    }
    useEffect(() => { AwaitableInitialRun() }, [setUserData]);

    const LogOutBtn = async () => {
        try {
            if (await LogOut()) {
                history.push('/')
            }
        } catch (error) {

        }
    };
    const RegisterBtn = () => history.push('/register');
    const LoginBtn = () => history.push('/login');
    const DashBoard = () => history.push('/dashboard');


    function display() {
        return (
            <div className='Navber'>
                {
                    <>
                        <div className="NavberInner">
                            {/* <button className='Button3 NavberHomeBtn' onClick={DashBoard}><b>Profile</b></button> */}
                            {signedIn && <div className='LoginProfilePic'>
                                <img src={userData.imagePath} alt="" />
                            </div>}

                            <div className="NavberInnerNavs">
                                {!signedIn && <button className='Button3' style={{ "color": "white" }} onClick={RegisterBtn}><b>Register</b></button>}


                                {signedIn && <div className='LoginMessage'>
                                    <h2><b className='BigFont'>W</b>elcome {userData.firstName}</h2>
                                </div>
                                }

                                {!signedIn && <button className='Button3'
                                    onClick={LoginBtn}><b>Login</b></button>}
                                {signedIn && <button className='Button3 LogOut' onClick={LogOutBtn}><b>Sign out</b></button>}
                            </div>
                        </div>
                    </>
                }
            </div>
        )
    }


    return (
        <>
            {display()}
        </>
    )
}
export default Navbar
