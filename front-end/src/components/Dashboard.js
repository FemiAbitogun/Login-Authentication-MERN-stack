import React, { useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { globalContext } from '../context/ContextGlobal';

function Dashboard() {
    const history = useHistory();
    const { CheckSignedAsync, signedIn } = useContext(globalContext);
    const AwaitableInitialRun = async () => {
        await CheckSignedAsync();
       return !signedIn&&history.push('/');
    }
    useEffect(() => { AwaitableInitialRun(); }, []);


    function display() {
        return (
            <div className='Dashboard'>
                You are successfully logged on to your dashboard!
            </div>)
    }


    return (
        <>
            {signedIn && display()}
        </>
    )
}

export default Dashboard