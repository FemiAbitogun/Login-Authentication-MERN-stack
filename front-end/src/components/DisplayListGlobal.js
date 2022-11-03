import React, { useContext } from 'react'
import { useHistory } from 'react-router-dom';
import { globalContext } from '../context/ContextGlobal';

function DisplayListGlobal() {
    const history = useHistory();
    const { signedIn,LogOut } = useContext(globalContext);

    const turnOffNav = () => {
        let result = document.getElementById("Global");
        result.setAttribute('style', 'display:none !important');
    }
    const toDashboard = () => {
        history.push('/dashboard');
    }
    const toSignOut = async () => {
        await LogOut();
        history.push('/');
    }

    return (
        <div>
            <div onClick={turnOffNav} id='Global' className='Global' style={{ "display": "none" }}>
                <div id="SlideShow" className='SlideShow'>
                    <ul className='SlideShowUl'>
                        {signedIn && <button onClick={toDashboard} className='' ><b>&#8592; DashBoard</b></button>}
                        {signedIn && <button onClick={toSignOut} className=' ' ><b>Sign out</b></button>}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default DisplayListGlobal