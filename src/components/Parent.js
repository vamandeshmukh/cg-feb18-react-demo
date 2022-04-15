import Child from "./Child";

const Parent = () => {

    const parentData = 10;
    const parentName = "abc";

    fun = () => {
        // code 
    }

    return (

        <div className="container">
            <p>Parent Component</p>
            <p> Parent data in parent component: {parentData}</p>
            <Child pDataToPass={parentData}
                p2={parentName}
                p3={fun} />
        </div>

    );
}
export default Parent;
