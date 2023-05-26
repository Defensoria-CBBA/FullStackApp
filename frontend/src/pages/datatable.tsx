import React from 'react';
import { Table } from 'antd';
import { useEffect, useState} from 'react';
import {getBackendData} from './api/backend.api'
import { get } from 'http';
import { set } from 'react-hook-form';


export default function dataTable() {
    
    const [personAll, setPerson] = useState([]);

    useEffect(() => {
        async function loadData(){
            const res = await getBackendData();
            console.log(res);
            setPerson(res.data);
        }
        loadData();
    }, [])

    return (
        <div>
            {personAll.map(person => (
                <div key={person.id}>
                    <h1>{person.id} {person.name} {person.secondName} {person.lastName} {person.secondLastName}</h1>
                </div>
            ))}
        </div>
    );
}




