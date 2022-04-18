import axios from 'axios';

// Create services for other components in this way. 

const springBootAppUrl = `http://localhost:8088/`;

const getEmpByIdService = (eid) => {
    console.log(eid);
    return axios.get(`${springBootAppUrl}emp/get-employee-by-id/${eid}`);
}
const getAllEmpsService = () => {
    console.log(`getEmpByIdService`);
    return axios.get(`${springBootAppUrl}emp/get-all-employees`);
}

const addEmpService = (emp) => {
    console.log(`getEmpByIdService`);
    return axios.post(`${springBootAppUrl}emp/add-employee`, emp);
}

// add more functionalities here 

export { getEmpByIdService, getAllEmpsService, addEmpService };