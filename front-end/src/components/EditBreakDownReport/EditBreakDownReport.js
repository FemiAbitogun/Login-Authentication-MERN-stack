import { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useParams } from 'react-router-dom'
import { getBreakDownSolutionByIDAsync } from '../../api/fetchBreakDownReport';
import { globalContext } from '../../context/ContextGlobal';
import { EditReportAsync } from '../../api/postReport';
function EditBreakDownReport() {
    const history = useHistory();
    const [newPostError, setNewPostError] = useState(undefined);
    const { CheckSignedAsync, signedIn } = useContext(globalContext);

    const [machineType, setMachineType] = useState("Sidel");
    const [machineSection, setMachineSection] = useState("Blow Mould");
    const [errorCode, setErrorCode] = useState("");
    const [rootCause, setRootCause] = useState("");
    const [description, setDescription] = useState("");
    const [solutionSummary, setSolutionSummary] = useState("");
    const [solutionImages1, setSolutionImages1] = useState(null);
    const [solutionImages2, setSolutionImages2] = useState(null);
    const [solutionImages3, setSolutionImages3] = useState(null);
    const [line, setLine] = useState("");
    const [lineNumber, setLineNumber] = useState("");

    const AwaitableInitialRun = async () => {
        if (await CheckSignedAsync() === false) {
            return history.push('/');
        }
    }

    const { id } = useParams();
    const getSolutionDataByID = async () => {
        let data = await getBreakDownSolutionByIDAsync(id);

        setDescription(data[0].description);
        setErrorCode(data[0].errorCode);
        setRootCause(data[0].rootCause);
        setMachineSection(data[0].machineSection);
        setMachineType(data[0].machineType);
        setSolutionSummary(data[0].solutionSummary);
        setLine(data[0].line);
        setLineNumber(data[0].lineNumber);
        // console.log(data[0]);
    }
    useEffect(() => {
        AwaitableInitialRun();
        getSolutionDataByID();
    }, []);



    const OnFileChange1 = (e) => {
        setSolutionImages1(e.target.files[0]);
    }
    const OnFileChange2 = (e) => {
        setSolutionImages2(e.target.files[0]);
    }

    const OnFileChange3 = (e) => {
        setSolutionImages3(e.target.files[0]);
    }
    
    const _setLine = (value) => { setLine(value); }
    const _setLineNumber = (value) => { setLineNumber(value); }
    const _setMachineType = (value) => { setMachineType(value); }
    const _setMachineSection = (value) => { setMachineSection(value); }
    const _setRootCause = (value) => { setRootCause(value); }

    const EditPost = async (e) => {
        if ( description !== "" && solutionSummary !== "") {
            e.preventDefault();
            const getPostTag = document.getElementsByClassName("ReportBtn");
            getPostTag[0].disabled = true;
            getPostTag[0].textContent = "Editing.."
            getPostTag[0].style.backgroundColor = "red"
            const formData2 = new FormData();
            formData2.append("postID", id);
            formData2.append("line", line);
            formData2.append("lineNumber", lineNumber);
            formData2.append("machineType", machineType);
            formData2.append("machineSection", machineSection);
            formData2.append("errorCode", errorCode);
            formData2.append("description", description);
            formData2.append("solutionSummary", solutionSummary);
            formData2.append("rootCause", rootCause);

            solutionImages1 && formData2.append("solutionImages1", solutionImages1);
            solutionImages2 && formData2.append("solutionImages2", solutionImages2);
            solutionImages3 && formData2.append("solutionImages3", solutionImages3);


            let result = await EditReportAsync(formData2);
            if (result) {
                history.push('/dashboard')
            }
        }
        else {
            setNewPostError("All entries must be filled");
            setTimeout(() => {
                setNewPostError("");
            }, 2000);
            return
        }

    }

    const Cancel = async (e) => {
        history.push('/dashboard')
    }



    return (
        <>{signedIn && <>
            <div className='EditBreakdownComponent'>
                {newPostError && <h3 style={{ "color": "white" }} className='LoginErrorMessage'>{newPostError} !!</h3>}

                <div className='SelectEditOptions'>

                    <div className='EditLineType' >
                        <label htmlFor='machineSection' ><b>Line Type</b></label>
                        <select
                            onChange={(event) => { _setLine(event.target.value) }}
                            name='Line' id='Line' className='' >
                            <option value={line}>{line}</option>
                            <option value="PET">PET</option>
                            <option value="RGB">RGB</option>
                            <option value="AQUAFINA">AQUAFINA</option>
                            <option value="CAN">CAN</option>
                            <option value="2Sure">2Sure</option>
                        </select>
                    </div>

                    <div className='EditErrorCode'>
                        <label className='' htmlFor='errorCode' ><b>Line No</b></label>
                        <input min={1} type='number'
                            onChange={e => _setLineNumber(e.target.value)}
                        />
                    </div>

                    <div className='EditErrorCode'>
                        <label className='' htmlFor='errorCode' ><b>Root Cause</b></label>
                        <input type='text' value={rootCause}
                            onChange={e => _setRootCause(e.target.value)}
                        />
                    </div>

                    <div className='EditErrorCode'>
                        <label className='' htmlFor='errorCode' ><b>Error | Code</b></label>
                        <input type='text' value={errorCode}
                            onChange={e => setErrorCode(e.target.value)}
                        />
                    </div>

                    <div className='SearchBarRegion machineTypeDiv' >
                        <label htmlFor='machineType' ><b>Machine Type</b></label>
                        <select
                            onChange={(event) => { _setMachineType(event.target.value) }}
                            name='machineType' id='machineType' className='SelectTagDashboard' >

                            <option
                                value={machineType}
                            >{machineType}</option>

                            <option
                                value="Sidel"
                            >Sidel</option>

                            <option value="SACMI"
                            >SACHMI</option>

                            <option value="Krones">Krones</option>

                            <option value="KHS">KHS</option>

                            <option value="Hilden">Hilden</option>

                            <option value="Tula">Tula</option>

                            <option value="Other">Other</option>

                        </select>
                    </div>

                    {/* machine section */}
                    <div className='SearchBarRegion machineTypeDiv' >
                        <label htmlFor='machineSection' ><b>Machine Section</b></label>
                        <select
                            onChange={(event) => { _setMachineSection(event.target.value) }}
                            name='machineSection' id='machineSection' className='SelectTagDashboard' >
                            <option value={machineSection}>{machineSection}</option>
                            <option value="Blow Mould">BlowMould</option>
                            <option value="Filler">Filler</option>
                            <option value="Mixer">Mixer</option>
                            <option value="Capper">Capper</option>
                            <option value="Conveyor">Conveyor</option>
                            <option value="Labeller">Labeller</option>
                            <option value="Shrinkwrapper">Shrinkwrapper</option>
                            <option value="Case Parker">Case Packer</option>
                            <option value="EBI">EBI</option>
                            <option value="Other">Other</option>
                        </select>
                    </div>


                </div>






                <div className='EditReportDescription'>
                    <label htmlFor='' ><b>Description</b></label>

                    <textarea value={description} onChange={(e) => setDescription(e.target.value)} className='ErrorDescription' placeholder='Error Description'></textarea>
                </div>

                <div className='EditReportSummary'>
                    <label htmlFor='' ><b>Summary</b></label>
                    <textarea value={solutionSummary} onChange={(e) => setSolutionSummary(e.target.value)} className='SolutionSummary' placeholder='Solution Summary'></textarea>
                </div>



                <div className='SolutionAttachedImages'>
                    <input type="file" accept="image/png, image/jpeg" onChange={(e) => { OnFileChange1(e); }} />

                </div>

                <div className='SolutionAttachedImages'>
                    <input type="file" accept="image/png, image/jpeg" onChange={(e) => { OnFileChange2(e); }} />

                </div>

                <div className='SolutionAttachedImages'>
                    <input type="file" accept="image/png, image/jpeg" onChange={(e) => { OnFileChange3(e); }} />

                </div>


                <div className='PostReport'>
                    <button className=' ReportBtn Button3' onClick={(e) => EditPost(e)}><b>Edit</b></button>
                    <button className='Button3' onClick={(e) => Cancel(e)}><b>Cancel</b></button>
                </div>


            </div>
        </>
        }</>
    )
}

export default EditBreakDownReport