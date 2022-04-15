
const Child = (props) => {

    const pData = props.pDataToPass;
    const pN = props.p2;
    return (

        <div className="container">
            <p>Child Component</p>
            <p>Parent data in child component: {pData} </p>
            <p>{pN}</p>
        </div>

    );
}
export default Child;
