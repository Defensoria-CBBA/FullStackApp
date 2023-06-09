import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';
import Employee from '../../pages/api/employee';
import {getAllEmployees, updateEmployees, getEmployeeById, deleteEmployees} from './api/backend.api'

const EditEmployeePage = () => {
  const router = useRouter();
  const { id } = router.query;
  const [employeeData, setEmployeeData] = useState({
    role: '',
    name: '',
    secondName: '',
    lastName: '',
    secondLastName: '',
    phone: '',
    email: '',
    password: '',
    ci: '',
    status: '',
    schedule_id: '',
  });

  useEffect(() => {
    const fetchEmployeeData = async () => {
      try {
        const response = await getEmployeeById(id);
        setEmployeeData(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    if (id) {
      fetchEmployeeData();
    }
  }, [id]);

  const handleSubmit = async (updatedData) => {
    try {
      await updateEmployees(id, updatedData);
      router.push('/datatable'); // Redirect to employee list after successful update
    } catch (error) {
      console.error(error);
    }
  };

  return <Employee initialData={employeeData} onSubmit={handleSubmit} />;
};

export default EditEmployeePage;
