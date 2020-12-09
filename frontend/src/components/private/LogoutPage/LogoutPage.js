import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import { useStateContext } from '../../../utils/context';
import { LOGOUT } from '../../../utils/store/reducers/auth.reducer';

const Logout = () => {

    const [, dispatch] = useStateContext();
    const routeHistory = useHistory();
    const pathname = '/login';

    useEffect(() => {
        routeHistory.replace({pathname});
        dispatch({ type:LOGOUT });
    }, [])

    return(
        <div></div>
    )
}

export default Logout;