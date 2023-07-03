import HomeComponent from "../../components/Home";
import {useLocation} from "react-router-dom";
import list from "../../store/list";
import {observer} from "mobx-react-lite";
import { columnsList} from "../../utils/columns";
import {useEffect} from "react";
import {fetch} from "../../services/fetch";
import DescriptionController from "../Modal";

export const ListController = observer(props => {
    const location = useLocation();
    const data = list.getList()

    useEffect(() => {
        fetch['getList']();
    }, [])

    return (
        <>
            <HomeComponent location={location} columns={columnsList} data={data} />
            <span style={{margin: '20px 50px'}}>
                <DescriptionController/>
            </span>
        </>
    );
});