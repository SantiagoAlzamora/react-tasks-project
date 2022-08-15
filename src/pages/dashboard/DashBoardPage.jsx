import React from 'react';
import { useNavigate } from 'react-router-dom';


// import Copyright from '../../components/pure/Copyright';

const DashBoardPage = () => {

    const history = useNavigate();

    const logout = () => {
        history('/login',{replace:false});
    }

    return (
        <div>
            <button variant="contained" onClick={logout}>Logout</button>
        </div>
    );
}

export default DashBoardPage;
