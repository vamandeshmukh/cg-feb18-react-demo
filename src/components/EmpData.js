 import { useState } from "react";
import Department from "../models/Department";
import Employee from "../models/Employee";
import { getEmpByIdService, getAllEmpsService, addEmpService } from "../services/EmployeeService";
import { getEmpById, getAllEmps } from '../redux/EmpSlice';
import { useDispatch, useSelector } from "react-redux";

const EmpData = () => {

    const [eid, setEid] = useState(''); 
    const [empToBeAdded, setEmpToBeAdded] = useState(new Employee());
    const [department, setDepartment] = useState(new Department());

    const empDataFromStore = useSelector((state) => state.emp.empData);
    const allEmpsDataFromStore = useSelector((state) => state.emp.empList);
    const dispatch = useDispatch();

    const handleChange = (evt) => {
        console.log(evt.target.name);
        console.log(evt.target.value);
        setEid(evt.target.value);
    }

    const submitGetEmpById = (evt) => {
        console.log(eid);
        evt.preventDefault();
        getEmpByIdService(eid)
            .then((response) => {
                dispatch(getEmpById(response.data));
            })
            .catch((error) => {
                console.log(error);
                alert(`Employee with ${eid} not found.`);
            });
        setEid('');
    }

    const submitGetAllEmps = (evt) => {
        evt.preventDefault();
        getAllEmpsService()
            .then((response) => {
                dispatch(getAllEmps(response.data));
                console.log(response.data);
            })
            .catch((error) => {
                alert(error);
            });
    }

    const handleAddEmp = (e) => {
        console.log(e.target.name);
        console.log(e.target.value);
        setEmpToBeAdded({
            ...empToBeAdded,
            [e.target.name]: e.target.value
        });

        setDepartment({
            ...department,
            [e.target.name]: e.target.value
        });
    }

    const submitAddEmp = (evt) => {
        evt.preventDefault();
        let empTemp = { ...empToBeAdded, department };
        addEmpService(empTemp)
            .then((response) => {
                console.log(response.data);
                alert(`Employee with employeeId ${response.data.employeeId} added successfully.`);
            })
            .catch(() => {
                setEmpToBeAdded(new Employee());
                empTemp = '';
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
                        type="number"
                        id="departmentId"
                        name="departmentId"
                        className="form-control mb-3 mt-3"
                        value={department.departmentId}
                        onChange={handleAddEmp}
                        placeholder="Enter Department Id" />
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
                <div> {(empDataFromStore.employeeId) &&
                    <div>
                        <p className="text-primary text-center font-weight-bold lead">Employee Details</p>
                        <p> Employee id: {empDataFromStore.employeeId} </p>
                        <p> First Name: {empDataFromStore.firstName} </p>
                        <p> Salary: {empDataFromStore.salary} </p>
                        {(empDataFromStore.department) &&
                            <div>
                                <p> Department id: {empDataFromStore.department.departmentId} </p>
                                <p> Department name: {empDataFromStore.department.departmentName} </p>
                                <p> City: {empDataFromStore.department.city}  </p>
                            </div>
                        }
                    </div>
                }
                </div>
            </div>
            <div className="bg-white shadow shadow-regular mb-3 mt-3 px-3 py-3 pb-3 pt-3 col-8">
                <p>Get All Employees</p>
                <div className="form form-group" >
                    <input
                        type="button"
                        className="btn btn-primary form-control mb-3 mt-3"
                        value="Get All Employees"
                        onClick={submitGetAllEmps}
                    />
                </div>
                <div>
                    <div> {(allEmpsDataFromStore.length !== 0) &&
                        <div>
                            <p className="text-primary text-center font-weight-bold lead">List of All Employees</p>
                            {
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th>Emp Id</th>
                                            <th>First Name</th>
                                            <th>Salary</th>
                                            <th>Dept Id</th>
                                            <th>Dept Name</th>
                                            <th>City</th>
                                        </tr>
                                    </thead>
                                    {allEmpsDataFromStore.map((e =>
                                        <tbody>
                                            <tr>
                                                <td>{e.employeeId}</td>
                                                <td>{e.firstName}</td>
                                                <td>{e.salary}</td>
                                                {(e.department) &&
                                                    <>
                                                        <td>{e.department.departmentId}</td>
                                                        <td>{e.department.departmentName}</td>
                                                        <td>{e.department.city}</td>
                                                    </>
                                                }
                                            </tr>
                                        </tbody>
                                    ))}
                                </table>
                            }
                        </div>
                    }
                    </div>
                </div>
            </div>
        </div >
    );
}

export default EmpData;













// import { useState, useEffect } from "react";
// import Department from "../models/Department";
// import Employee from "../models/Employee";
// import { getEmpByIdService, getAllEmpsService, addEmpService } from "../services/EmployeeService";
// import { getEmpById } from '../redux/EmpSlice';
// import { useDispatch, useSelector } from "react-redux";

// const EmpData = () => {

//     const [eid, setEid] = useState(''); // submitGetEmpById
//     const [empToBeAdded, setEmpToBeAdded] = useState(new Employee());
//     const [department, setDepartment] = useState(new Department());
//     const [allEmps, setAllEmps] = useState();

//     const empDataFromStore = useSelector((abc) => abc.emp.empData);
//     const dispatch = useDispatch();

//     // useEffect(
//     //     () => {

//     //     }
//     //     , []);

//     const handleChange = (evt) => {
//         console.log(evt.target.name);
//         console.log(evt.target.value);
//         setEid(evt.target.value);
//     }

//     const submitGetEmpById = (evt) => {
//         console.log(eid);
//         evt.preventDefault();
//         getEmpByIdService(eid)
//             .then((response) => {
//                 dispatch(getEmpById(response.data));
//             })
//             .catch((error) => {
//                 console.log(error);
//                 alert(`Employee with ${eid} not found.`);
//             });
//         setEid('');
//     }

//     const submitGetAllEmps = (evt) => {
//         evt.preventDefault();
//         getAllEmpsService()
//             .then((response) => {
//                 setAllEmps(response.data);
//                 console.log(response.data);
//                 console.log(allEmps);
//             })
//             .catch((error) => {
//                 alert(error);
//                 setAllEmps([]);
//             });
//     }

//     const handleAddEmp = (e) => {
//         console.log(e.target.name);
//         console.log(e.target.value);
//         setEmpToBeAdded({
//             ...empToBeAdded,
//             [e.target.name]: e.target.value
//         });

//         setDepartment({
//             ...department,
//             [e.target.name]: e.target.value
//         });
//     }

//     const submitAddEmp = (evt) => {
//         evt.preventDefault();
//         let empTemp = { ...empToBeAdded, department };
//         addEmpService(empTemp)
//             .then((response) => {
//                 console.log(response.data);
//                 alert(`Employee with employeeId ${response.data.employeeId} added successfully.`);
//             })
//             .catch(() => {
//                 setEmpToBeAdded(new Employee());
//                 empTemp = '';
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
//                         type="number"
//                         id="departmentId"
//                         name="departmentId"
//                         className="form-control mb-3 mt-3"
//                         value={department.departmentId}
//                         onChange={handleAddEmp}
//                         placeholder="Enter Department Id" />
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
//                 <div> {(empDataFromStore.employeeId) &&
//                     <div>
//                         <p className="text-primary text-center font-weight-bold lead">Employee Details</p>
//                         <p> Employee id: {empDataFromStore.employeeId} </p>
//                         <p> First Name: {empDataFromStore.firstName} </p>
//                         <p> Salary: {empDataFromStore.salary} </p>
//                         {(empDataFromStore.department) &&
//                             <div>
//                                 <p> Department id: {empDataFromStore.department.departmentId} </p>
//                                 <p> Department name: {empDataFromStore.department.departmentName} </p>
//                                 <p> City: {empDataFromStore.department.city}  </p>
//                             </div>
//                         }
//                     </div>
//                 }
//                 </div>
//             </div>
//             <div className="bg-white shadow shadow-regular mb-3 mt-3 px-3 py-3 pb-3 pt-3 col-8">
//                 <p>Get All Employees</p>
//                 <div className="form form-group" >
//                     <input
//                         type="button"
//                         className="btn btn-primary form-control mb-3 mt-3"
//                         value="Get All Employees"
//                         onClick={submitGetAllEmps}
//                     />
//                 </div>
//                 <div>
//                     <div> {(allEmps) &&
//                         <div>
//                             <p className="text-primary text-center font-weight-bold lead">List of All Employees</p>
//                             {
//                                 <table className="table">
//                                     <thead>
//                                         <tr>
//                                             <th>Emp Id</th>
//                                             <th>First Name</th>
//                                             <th>Salary</th>
//                                             <th>Dept Id</th>
//                                             <th>Dept Name</th>
//                                             <th>City</th>
//                                         </tr>
//                                     </thead>
//                                     {allEmps.map((e =>
//                                         <tbody>
//                                             <tr>
//                                                 <td>{e.employeeId}</td>
//                                                 <td>{e.firstName}</td>
//                                                 <td>{e.salary}</td>
//                                                 {(e.department) &&
//                                                     <>
//                                                         <td>{e.department.departmentId}</td>
//                                                         <td>{e.department.departmentName}</td>
//                                                         <td>{e.department.city}</td>
//                                                     </>
//                                                 }
//                                             </tr>
//                                         </tbody>
//                                     ))}
//                                 </table>
//                             }
//                         </div>
//                     }
//                     </div>
//                 </div>
//             </div>
//         </div >
//     );
// }

// export default EmpData;









// import { useState, useEffect } from "react";
// import Department from "../models/Department";
// import Employee from "../models/Employee";
// import { getEmpByIdService, getAllEmpsService, addEmpService } from "../services/EmployeeService";

// const EmpData = () => {

//     const [eid, setEid] = useState('');
//     const [emp, setEmp] = useState(new Employee());
//     const [empToBeAdded, setEmpToBeAdded] = useState(new Employee());
//     const [department, setDepartment] = useState(new Department());
//     const [allEmps, setAllEmps] = useState();

//     useEffect(
//         () => {

//         }
//         , []);

//     const handleChange = (evt) => {
//         console.log(evt.target.name);
//         console.log(evt.target.value);
//         setEid(evt.target.value);
//     }

//     const submitGetEmpById = (evt) => {
//         console.log(eid);
//         evt.preventDefault();
//         // axios.get(`http://localhost:8088/emp/get-employee-by-id/${eid}`)
//         getEmpByIdService(eid)
//             .then((response) => {
//                 console.log(response.data);
//                 setEmp(response.data);
//             })
//             .catch((error) => {
//                 alert(error);
//                 setEmp(new Employee());
//             })
//     }

//     const submitGetAllEmps = (evt) => {
//         evt.preventDefault();
//         getAllEmpsService()
//             .then((response) => {
//                 setAllEmps(response.data);
//                 console.log(response.data);
//                 console.log(allEmps);
//             })
//             .catch((error) => {
//                 alert(error);
//                 setAllEmps([]);
//             });
//     }

//     const handleAddEmp = (e) => {
//         console.log(e.target.name);
//         console.log(e.target.value);
//         setEmpToBeAdded({
//             ...empToBeAdded,
//             [e.target.name]: e.target.value
//         });

//         setDepartment({
//             ...department,
//             [e.target.name]: e.target.value
//         });
//     }

//     const submitAddEmp = (evt) => {
//         evt.preventDefault();
//         let empTemp = { ...empToBeAdded, department };
//         addEmpService(empTemp)
//             .then((response) => {
//                 console.log(response.data);
//                 alert(`Employee with employeeId ${response.data.employeeId} added successfully.`);
//             })
//             .catch(() => {
//                 setEmpToBeAdded(new Employee());
//                 empTemp = '';
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
//                         type="number"
//                         id="departmentId"
//                         name="departmentId"
//                         className="form-control mb-3 mt-3"
//                         value={department.departmentId}
//                         onChange={handleAddEmp}
//                         placeholder="Enter Department Id" />
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
//                 <div> {(emp.employeeId) &&
//                     <div>
//                         <p className="text-primary text-center font-weight-bold lead">Employee Details</p>
//                         <p> Employee id: {emp.employeeId} </p>
//                         <p> First Name: {emp.firstName} </p>
//                         <p> Salary: {emp.salary} </p>
//                         {(emp.department) &&
//                             <div>
//                                 <p> Department id: {emp.department.departmentId} </p>
//                                 <p> Department name: {emp.department.departmentName} </p>
//                                 <p> City: {emp.department.city}  </p>
//                             </div>
//                         }
//                     </div>
//                 }
//                 </div>
//             </div>
//             <div className="bg-white shadow shadow-regular mb-3 mt-3 px-3 py-3 pb-3 pt-3 col-8">
//                 <p>Get All Employees</p>
//                 <div className="form form-group" >
//                     <input
//                         type="button"
//                         className="btn btn-primary form-control mb-3 mt-3"
//                         value="Get All Employees"
//                         onClick={submitGetAllEmps}
//                     />
//                 </div>
//                 <div>
//                     <div> {(allEmps) &&
//                         <div>
//                             <p className="text-primary text-center font-weight-bold lead">List of All Employees</p>
//                             {
//                                 <table className="table">
//                                     <thead>
//                                         <tr>
//                                             <th>Emp Id</th>
//                                             <th>First Name</th>
//                                             <th>Salary</th>
//                                             <th>Dept Id</th>
//                                             <th>Dept Name</th>
//                                             <th>City</th>
//                                         </tr>
//                                     </thead>
//                                     {allEmps.map((e =>
//                                         <tbody>
//                                             <tr>
//                                                 <td>{e.employeeId}</td>
//                                                 <td>{e.firstName}</td>
//                                                 <td>{e.salary}</td>
//                                                 {(e.department) &&
//                                                     <>
//                                                         <td>{e.department.departmentId}</td>
//                                                         <td>{e.department.departmentName}</td>
//                                                         <td>{e.department.city}</td>
//                                                     </>
//                                                 }
//                                             </tr>
//                                         </tbody>
//                                     ))}
//                                 </table>
//                             }
//                         </div>
//                     }
//                     </div>
//                 </div>
//             </div>
//         </div >
//     );
// }

// export default EmpData;


{/* <div>
<p className="font-weight-bold">Employee data:</p>
<p> Employee id: {emp.employeeId} </p>
<p> First Name: {emp.firstName} </p>
<p> Salary: {emp.salary} </p>
{(emp.department) &&
    <div>
        <p> Department id: {emp.department.departmentId} </p>
        <p> Department name: {emp.department.departmentName} </p>
        <p> City: {emp.department.city}  </p>
    </div>
}
</div> */}




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