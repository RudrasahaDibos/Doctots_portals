import React from 'react';

const RequireAuth = ({children}) => {
    const [user, loading] = useAuthState(auth);
    const location =useLocation();
    return children;
};

export default RequireAuth;