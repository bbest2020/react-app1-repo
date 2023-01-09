import React from "react";
import { useLocation, Outlet } from "react-router-dom"


import {BrowserRouter as Router, Routes, Route, Link, Navigate} from 'react-router-dom';
import EditAdminPage from "./EditAdminPage";
import ViewAdminPage from "./ViewAdminPage";

export default function AdminPage() {

    return(
        <div>
            This is admin page. To acces this you need to login.
            <ul>
                <li><Link to="viewadmin">View Admin</Link></li>
                <li><Link to="editadmin">Edit Admin</Link></li>
            </ul>
            <Outlet />
        </div>
    )
}