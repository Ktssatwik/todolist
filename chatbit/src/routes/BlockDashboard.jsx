import Cookies from 'js-cookie';
import { Navigate } from 'react-router-dom';

export default function BlockDashboard({ children }) {
  const accesstoken = Cookies.get('access_token');
  // agar token valid nahi hai tab sidha login pai javo
  if (!accesstoken) {
    // alert('bro u are not logged in , login karo first');
    return <Navigate to="/login" />;
  }
  return children;
}
