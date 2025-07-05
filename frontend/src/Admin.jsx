import react from "react";
import { useNavigate } from "react-router-dom";

const Admin = () => {
    return (
        <div>
            <h1>Admin Page</h1>
            <p>Welcome to the admin dashboard.</p>
            <button onClick={() => alert("Admin functionality coming soon!")}>Admin Action</button>
        </div>
    );
}
export default Admin;