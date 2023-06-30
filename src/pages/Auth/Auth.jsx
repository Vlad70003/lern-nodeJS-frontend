import { Layout, Space } from 'antd';
import { Outlet } from "react-router-dom";
const { Header, Footer } = Layout;
export const AuthPage = () => {

    const headerStyle = {
        textAlign: 'center',
        color: '#fff',
        height: 64,
        paddingInline: 50,
        lineHeight: '64px',
        backgroundColor: '#7dbcea',
    };

    const footerStyle = {
        textAlign: 'center',
        color: '#fff',
        backgroundColor: '#7dbcea',
    };

    return (
        <Space direction="vertical" style={{
            height: '100%',
            display: 'flex',
            justifyContent: 'space-between'
        }} size={[0, 48]}>

            <Header style={headerStyle}>Header</Header>

                < Outlet />
            <Footer style={footerStyle}>Footer</Footer>
        </Space>
    );
};