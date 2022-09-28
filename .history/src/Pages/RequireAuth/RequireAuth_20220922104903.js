import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';

const RequireAuth = ({children}) => {
    const [user, loading] = useAuthState(auth);
    const location =useLocation();
    return children;
};

export default RequireAuth;