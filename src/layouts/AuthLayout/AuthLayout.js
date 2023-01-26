import './AuthLayout.css';

import { Outlet } from 'react-router-dom';

export default function AuthLayout() {
    return (
        <div className="wrapper">
            <h1 className="logo">Robert's<i class="fa-solid fa-mug-saucer"></i></h1>
            <Outlet />
        </div>
    );
}
