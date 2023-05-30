import React from 'react';
import { Table } from 'antd';
import { useEffect, useState} from 'react';
import {getBackendData} from './api/backend.api'
import { get } from 'http';
import { set } from 'react-hook-form';
import { TableBody } from '@nextui-org/react/types/table/base';


export default function dataTable() {
    
    const [personAll, setPerson] = useState([]);

    const columns = [
        {
            title: 'Nombre',
            dataIndex: 'name',
            key: 'name',
            render: (text: any) => <a>{text}</a>,
        },
        {
            title: 'Apellido',
            dataIndex: 'lastName',
            key: 'lastName',
        },
        {
            title: 'CI',
            dataIndex: 'ci',
            key: 'ci',
        },
        {
            title: 'Email',
            dataIndex: 'email',
            key: 'email',
        },
        {
            title: 'Acciones',
            dataIndex: 'acciones',
            key: 'acciones',
        }
    ];

    useEffect(() => {
        async function loadData(){
            const res = await getBackendData();
            console.log(res);
            setPerson(res.data);
        }
        loadData();
    }, [])

    const data = [
        
        {
            key: '1',
            name: 'John',
            lastName: 'Brown',
            ci: 123456,
            email: 'jb@gmail.com',
            
        },
    ];

    return (
        <div>
            <div className='tableContainer'>
            
                <Table />
            </div>
        </div>
    );
}




