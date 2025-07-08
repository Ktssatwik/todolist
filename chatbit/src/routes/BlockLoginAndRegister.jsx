import Cookies from 'js-cookie';
import { Navigate } from 'react-router-dom';

export default function BlockLoginAndRegister({ children }) {
  const accesstoken = Cookies.get('access_token');

  //agar token hai tab sidha dashboard pai javo, kynki ap already logged in ho
  if (accesstoken) {
    // alert('try mat karo to click on login or register, ap already logged in ho');
    return <Navigate to="/dashboard/default" replace />;
  }

  return children;
}
