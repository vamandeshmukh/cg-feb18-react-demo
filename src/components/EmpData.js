import { useState, useEffect } from "react";

const EmpData = () => {

    const [eid, setEid] = useState('');
    const [emp, setEmp] = useState({});

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

    const submitGetEmployee = (evt) => {
        evt.preventDefault();
        setEmp({
            employeeId: 101,
            firstName: 'Sonu',
            salary: 50000
        });
    }

    return (
        <div className="container">
            <p className="display-4 text-primary">EmpData Component</p>
            <div>
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

                        <input type="submit" className="form-control mb-3 mt-3 btn btn-primary" value="Get Employee" onClick={submitGetEmployee} />
                        {/* submitGetEmployee */}
                    </form>
                </div>
                <p>Employee data: {emp.employeeId} {emp.firstName} {emp.salary}</p>
            </div>
        </div>
    );
}

export default EmpData;