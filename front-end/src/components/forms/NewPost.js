import React, {useState} from 'react';
import { postNewReportAsync } from '../../api/postReport';

function NewPost() {
  const [machineType, setMachineType] = useState("Sidel");
  const [machineSection, setMachineSection] = useState("BlowMould");
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

  const Post = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("machineType", setMachineType);
    formData.append("machineSection", setMachineSection);
    formData.append("errorCode", setErrorCode);
    formData.append("description", setDescription);
    formData.append("solutionSummary", setSolutionSummary);
    formData.append("solutionImages1", setSolutionImages1);
    formData.append("solutionImages2", setSolutionImages2);
    await postNewReportAsync(formData);
  }


  return (
    <div className='PostContainer'>

      <div className='PostContainerInner'>
        <div className='ErrorCode'>
          <input type='text' onChange={(e) => setErrorCode(e.target.value)} placeholder='Error|Code'></input>
        </div>

        <div className='SearchBarRegion machineTypeDiv' >
          <label htmlFor='machineType' ><b>Machine Type</b></label>
          <select name='machineType' id='machineType' className='SelectTagDashboard' >

            <option
              onClick={(e) => { setMachineType("Sidel") }}
            >Sidel</option>

            <option onClick={(e) => { setMachineType("SACHMI") }}
            >SACHMI</option>

            <option onClick={(e) => { setMachineType("Krones") }}>Krones</option>

            <option onClick={(e) => { setMachineType("Khs") }}>KHS</option>

            <option onClick={(e) => { setMachineType("Hilden") }}>Hilden</option>

            <option onClick={(e) => { setMachineType("Tula") }}>Tula</option>


            <option onClick={(e) => { setMachineType("Other") }}>Other</option>

          </select>
        </div>

        {/* machine section */}
        <div className='SearchBarRegion machineTypeDiv' >
          <label htmlFor='machineSection' ><b>Machine Section</b></label>
          <select name='machineSection' id='machineSection' className='SelectTagDashboard' >

            <option
              onClick={(e) => { setMachineSection("Blow Mould") }}
            >BlowMould</option>
            <option onClick={(e) => { setMachineSection("Filler") }}
            >Filler</option>
            <option onClick={(e) => { setMachineSection("Mixer") }}>Mixer</option>
            <option onClick={(e) => { setMachineSection("Capper") }}>Capper</option>
            <option onClick={(e) => { setMachineSection("Conveyor") }}>Conveyor</option>
            <option onClick={(e) => { setMachineSection("Labeller") }}>Labeller</option>
            <option onClick={(e) => { setMachineSection("Shrinkwrapper") }}>Shrinkwrapper</option>
            <option onClick={(e) => { setMachineSection("CaseParker") }}>Case Packer</option>
            <option onClick={(e) => { setMachineSection("Other") }}>Other</option>
          </select>
        </div>


        <div className='DescriptionDiv'>
          <textarea onChange={(e) => setDescription(e.target.value)} className='ErrorDescription' placeholder='Error Description'></textarea>
        </div>


        <div className='SummaryDiv'>
          <textarea onChange={(e) => setSolutionSummary(e.target.value)} className='SolutionSummary' placeholder='Solution Summary'></textarea>
        </div>

        <div className='SolutionAttachedImages'>
          <input type="file" accept="image/png, image/jpeg" onChange={(e) => { OnFileChange1(e); }} multiple />

        </div>

        <div className='SolutionAttachedImages'>
          <input type="file" accept="image/png, image/jpeg" onChange={(e) => { OnFileChange2(e); }} multiple />

        </div>

        <div className='PostReport'>
          <button className='Button3 ReportBtn' onClick={(e) => Post(e)}><b>Report</b></button>
        </div>

      </div>

    </div>
  )
}

export default NewPost