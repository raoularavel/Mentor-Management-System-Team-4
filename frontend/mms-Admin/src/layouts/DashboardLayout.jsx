import { Box, Toolbar, useTheme } from "@mui/material";
import { Navigate, Outlet } from "react-router-dom";

import axios from "axios";
import ChangePasswordForm from "src/pages/auth/ChangePasswordForm";
import EditProfile from "src/pages/profile/EditProfile";
import { useAuth } from "src/store/auth.reducer";
import Sidebar from "../components/dashboard/Sidebar";
import Topbar from "../components/dashboard/Topbar";
import { drawerWidth } from "../theme/theme";

export default function DashboardLayout() {
  const theme = useTheme();

     const auth = useAuth();

     if (!auth.token) return <Navigate to="/login" />;

     axios.defaults.headers.common.Authorization = `Bearer ${auth.token}`;
     axios.defaults.headers["x-access-token"] = auth.token

     if(!auth.data.has_change_password) return <ChangePasswordForm />

     if(!auth.data.has_fill_profile) return <EditProfile />

  return (
    <Box sx={{ display: "flex", height: "100%" }}>
      <Topbar />
      <Sidebar />
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          height: "100%",
          p: 2,
          backgroundColor: "#FFFFFF",
          width: { md: `calc(100% - ${drawerWidth}px)` },
          marginLeft: `${drawerWidth}px`,
          [theme.breakpoints.down("md")]: {
            marginLeft: 0,
          },
        }}
      >
        <Toolbar />
        <Outlet />
      </Box>
    </Box>
  );
}
