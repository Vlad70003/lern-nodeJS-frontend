import {Layout, Menu, Avatar, Button} from 'antd';
import {useNavigate, Outlet} from "react-router-dom";
import {items} from "../../utils/items-menu";
import {useEffect} from "react";
import {fetch} from "../../services/fetch";
import user from "../../store/user";
import {observer} from "mobx-react-lite";
import {useSelectMenu} from "../../hook/useSelectMenu";

const { Header, Footer } = Layout;

export const MainWrapper = observer(props => {
    const navigate = useNavigate();

    useEffect(() => {
        fetch['getUser']();

    }, [])

    const selectMenu = useSelectMenu();
    return (
        <Layout className="layout" style={{height: '100%'}}>
            <Header style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', background: 'rgb(125, 188, 234)' }}>
                <Avatar style={{ backgroundColor: 'rgb(245, 106, 0)', verticalAlign: 'middle' }} size="large" >
                    {user.getUser()?.username}
                </Avatar>
                <Menu
                    theme={"light"}
                    mode="horizontal"
                    defaultSelectedKeys={[selectMenu]}
                    items={items}
                    style={{width: '90%', background: 'rgb(125, 188, 234)'}}
                    onClick={(e) => e.key !== 'logout' ? navigate(`/${e.key}`) : null}
                />
            </Header>

            <Outlet/>

            <Footer
                style={{
                    textAlign: 'center',
                    background: 'rgb(125, 188, 234)'
                }}
            >
                Ant Design ©2023 Created by Ant UED
            </Footer>
        </Layout>
    );
});