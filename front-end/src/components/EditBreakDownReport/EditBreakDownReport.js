import { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useParams } from 'react-router-dom'
import { getBreakDownSolutionByIDAsync } from '../../api/fetchBreakDownReport';
import { globalContext } from '../../context/ContextGlobal';
function EditBreakDownReport() {
    const history = useHistory();
    const { CheckSignedAsync } = useContext(globalContext);
    const AwaitableInitialRun = async () => {
        if (await CheckSignedAsync() === false) {
            return history.push('/');
        }
    }
    const [solutionData, setSolutionData] = useState();
    const { id } = useParams();
    const getSolutionDataByID = async () => {
        let data = await getBreakDownSolutionByIDAsync(id);
        setSolutionData(data[0]);
        console.log(solutionData);
    }
    useEffect(() => {
        AwaitableInitialRun();
        getSolutionDataByID();
    }, []);
    return (
        <div>{id}</div>
    )
}

export default EditBreakDownReport