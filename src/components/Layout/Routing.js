import {Routes, Route} from "react-router-dom";
import About from "../pages/About";
import ResultDetails from "../pages/ResultDetails";
import Home from "../pages/Home";
import Result from "../pages/Result";
import Admin from "../pages/Admin";

const Routing = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/result" element={<Result />} />
            <Route path="/result/:id" element={<ResultDetails />} />
            <Route path="/admin" element={<Admin />} />
            <Route exact path='*'  element={<div>404 not found</div>} />
        </Routes>
    );
};

export default Routing;
