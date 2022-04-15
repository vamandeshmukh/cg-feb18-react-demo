import Child from "./Child";

const Parent = () => {

    const parentDataInParent = 10;
    let childDataInParent; // state 

    const getChildData = (num) => {
        console.log(num); // 15
        childDataInParent = num;
    }

    return (

        <div className="container">
            <p>Parent Component</p>
            <p> Parent data in parent component: {parentDataInParent}</p>
            <p> Child data in parent component: {childDataInParent}</p>
            <Child passDataToChild={parentDataInParent}
                fun={getChildData}
            />
        </div>

    );
}
export default Parent;


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
