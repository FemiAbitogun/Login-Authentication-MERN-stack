import React, { useContext, useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { globalContext } from '../context/ContextGlobal';
import { getBreakDownRegionAsync, getBreakDownBySelectedRegionAsync } from '../api/fetchBreakDownReport';

function Dashboard() {
    const history = useHistory();
    const { CheckSignedAsync, signedIn, userData } = useContext(globalContext);
    const [breakDownReports, setBreakDownReports] = useState([]);


    const AwaitableInitialRun = async () => {
        if (await CheckSignedAsync() === false) {
            return history.push('/');
        }
        let _data = await getBreakDownRegionAsync();

        let userDepartment = "";
        if (userData.department === "Engineering" || userData.department === "Production") {
            userDepartment = "Engineering";
        }

        let filteredValue = _data.filter((value) => value.poster_department === userDepartment);
        userData.department && setBreakDownReports(filteredValue);
    }

    const solutionBtn = (id) => {
        history.push(`/breakDownSolutionByIDAsync/${id}`);
    }
    const _setRegion = async (region) => {
        const data = await getBreakDownBySelectedRegionAsync(region);
        setBreakDownReports(data);
    }

    const onSearchValueChange = async (searchValue1) => {
        let filteredValue = breakDownReports.filter((value) => value.errorCode.toLowerCase().includes(searchValue1))
        setBreakDownReports(filteredValue);
        if (searchValue1 == "" || searchValue1 == null) {
            let _data = await getBreakDownRegionAsync();
            setBreakDownReports(_data);
        }
    }
    const onDepartmentValueChange = async (searchValue1) => {
        let userDepartment = "";
        if (searchValue1 === "Production") {
            userDepartment = "Engineering";
        }
        const data = await getBreakDownRegionAsync();
        if (data) {
            let filteredValue = data.filter((value) => {
                return (value.poster_department == userDepartment);
            })
            setBreakDownReports(filteredValue);
        }
    }

    const NewPost = () => { history.push('/newPost') }
    useEffect(() => { AwaitableInitialRun(); }, [userData.department]);

    function display() {
        return (
            <div className='Dashboard'>
                <div className='SearchBar' >

                    <div className='SearchBarFault'>
                        <label htmlFor='Search' ><b>Fault | Code</b></label>
                        <input onChange={(e) => onSearchValueChange(e.target.value.toLowerCase())} type="text" id='Search' placeholder='Search' autoComplete='off'></input>
                    </div>

                    <div className='SearchBarRegion' >
                        <label htmlFor='region' ><b>Select Region</b></label>
                        <select onChange={(event) => { _setRegion(event.target.value) }} name='region' id='region' className='SelectTagDashboard' >

                            <option value={userData.region}>{userData.region}</option>

                            <option value="Lagos">Lagos </option>

                            <option value="Kano">kano</option>

                            <option value="Abuja">Abuja</option>

                            <option value="Kaduna">Kaduna</option>

                            <option value="Ibadan">Ibadan</option>

                            <option value="Ilorin">Ilorin</option>

                            <option value="Enugu">Enugu</option>

                            <option value="Aba">Aba</option>

                            <option value="Benin">Benin</option>

                        </select>
                    </div>


                    <div className='SearchBarRegion' >
                        <label htmlFor='department' ><b>Select Department</b></label>
                        <select onChange={(event) => { onDepartmentValueChange(event.target.value) }} name='department' id='department' className='SelectTagDashboard' >

                            <option value={userData.department}>{userData.department}</option>

                            <option value="Engineering">Engineering </option>
                            <option value="Quality">Quality </option>
                            <option value="Utility">Utility</option>
                            <option value="Production">Production</option>
                            <option value="Store">Store</option>
                        </select>
                    </div>
 

                    <div className=''>
                        <button onClick={() => NewPost()} className='Button3 PostBtn'><span className='Pen'>&#9998;</span>Compose</button>
                    </div>
                </div>
                <div className='FaultHeaders'>
                    <h3>Error</h3>
                    <h3>Description</h3>
                    <h3>Details</h3>
                </div>

                {
                    breakDownReports && breakDownReports.map((data, index) => (

                        <div key={data._id} className='FaultMessage'>
                            <div className='ErrorCode'><mark>{data.errorCode}</mark> </div>
                            <div className='Description_'>{data.description}  </div>
                            <div onClick={() => { solutionBtn(data._id) }} className='SolutionDetail'>&#10009;</div>

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