import {useLocation, Navigate} from "react-router-dom";
import user from "../store/user";
import {observer} from "mobx-react-lite";

export const RequireAuth = observer(({children}) => {
    const location = useLocation();
    const auth = user.isLogin;
    if (!auth) {
        return <Navigate to='/' state={{from: location}} />
    }

    return children;
})

