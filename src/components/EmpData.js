import axios from "axios";
import { useState, useEffect } from "react";
import Employee from "../models/Employee";
import { getEmpByIdService, getAllEmpsService, addEmpService } from "../services/EmployeeService";

const EmpData = () => {

    const [eid, setEid] = useState('');
    const [emp, setEmp] = useState(new Employee());
    const [empToBeAdded, setEmpToBeAdded] = useState(new Employee());
    const [allEmps, setAllEmps] = useState([]);

    useEffect(() => {
        setEmp({
            employeeId: 0,
            firstName: '',
            salary: 0
        });
    }, []);

    const handleChange = (evt) => {
        console.log(evt.target.value);
        setEid(evt.target.value);
    }

    const submitGetEmpById = (evt) => {
        console.log(eid);
        evt.preventDefault();
        // axios.get(`http://localhost:8088/emp/get-employee-by-id/${eid}`)
        getEmpByIdService(eid)
            .then((response) => {
                console.log(response.data);
                setEmp(response.data);
            });
    }

    const submitGetAllEmps = (evt) => {
        console.log(`submitGetAllEmps`);
        evt.preventDefault();

        getAllEmpsService()
            .then((response) => {
                console.log(response.data);
                setAllEmps(response.data);
                console.log(allEmps);
            });
    }

    const handleAddEmp = (e) => {
        console.log(e.target.name);
        console.log(e.target.value);
        setEmpToBeAdded({
            ...empToBeAdded,
            [e.target.name]: e.target.value
        });
    }

    const submitAddEmp = (evt) => {
        evt.preventDefault();
        addEmpService(empToBeAdded)
            .then((response) => {
                alert(`Employee with employeeId ${response.data.employeeId} added successfully.`);
            })
            .catch(() => {
                alert("Employee could not be added.");
            });
    }

    return (
        <div className="container">
            <p className="display-4 text-primary">EmpData Component</p>
            <div className="bg-white shadow shadow-regular mb-3 mt-3 px-3 py-3 pb-3 pt-3 col-6">
                <p>Add New Employee</p>
                <div className="form form-group" >
                    <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        className="form-control mb-3 mt-3"
                        value={empToBeAdded.firstName}
                        onChange={handleAddEmp}
                        placeholder="Enter First Name" />
                    <input
                        type="number"
                        id="salary"
                        name="salary"
                        className="form-control mb-3 mt-3"
                        value={empToBeAdded.salary}
                        onChange={handleAddEmp}
                        placeholder="Enter salary" />
                    <input
                        type="submit"
                        className="btn btn-primary form-control mb-3 mt-3"
                        value="Add Employee"
                        onClick={submitAddEmp}
                    />
                </div>
            </div>
            <div className="bg-white shadow shadow-regular mb-3 mt-3 px-3 py-3 pb-3 pt-3 col-6">
                <p>Find an Employee</p>
                <div>
                    <form className="form form-group">
                        <input
                            type="number"
                            className="form-control mb-3 mt-3"
                            id="eid"
                            value={eid}
                            placeholder="Enter employee id"
                            onChange={handleChange}
                            autoFocus />
                        <input type="submit" className="form-control mb-3 mt-3 btn btn-primary" value="Get Employee" onClick={submitGetEmpById} />
                    </form>
                </div>
                <p>Employee data: {emp.employeeId} {emp.firstName} {emp.salary}</p>
            </div>
            <div className="bg-white shadow shadow-regular mb-3 mt-3 px-3 py-3 pb-3 pt-3 col-6">
                <p>Get All Employees</p>
                <div className="form form-group" >
                    <input
                        type="button"
                        className="btn btn-primary form-control mb-3 mt-3"
                        value="Get All Employees"
                        onClick={submitGetAllEmps}
                    />
                </div>
            </div>
        </div >
    );
}

export default EmpData;




// import axios from "axios";
// import { useState, useEffect } from "react";
// import Employee from "../models/Employee";

// const EmpData = () => {

//     const [eid, setEid] = useState('');
//     const [emp, setEmp] = useState(new Employee());
//     const [empToBeAdded, setEmpToBeAdded] = useState(new Employee());
//     const [allEmps, setAllEmps] = useState([]);

//     useEffect(() => {
//         setEmp({
//             employeeId: 0,
//             firstName: '',
//             salary: 0
//         });
//     }, []);

//     const handleChange = (evt) => {
//         console.log(evt.target.value);
//         setEid(evt.target.value);
//     }

//     const submitGetEmpById = (evt) => {
//         console.log(eid);
//         evt.preventDefault();
//         axios.get(`http://localhost:8088/emp/get-employee-by-id/${eid}`)
//             .then((response) => {
//                 console.log(response.data);
//                 setEmp(response.data);
//             });
//     }

//     const submitGetAllEmps = (evt) => {
//         console.log(`submitGetAllEmps`);
//         evt.preventDefault();
//         axios.get(`http://localhost:8088/emp/get-all-employees`)
//             .then((response) => {
//                 console.log(response.data);
//                 setAllEmps(response.data);
//                 console.log(allEmps);
//             });
//     }

//     const handleAddEmp = (e) => {
//         console.log(e.target.name);
//         console.log(e.target.value);
//         setEmpToBeAdded({
//             ...empToBeAdded,
//             [e.target.name]: e.target.value
//         });
//     }

//     const submitAddEmp = (evt) => {
//         evt.preventDefault();
//         axios.post(`http://localhost:8088/emp/add-employee`, empToBeAdded)
//             .then((response) => {
//                 alert(`Employee with employeeId ${response.data.employeeId} added successfully.`);
//             })
//             .catch(() => {
//                 alert("Employee could not be added.");
//             });
//     }

//     return (
//         <div className="container">
//             <p className="display-4 text-primary">EmpData Component</p>
//             <div className="bg-white shadow shadow-regular mb-3 mt-3 px-3 py-3 pb-3 pt-3 col-6">
//                 <p>Add New Employee</p>
//                 <div className="form form-group" >
//                     <input
//                         type="text"
//                         id="firstName"
//                         name="firstName"
//                         className="form-control mb-3 mt-3"
//                         value={empToBeAdded.firstName}
//                         onChange={handleAddEmp}
//                         placeholder="Enter First Name" />
//                     <input
//                         type="number"
//                         id="salary"
//                         name="salary"
//                         className="form-control mb-3 mt-3"
//                         value={empToBeAdded.salary}
//                         onChange={handleAddEmp}
//                         placeholder="Enter salary" />
//                     <input
//                         type="submit"
//                         className="btn btn-primary form-control mb-3 mt-3"
//                         value="Add Employee"
//                         onClick={submitAddEmp}
//                     />
//                 </div>
//             </div>
//             <div className="bg-white shadow shadow-regular mb-3 mt-3 px-3 py-3 pb-3 pt-3 col-6">
//                 <p>Find an Employee</p>
//                 <div>
//                     <form className="form form-group">
//                         <input
//                             type="number"
//                             className="form-control mb-3 mt-3"
//                             id="eid"
//                             value={eid}
//                             placeholder="Enter employee id"
//                             onChange={handleChange}
//                             autoFocus />
//                         <input type="submit" className="form-control mb-3 mt-3 btn btn-primary" value="Get Employee" onClick={submitGetEmpById} />
//                     </form>
//                 </div>
//                 <p>Employee data: {emp.employeeId} {emp.firstName} {emp.salary}</p>
//             </div>
//             <div className="bg-white shadow shadow-regular mb-3 mt-3 px-3 py-3 pb-3 pt-3 col-6">
//                 <p>Get All Employees</p>
//                 <div className="form form-group" >
//                     <input
//                         type="button"
//                         className="btn btn-primary form-control mb-3 mt-3"
//                         value="Get All Employees"
//                         onClick={submitGetAllEmps}
//                     />
//                 </div>
//             </div>
//         </div >
//     );
// }

// export default EmpData;