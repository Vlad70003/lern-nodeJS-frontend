import {observer} from "mobx-react-lite";
import DescriptionModalComponent from "../../components/Modal";
import {useState} from "react";
import {Button} from "antd";
import {fetch} from "../../services/fetch";

export const DescriptionController = observer(props => {

    const [isModalOpen, setIsModalOpen] = useState(false);

    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleOk = () => {
        setIsModalOpen(false);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };

    const onFinish = (values) => {
        fetch['addToList'](values);
        handleCancel();
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <>
            <Button type="primary" onClick={showModal} style={{width: '200px'}}>
                Добавить Описание
            </Button>
            <DescriptionModalComponent handleOk={handleOk} handleCancel={handleCancel} isModalOpen={isModalOpen} onFinish={onFinish} onFinishFailed={onFinishFailed} />
        </>
    );
});