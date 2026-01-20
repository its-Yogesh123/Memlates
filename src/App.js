import {Routes,Route} from "react-router-dom"
import Home from "./pages/home";
import Edit from "./pages/edit";
import 'bootstrap/dist/css/bootstrap.min.css';
import './main.css';

const App=()=>{
    return (
        <div >
            <h1>Memlates</h1>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/edit" element={<Edit/>}/>
            </Routes>
        </div>
    );
};
export default App;