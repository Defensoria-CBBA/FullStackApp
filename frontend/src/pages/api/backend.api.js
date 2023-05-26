import axios from 'axios';

export const getBackendData = async () => {
    return axios.get('http://127.0.0.1:8000/backend/api/v1/person/');
}

export const getBackendTutor = async () => {
    return axios.get('http://127.0.0.1:8000/backend/api/v1/tutor/');
}

export const getBackendEmployee = async () => {
    return axios.get('http://127.0.0.1:8000/backend/api/v1/employee/');
}

export const getBackendChild = async () => {
    return axios.get('http://127.0.0.1:8000/backend/api/v1/child/');
}

export const getBackendTutor_Child = async () => {
    return axios.get('http://127.0.0.1:8000/backend/api/v1/tutor_child/');
}

export const getBackendSchedule= async () => {
    return axios.get('http://127.0.0.1:8000/backend/api/v1/schedule/');
}

export const getBackendClass_Group = async () => {
    return axios.get('http://127.0.0.1:8000/backend/api/v1/class_group/');
}

export const getBackendStablishments = async () => {
    return axios.get('http://127.0.0.1:8000/backend/api/v1/stablishments/');
}

export const getBackendComplaint = async () => {
    return axios.get('http://127.0.0.1:8000/backend/api/v1/complaint/');
}

export const getBackendAnnouncements = async () => {
    return axios.get('http://127.0.0.1:8000/backend/api/v1/announcements/');
}



