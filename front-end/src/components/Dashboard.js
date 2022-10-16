import React, { useContext, useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { globalContext } from '../context/ContextGlobal';
import { getBreakDownAsync } from '../api/fetchBreakDownReport'


function Dashboard() {
    const history = useHistory();
    const { CheckSignedAsync, signedIn, userData } = useContext(globalContext);

    const [region, setRegion] = useState(() => {
        return (userData.region);
    });
    const [searchValue, setSearchValue] = useState("");
    const [breakDownReports, setBreakDownReports] = useState([]);

    const AwaitableInitialRun = async () => {
        if (await CheckSignedAsync() === false) {
            return history.push('/');
        }
        let _data = await getBreakDownAsync();
        setBreakDownReports(_data);
        // console.log(region)
    }

    const NewPost = () => { history.push('/newPost') }
    useEffect(() => { AwaitableInitialRun(); }, []);
    const solutionBtn = (id) => {
        history.push(`/breakDownSolutionByIDAsync/${id}`);
    }
    function display() {
        return (
            <div className='Dashboard'>
                <div className='SearchBar' >

                    <div className='SearchBarFault'>
                        <label htmlFor='Search' ><b>Fault | Code</b></label>
                        <input onChange={(e) => setSearchValue(e.target.value.toLowerCase())} type="text" id='Search' placeholder='Search'></input>
                    </div>

                    <div className='SearchBarRegion' >
                        <label htmlFor='region' ><b>Select Region</b></label>
                        <select name='region' id='region' className='SelectTagDashboard' >

                            <option
                                onClick={(e) => { setRegion(userData.region) }}
                            >{userData.region}</option>

                            <option
                                onClick={(e) => { setRegion("Lagos") }}
                            >Lagos</option>

                            <option onClick={(e) => { setRegion("kano") }}
                            >kano</option>

                            <option onClick={(e) => { setRegion("Abuja") }}>Abuja</option>

                            <option onClick={(e) => { setRegion("Kaduna") }}>Kaduna</option>

                            <option onClick={(e) => { setRegion("Ibadan") }}>Ibadan</option>

                            <option onClick={(e) => { setRegion("Ilorin") }}>Ilorin</option>

                            <option onClick={(e) => { setRegion("Enugu") }}>Enugu</option>

                            <option onClick={(e) => { setRegion("Aba") }}>Aba</option>

                            <option onClick={(e) => { setRegion("Benin") }}>Benin</option>

                        </select>
                    </div>


                    <div className=''>
                        <button onClick={() => NewPost()} className='Button3 PostBtn'>Post</button>
                    </div>
                </div>
                <div className='Fault'>
                    <div className='ErrorCode'><h3>Error</h3></div>
                    <div className='Description'><h3>Description</h3></div>
                    <div className='ErrorDetail'><h3>Details</h3></div>
                </div>

                {
                    breakDownReports && breakDownReports.map((data, index) => (

                        <div key={data._id} className='FaultMessage'>
                            <div className='ErrorCode'>{data.errorCode}</div>
                            <div className='Description'>{data.description} </div>
                            <button onClick={() => { solutionBtn(data._id) }} className='ErrorDetail BtnSolution'>Solution</button>
                        </div>

                    ))
                }


            </div>)
    }

    return (
        <>
            {signedIn && display()}

        </>
    )
}

export default Dashboard