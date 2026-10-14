// import React from 'react';

// const ProtectedRoute = () => {
//   return (
//     <div>
      
//     </div>
//   );
// }

// export default ProtectedRoute;
import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const ProtectedRoute = () => {
  // In a real scenario, you would likely grab this from AuthContext
  // e.g., const { isAuthenticated } = useAuth();
  
  // For now, we check localStorage directly as per the GD AI Guide instructions
  // const token = localStorage.getItem('authToken');
  // const isAuthenticated = !!token;

  // if (!isAuthenticated) {
  //   // Redirect to login if there is no token
  //   return <Navigate to="/login" replace />;
  // }

  // Render child routes if authenticated
  return <Outlet />;
};

export default ProtectedRoute;