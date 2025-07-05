import React from "react";
import { useNavigate } from "react-router-dom";
const User = () => {
    return (
        <div>
            <h1>User Page</h1>
            <p>Welcome to the user dashboard.</p>
            <button onClick={() => alert("User functionality coming soon!")}>User Action</button>
        </div>
    );
}
export default User;