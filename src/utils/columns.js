import {Space, Tag} from "antd";
import {fetch} from "../services/fetch";

export const columnsList = [
    {
        title: 'Название',
        dataIndex: 'name',
        key: 'name',
        render: (text) => <div>{text}</div>,
    },
    {
        title: 'Описание',
        dataIndex: 'description',
        key: 'description',
        render: (text) => <div>{text}</div>,
    },
    {
        title: 'Действия',
        key: 'action',
        render: (_, record) => (
            <Space size="middle">
                <a onClick={() => {
                    // console.log(record.id)
                    fetch['deleteToList'](record.id)
                }}>Удалить</a>
            </Space>
        ),
    },
];

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
                {roles?.map((tag, index) => {
                    let color = tag === 'ADMIN' ? 'red' : 'green';
                    if (tag === 'SECRETARY') {
                        color = 'yellow';
                    }
                    return (
                        <Tag color={color} key={index} >
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
                <a onClick={() => {
                    fetch['deleteUser'](record.username)
                }}>Delete</a>
            </Space>
        ),
    },
];
