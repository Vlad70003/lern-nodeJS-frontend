import {Space, Tag} from "antd";

export const columnsHome = [
    {
        title: 'Имя',
        dataIndex: 'username',
        key: 'username',
        render: (text) => <a>{text}</a>,
    },
    {
        title: 'Роли',
        key: 'roles',
        dataIndex: 'roles',
        render: (_, { roles }) => (
            <>
                {roles?.map((tag) => {
                    let color = tag === 'ADMIN' ? 'red' : 'green';
                    if (tag === 'SECRETARY') {
                        color = 'yellow';
                    }
                    return (
                        <Tag color={color} key={tag}>
                            {tag.toUpperCase()}
                        </Tag>
                    );
                })}
            </>
        ),
    },
    {
        title: 'Action',
        key: 'action',
        render: (_, record) => (
            <Space size="middle">
                <a>Delete</a>
            </Space>
        ),
    },
];