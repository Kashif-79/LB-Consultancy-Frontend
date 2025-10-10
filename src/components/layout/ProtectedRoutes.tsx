import type { ReactNode } from "react";
import { useAppSelector } from "../../redux/hooks";
import { Navigate } from "react-router-dom";
import { logOut, useCurrentToken } from "../../redux/features/auth/authSlice";
import { useDispatch } from "react-redux";
import { verifyToken } from "../../utils/verifyToken";

type TProtectedRoutes = {
  children: ReactNode;
  role: string | undefined;
};

const ProtectedRoute = ({ children, role }: TProtectedRoutes) => {
  const token = useAppSelector(useCurrentToken);

  let user;
  if (token) {
    user = verifyToken(token);
  }
  const disPatch = useDispatch();
  if (role !== undefined && role !== user?.role) {
    disPatch(logOut());
    return <Navigate to="/login" replace={true} />;
  }

  if (!token) {
    return <Navigate to="/login" replace={true} />;
  }

  return children;
};

export default ProtectedRoute;
