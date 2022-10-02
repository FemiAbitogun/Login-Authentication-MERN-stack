import React, { useContext, useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { globalContext } from '../context/ContextGlobal';

function Dashboard() {
    const history = useHistory();
    const { CheckSignedAsync, signedIn } = useContext(globalContext);
    const AwaitableInitialRun = async () => {
        if (!await CheckSignedAsync()) {
            history.push('/');
        }
    }
    useEffect(() => { AwaitableInitialRun(); }, []);

    const [region, setRegion] = useState("");
    const [searchValue, setSearchValue] = useState("");
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
                        <button className='Button3'>Post</button>
                    </div>
                </div>

                <div className='Fault'>
                    <div className='ErrorCode'><h3>Error</h3></div>
                    <div className='Description'><h3>Description</h3></div>
                    <div className='ErrorDetail'><h3>Details</h3></div>
                </div>



                <div className='FaultMessage'>
                    <div className='ErrorCode'>Node 1</div>
                    <div className='Description'>Communication failure </div>
                    <button className='ErrorDetail BtnSolution'>Solution</button>
                </div>

                <div className='FaultMessage'>
                    <div className='ErrorCode'>Node 1</div>
                    <div className='Description'>Communication failure </div>
                    <button className='ErrorDetail BtnSolution'>Solution</button>
                </div>
                <div className='FaultMessage'>
                    <div className='ErrorCode'>Node 1</div>
                    <div className='Description'>Communication failure </div>
                    <button className='ErrorDetail BtnSolution'>Solution</button>
                </div>

                <div className='FaultMessage'>
                    <div className='ErrorCode'>Node 1</div>
                    <div className='Description'>Communication failure </div>
                    <button className='ErrorDetail BtnSolution'>Solution</button>
                </div>

                <div className='FaultMessage'>
                    <div className='ErrorCode'>Node 1</div>
                    <div className='Description'>Communication failure </div>
                    <button className='ErrorDetail BtnSolution'>Solution</button>
                </div>

                <div className='FaultMessage'>
                    <div className='ErrorCode'>Node 1</div>
                    <div className='Description'>Communication failure </div>
                    <button className='ErrorDetail BtnSolution'>Solution</button>
                </div>

                <div className='FaultMessage'>
                    <div className='ErrorCode'>Node 1</div>
                    <div className='Description'>Communication failure </div>
                    <button className='ErrorDetail BtnSolution'>Solution</button>
                </div>

                <div className='FaultMessage'>
                    <div className='ErrorCode'>Node 1</div>
                    <div className='Description'>Communication failure </div>
                    <button className='ErrorDetail BtnSolution'>Solution</button>
                </div>

                <div className='FaultMessage'>
                    <div className='ErrorCode'>Node 1</div>
                    <div className='Description'>Communication failure </div>
                    <button className='ErrorDetail BtnSolution'>Solution</button>
                </div>

                <div className='FaultMessage'>
                    <div className='ErrorCode'>Node 1</div>
                    <div className='Description'>Communication failure </div>
                    <button className='ErrorDetail BtnSolution'>Solution</button>
                </div>

                <div className='FaultMessage'>
                    <div className='ErrorCode'>Node 1</div>
                    <div className='Description'>Communication failure </div>
                    <button className='ErrorDetail BtnSolution'>Solution</button>
                </div>

                <div className='FaultMessage'>
                    <div className='ErrorCode'>Node 1</div>
                    <div className='Description'>Communication failure </div>
                    <button className='ErrorDetail BtnSolution'>Solution</button>
                </div>

                <div className='FaultMessage'>
                    <div className='ErrorCode'>Node 1</div>
                    <div className='Description'>Communication failure </div>
                    <button className='ErrorDetail BtnSolution'>Solution</button>
                </div>

                <div className='FaultMessage'>
                    <div className='ErrorCode'>Node 1</div>
                    <div className='Description'>Communication failure </div>
                    <button className='ErrorDetail BtnSolution'>Solution</button>
                </div>

                <div className='FaultMessage'>
                    <div className='ErrorCode'>Node 1</div>
                    <div className='Description'>Communication failure </div>
                    <button className='ErrorDetail BtnSolution'>Solution</button>
                </div>








            </div>)
    }

    return (
        <>
            {signedIn && display()}
            {/* {display()} */}
        </>
    )
}

export default Dashboard