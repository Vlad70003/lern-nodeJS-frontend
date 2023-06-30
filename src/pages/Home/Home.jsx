import {  Layout, Menu, Avatar, Table } from 'antd';
import { Outlet } from "react-router-dom";
import {items} from "../../utils/items-menu";
import {useEffect} from "react";
import {fetch} from "../../services/fetch";
import user from "../../store/user";
import {observer} from "mobx-react-lite";

const { Header, Footer } = Layout;

export const Home = observer(props => {

    useEffect(() => {
        fetch['getUser']();
        fetch['getUsers']();
    }, [])

    return (
        <Layout className="layout" style={{height: '100%'}}>
            <Header style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', background: 'rgb(125, 188, 234)' }}>
                <Avatar style={{ backgroundColor: 'rgb(245, 106, 0)', verticalAlign: 'middle' }} size="large" >
                    {user.getUser()?.username}
                </Avatar>
                <Menu
                    theme={"light"}
                    mode="horizontal"
                    defaultSelectedKeys={['2']}
                    items={items}
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