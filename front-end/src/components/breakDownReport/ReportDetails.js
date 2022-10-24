
import { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useParams } from 'react-router-dom'
import { getBreakDownSolutionByIDAsync } from '../../api/fetchBreakDownReport'
import { globalContext } from '../../context/ContextGlobal';


function ReportDetails() {
    const history = useHistory();
    const { CheckSignedAsync } = useContext(globalContext);
    const AwaitableInitialRun = async () => {
        if (await CheckSignedAsync() === false) {
            return history.push('/');
        }
    }
    const [solutionData, setSolutionData] = useState();
    const { id } = useParams();
    const getBreakDownSolutionByID = async () => {
        // console.log(id);
        let data = await getBreakDownSolutionByIDAsync(id);
        setSolutionData(data[0]);
        // console.log(data)
    }
    useEffect(() => {
        AwaitableInitialRun();
        getBreakDownSolutionByID();
    }, []);

    function display() {
        return (
            <div className='ReportDetails'>
                <div className='ReportTitle'>
                    <div className='RegionOfIncidence'>
                        <h3>Region:{solutionData.region}</h3>
                    </div>
                    <div className='MachineDescription'>
                        <h3>Machine:{solutionData.machineType}</h3>
                    </div>
                    <div className='MachineSection'>
                        <h3>Machine Section:{solutionData.machineSection}</h3>
                    </div>
                </div>
                <div className='MachineErrorDescription'>
                    <h3><b style={{ color: "red" }}>Error Code: </b>{solutionData.errorCode}</h3>
                    <h3><b style={{ color: "red" }}>Description: </b>{solutionData.description}</h3>
                    <h3><b style={{ color: "red" }}>Solution Summary: </b>{solutionData.solutionSummary}</h3>
                </div>

                <div className='ErrorPics'>
                    <img src={solutionData.solutionImages1_secure_url
                    } alt="" />
                    <img src={solutionData.solutionImages2_secure_url
                    } alt="" />
                </div>
                <div className='SolutionCreated'>
                    <h3>createdAt:{solutionData.createdAt
                    }</h3>
                    <h3>updatedAt:{solutionData.updatedAt}</h3>
                </div>
            </div>
        )

    }


    return (
        <>
            {solutionData && display()}
        </>
    )
}

export default ReportDetails