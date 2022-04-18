// JSX, component, state, props

import Footer from "./components/Footer";
import Header from "./components/Header";
import Parent from "./components/Parent";
import EmpData from "./components/EmpData";

//// with arrow function 
const App = () => {

  return (

    <div>
      <p>App Component</p>
      {/* <Header />
      <Parent />
      <Footer /> */}
      <EmpData />
    </div>

  );
}
export default App;

//// basic modification 
// function App() {
//   return (
//     <div>
//       <h1>CG React App</h1>
//       <p>Welcome to Capgemini React app. </p>
//     </div>
//   );
// }
// export default App;


//// original code 
// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
