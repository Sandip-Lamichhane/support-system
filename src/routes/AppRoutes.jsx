import { Routes, Route } from "react-router-dom";
import Login from "../pages/Login";
import HomePage from "../pages/Home";
import Layout from "../layouts/website/Layout";
import AdminLayout from "../layouts/admin/AdminLayout";
import Register from "../pages/Register";
import AdminDashboard from "../features/dashboard/AdminDashboard";
import UserManagement from "../features/users/Users";
import Tickets from "../features/tickets/Tickets";

export default function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Layout />} >
                <Route index element={<HomePage />} />
            </Route>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />


            <Route path="/admin" element={<AdminLayout />} >
                <Route path="dashboard" element={<AdminDashboard />} />
                <Route path="tickets" element={<Tickets />} />
                <Route path="users" element={<UserManagement />} />
            </Route>
        </Routes>
    );
}