import HomeComponent from "../../components/Home";
import {useLocation} from "react-router-dom";
import users from "../../store/users";
import {observer} from "mobx-react-lite";
import { columnsHome} from "../../utils/columns";
import {useEffect} from "react";
import {fetch} from "../../services/fetch";

export const HomeController = observer(props => {
    const location = useLocation();
    const data = users.getUsers();

    useEffect(() => {
        fetch['getUsers']();
    }, [])

    return (
        <HomeComponent location={location} columns={columnsHome} data={data} />
    );
});