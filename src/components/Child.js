
const Child = (props) => {

    const childDataInChild = 15;
    const parentDataInChild = props.passDataToChild;

    const passChildData = () => {
        console.log(`child`);
        props.fun(childDataInChild);
    }

    return (

        <div className="container">
            <p>Child Component</p>
            <p>Child data in child component: {childDataInChild} </p>
            <p>Parent data in child component: {parentDataInChild} </p>
            <button type="button" className="btn btn-primary" onClick={passChildData}>Click</button>
        </div>

    );
}
export default Child;


// const Child = (props) => {

//     const pData = props.pDataToPass;
//     const pN = props.p2;
//     return (

//         <div className="container">
//             <p>Child Component</p>
//             <p>Parent data in child component: {pData} </p>
//             <p>{pN}</p>
//         </div>

//     );
// }
// export default Child;
