
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import Child from "./Child";

const Parent = () => {

    const parentDataInParent = 10;
    const [childDataInParent, setChildDataInParent] = useState();
    const dataOfAnotherComponent = useSelector((state) => { return state.emp.empData });

    const [empData, setEmpData] = useState({});

    useEffect(() => {
        setEmpData({
            eid: 0,
            firstName: '',
            salary: 0
        });
    }, []);

    const getChildData = (num) => {
        console.log(num); // 15
        setChildDataInParent(num);
    }

    return (

        <div className="container">
            <p>Parent Component</p>
            <p> Emp data in parent component: {dataOfAnotherComponent.firstName}</p>
            <p> Parent data in parent component: {parentDataInParent}</p>
            <p> Child data in parent component: {childDataInParent}</p>
            <Child passDataToChild={parentDataInParent}
                fun={getChildData}
            />
            <p>{empData.eid}</p>
        </div>

    );
}
export default Parent;


// import { useState, useEffect } from "react";
// import Child from "./Child";

// const Parent = () => {

//     const parentDataInParent = 10;
//     // let childDataInParent = 0; // state
//     const [childDataInParent, setChildDataInParent] = useState();

//     // using useState to create variables
//     // number, string, boolean, object, array
//     // const [num, setNum] = useState(0); // number variable
//     // const [cityName, setCityName] = useState(''); // string variable
//     // const [isMarried, setIsmarried] = useState(false); // booealn variable
//     const [empData, setEmpData] = useState({}); // object variable
//     // const [phones, setPhones] = useState([]); // array variable

//     // useEffect(arg);
//     // useEffect(() => {});
//     // useEffect(arg1, arg2);
//     // useEffect(() => {}, []);

//     useEffect(() => {
//         setEmpData({
//             eid: 0,
//             firstName: '',
//             salary: 0
//         });
//         // setNum = 10;
//     }, []);

//     const getChildData = (num) => {
//         console.log(num); // 15
//         // childDataInParent = num;
//         setChildDataInParent(num);
//     }

//     return (

//         <div className="container">
//             <p>Parent Component</p>
//             <p> Parent data in parent component: {parentDataInParent}</p>
//             <p> Child data in parent component: {childDataInParent}</p>
//             <Child passDataToChild={parentDataInParent}
//                 fun={getChildData}
//             />
//             <p>{empData.eid}</p>
//         </div>

//     );
// }
// export default Parent;


// import Child from "./Child";

// const Parent = () => {

//     const parentData = 10;
//     const parentName = "abc";

//     fun = () => {
//         // code
//     }

//     return (

//         <div className="container">
//             <p>Parent Component</p>
//             <p> Parent data in parent component: {parentData}</p>
//             <Child pDataToPass={parentData}
//                 p2={parentName}
//                 p3={fun} />
//         </div>

//     );
// }
// export default Parent;
