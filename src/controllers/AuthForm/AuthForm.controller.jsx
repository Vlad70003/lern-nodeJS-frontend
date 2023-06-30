import AuthFormComponent from "../../components/AuthForm";
import { useNavigate } from "react-router-dom";
import {fetch} from "../../services/fetch";
import {observer} from "mobx-react-lite";

export const AuthFormController = observer(({autorization, registration}) => {
    const navigate = useNavigate();
    const ButtonText = autorization ? 'Войти' : registration ? 'Зарегистрироваться' : 'Войти';
    const Selected = autorization ? 'autorization' : registration ? 'registration' : 'autorization';

    const handleNavigate = (path) => {
        navigate(path)
    }
    const onFinish = (values) => {
        fetch[Selected](values);
    }
    return (
        <AuthFormComponent ButtonText={ButtonText} Selected={Selected} handleNavigate={handleNavigate}  onFinish={onFinish} />
    );
});