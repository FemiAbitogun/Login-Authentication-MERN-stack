
import { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom'
import { getBreakDownSolutionByIDAsync } from '../../api/fetchBreakDownReport'


function ReportDetails() {

    const [solutionData, setSolutionData] = useState({});
    const { id } = useParams();
   
    const getBreakDownSolutionByID = async () => {
        console.log(id);
        let data = await getBreakDownSolutionByIDAsync(id);
        setSolutionData(data);
    }
    useEffect(() => {
        getBreakDownSolutionByID();
    }, []);

    return (
        <div>
            


        </div>
    )
}

export default ReportDetails