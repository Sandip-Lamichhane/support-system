import { Routes, Route } from "react-router-dom";
import Login from "../pages/Login";
import HomePage from "../pages/Home";
import Layout from "../components/Layout";
import Register from "../pages/Register";

export default function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Layout />} >
                <Route index element={<HomePage />} />
            </Route>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
        </Routes>
    );
}