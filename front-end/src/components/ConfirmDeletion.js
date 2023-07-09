import React from 'react'
import { useHistory } from 'react-router-dom';
import { useParams } from 'react-router-dom'
import { deleteSolutionByIDAsync } from '../api/fetchBreakDownReport'
//deleteSolutionByIDAsync


function ConfirmDeletion() {
    const history = useHistory();
    const { id } = useParams();

    const deleteButton = async () => {
        await deleteSolutionByIDAsync(id);
        history.push('/dashboard');
        return;
    }
    const returDashboard = async () => {
        history.push('/dashboard');
    }
    return (
        <div className='ConfirmDeletePage'>

            <div className='DeleteConfirmation'>
                <label className='Label'>Confirm Delete</label>
                <button className='DeleteBtn' onClick={(e) => { deleteButton() }}>Yes</button>
                <button className='CancelDeleteBtn DeleteBtn' onClick={(e) => { returDashboard() }}>No</button>
            </div>

        </div>
    )
}

export default ConfirmDeletion