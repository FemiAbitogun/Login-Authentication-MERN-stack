import React, { useContext, useState, useEffect } from 'react';
import { postNewReportAsync } from '../../api/postReport';
import { useHistory } from 'react-router-dom'
import { globalContext } from '../../context/ContextGlobal';

function NewPost() {
  const [newPostError, setNewPostError] = useState(undefined);
  const { CheckSignedAsync, signedIn } = useContext(globalContext);
  const history = useHistory();
  const AwaitableInitialRun = async () => {
    if (await CheckSignedAsync() === false) {
      return history.push('/');
    }

  }
  useEffect(() => {
    AwaitableInitialRun();
    // getBreakDownSolutionByID();
  }, []);



  const [machineType, setMachineType] = useState("Sidel");
  const [machineSection, setMachineSection] = useState("Blow Mould");
  const [errorCode, setErrorCode] = useState("");
  const [description, setDescription] = useState("");
  const [solutionSummary, setSolutionSummary] = useState("");
  const [solutionImages1, setSolutionImages1] = useState("");
  const [solutionImages2, setSolutionImages2] = useState("");
  const [solutionImages3, setSolutionImages3] = useState("");
  const [line, setLine] = useState("PET");
  const [lineNumber, setLineNumber] = useState("");
  const [rootCause, setRootCause] = useState("");




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


  //display shown til specify "Other" dropdown list
  const _setMachineType = (value) => {
    if (value === "Other") {
      document.getElementsByClassName("SpecifyMachine")[0].disabled = false;
      return;
    }
    setMachineType(value);
  }
  const _setSpecifyMachine = (value) => {
    const valueToUpper = value.toUpperCase().trim();
    value && setMachineType(valueToUpper);
  }

  //display shown til specify machine section "Other" dropdown list
  const _setMachineSection = (value) => {
    if (value === "Other") {
      document.getElementsByClassName("specifySection")[0].disabled = false;
      return;
    }
    setMachineSection(value);
  }
  const _setSpecifyMachineSection = (value) => {
    const valueToUpper = value.toUpperCase().trim();
    value && setMachineSection(valueToUpper);
  }



  const Post = async (e) => {
    if (description !== "" && solutionSummary !== "") {
      e.preventDefault();
      const getPostTag = document.getElementsByClassName("ReportBtn");
      getPostTag[0].disabled = true;
      getPostTag[0].textContent = "Sending.."
      getPostTag[0].style.backgroundColor = "red"
      const formData2 = new FormData();
      formData2.append("line", line);
      formData2.append("lineNumber", lineNumber);
      formData2.append("machineType", machineType);
      formData2.append("machineSection", machineSection);
      formData2.append("errorCode", errorCode);
      formData2.append("description", description);
      formData2.append("solutionSummary", solutionSummary);
      formData2.append("solutionImages1", solutionImages1);
      formData2.append("solutionImages2", solutionImages2);
      formData2.append("solutionImages3", solutionImages3);
      formData2.append("rootCause", rootCause);

      let result = await postNewReportAsync(formData2);
      if (result) {
        history.push('/dashboard')
      }
    }
    else {
      setNewPostError("All entries must be filled");
      setTimeout(() => {
        setNewPostError("");
      }, 2000);
      // console.log(registerError)
      return
    }

  }

  const Cancel = async (e) => {
    history.push('/dashboard')
  }

  return (
    <>
      {
        signedIn && <div className='PostContainer'>
          <div className='PostContainerInner'>
            {newPostError && <h3 style={{ "color": "white" }} className='LoginErrorMessage'>{newPostError} !!</h3>}
            {/* Line PET/RGB */}
            <div className='SearchBarRegion machineTypeDiv' >
              <label htmlFor='machineSection' ><b>Line Type</b></label>
              <select
                onChange={(event) => { _setLine(event.target.value) }}
                name='Line' id='Line' className='SelectTagDashboard' >
                <option value="PET">PET</option>
                <option value="RGB">RGB</option>
                <option value="AQUAFINA">AQUAFINA</option>
                <option value="CAN">CAN</option>
                <option value="2Sure">2Sure</option>
              </select>
            </div>


            <div className='PostErrorCode'>
              <label className='ErrorCodeLabel' htmlFor='errorCode' ><b>Line Number</b></label>
              <input type='number' min={1} onChange={(e) => setLineNumber(e.target.value)} />
            </div>

            <div className='PostErrorCode'>
              <label className='ErrorCodeLabel' htmlFor='errorCode' ><b>Error | Code</b></label>
              <input type='text' onChange={(e) => setErrorCode(e.target.value)} placeholder='Error | Code' />
            </div>

            <div className='SearchBarRegion machineTypeDiv' >
              <label htmlFor='machineType' ><b>Machine Type</b></label>
              <select
                onChange={(event) => { _setMachineType(event.target.value) }}
                name='machineType' id='machineType' className='SelectTagDashboard' >

                <option
                  value="Sidel"
                >Sidel</option>

                <option value="SACMI"
                >SACMI</option>

                <option value="Krones">Krones</option>

                <option value="KHS">KHS</option>

                <option value="Hilden">Hilden</option>

                <option value="Tula">Tula</option>

                <option value="Other">Other</option>

              </select>
            </div>


            <input onChange={
              (event) => { _setSpecifyMachine(event.target.value) }

            } style={{ width: "300px" }} className='SpecifyMachine' type='text' placeholder='Specify Machine type Other' disabled />


            {/* machine section */}
            <div className='SearchBarRegion machineTypeDiv' >
              <label htmlFor='machineSection' ><b>Machine Section</b></label>
              <select
                onChange={(event) => { _setMachineSection(event.target.value) }}
                name='machineSection' id='machineSection' className='SelectTagDashboard' >

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
            {/* specify section */}
            <input

              onChange={
                (event) => { _setSpecifyMachineSection(event.target.value) }

              }

              style={{ width: "300px" }} className='specifySection' type='text' placeholder='Specify Machine Section' disabled />




            <div className='DescriptionDiv'>
              <textarea onChange={(e) => setRootCause(e.target.value)} className='ErrorDescription' placeholder='Root Cause'></textarea>
            </div>
            <div className='DescriptionDiv'>
              <textarea onChange={(e) => setDescription(e.target.value)} className='ErrorDescription' placeholder='Error Description'></textarea>
            </div>


            <div className='SummaryDiv'>
              <textarea onChange={(e) => setSolutionSummary(e.target.value)} className='SolutionSummary' placeholder='Solution Summary'></textarea>
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
              <button className=' ReportBtn Button3' onClick={(e) => Post(e)}><b>Send</b></button>
              <button className='Button3' onClick={(e) => Cancel(e)}><b>Cancel</b></button>
            </div>

          </div>
        </div>
      }
    </>
  )
}

export default NewPost