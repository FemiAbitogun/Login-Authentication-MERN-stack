import React, { useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { globalContext } from '../../context/ContextGlobal';
import { getLoggedInUserAsync } from '../../api/fetch'

function Navbar() {
    let score = 0;
    function hamburger(e) {
        score++;

        let result = document.getElementById("Global");
        result.setAttribute('style', 'display:block !important');
        // result.style.display="inline"
        // result.classList.add('Global');
        // result.style.height="1000vh"
        return;
    }

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
                <div className="NavberInner">
                    {signedIn && <b style={{ "display": "none" }} className="Hamburger" onClick={(e) => {
                        // e.stopPropagation();
                        hamburger(e)
                    }} >&#8801;</b>
                    }


 


                    {signedIn && <div className='NavberHomeBtn' onClick={DashBoard}>DashBoard</div>}

                    {signedIn && <div className='LoginProfilePic'>
                        <img src={userData.imagePath} alt="" />
                    </div>}


                    {
                        signedIn && <div className='LoginMessage'>
                            <h2><b className='BigFont'>H</b>i {userData.firstName}!</h2>
                        </div>

                    }

                    {!signedIn && <button className='Button3' style={{ "color": "white" }} onClick={RegisterBtn}><b>Register</b></button>}


                    {!signedIn && <button className='Button4 LoginBtnNav '
                        onClick={LoginBtn}><b>Login</b></button>}

                    {signedIn && <button className='ManagePostBtn ' ><b>Manage Post</b></button>}


                    {signedIn && <button className=' LogOut' onClick={LogOutBtn}><b>Sign out</b></button>}
                </div>


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
