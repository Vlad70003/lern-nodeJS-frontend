import {Breadcrumb, Layout, Table} from "antd";
const { Content } = Layout;

export const HomeComponent = ({location, columns, data}) => {
    return (
        <Content
            style={{
                padding: '0 50px',
            }}
        >
            <Breadcrumb
                style={{
                    margin: '16px 0',
                }}
            >
                <Breadcrumb.Item>{location.pathname}</Breadcrumb.Item>
            </Breadcrumb>
            <div
                className="site-layout-content"
                style={{
                }}
            >
                <Table columns={columns} dataSource={data} />
            </div>
        </Content>
    );
};