import React, { useContext, useState, useEffect } from 'react';
import { postNewReportAsync } from '../../api/postReport';
import { useHistory } from 'react-router-dom'
import { globalContext } from '../../context/ContextGlobal';

function NewPost() {

  const { CheckSignedAsync } = useContext(globalContext);
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
  const OnFileChange1 = (e) => {
    setSolutionImages1(e.target.files[0]);
  }
  const OnFileChange2 = (e) => {
    setSolutionImages2(e.target.files[0]);
  }
  const _setMachineType = (value) => { setMachineType(value); }
  const _setMachineSection = (value) => { setMachineSection(value); }


  const Post = async (e) => {
    e.preventDefault();
    const getPostTag = document.getElementsByClassName("ReportBtn");
    getPostTag[0].disabled = true;
    getPostTag[0].textContent = "Sending.."
    getPostTag[0].style.backgroundColor ="red"
    const formData2 = new FormData();
    formData2.append("machineType", machineType);
    formData2.append("machineSection", machineSection);
    formData2.append("errorCode", errorCode);
    formData2.append("description", description);
    formData2.append("solutionSummary", solutionSummary);
    formData2.append("solutionImages1", solutionImages1);
    formData2.append("solutionImages2", solutionImages2);
    let result = await postNewReportAsync(formData2);
    if (result) {
      history.push('/dashboard')
    }
  }



  return (
    <div className='PostContainer'>

      <div className='PostContainerInner'>
        <div className='PostErrorCode'>
          <input type='text' onChange={(e) => setErrorCode(e.target.value)} placeholder='Error|Code' />
        </div>

        <div className='SearchBarRegion machineTypeDiv' >
          <label htmlFor='machineType' ><b>Machine Type</b></label>
          <select
            onChange={(event) => { _setMachineType(event.target.value) }}
            name='machineType' id='machineType' className='SelectTagDashboard' >

            <option
              value="Sidel"
            >Sidel</option>

            <option value="SACHMI"
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

            <option value="Blow Mould">BlowMould</option>
            <option value="Filler">Filler</option>
            <option value="Mixer">Mixer</option>
            <option value="Capper">Capper</option>
            <option value="Conveyor">Conveyor</option>
            <option value="Labeller">Labeller</option>
            <option value="Shrinkwrapper">Shrinkwrapper</option>
            <option value="Case Parker">Case Packer</option>
            <option value="Other">Other</option>
          </select>
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

        <div className='PostReport'>
          <button className='Button3 ReportBtn' onClick={(e) => Post(e)}><b>Send</b></button>
        </div>

      </div>

    </div>
  )
}

export default NewPost