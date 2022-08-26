import '../App.css';
import SignUp from "./SignUp";
import Dashboard from "./Dashboard";
import {Container} from "react-bootstrap";
import {AuthProvider, useAuth} from "../contexts/AuthContext";
import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom";
import Login from "./Login";
import PrivateRoutes from "./PrivateRoutes";
import ForgotPassword from "./ForgotPassword";
import PublicRoutes from "./PublicRoutes";
import UpdateProfile from "./UpdateProfile";

function App() {
    return (
        <AuthProvider>
            <Container className="d-flex align align-items-center justify-content-center" style={{minHeight: "100vh"}}>
                <div className="w-100" style={{maxWidth: "400px"}}>
                    <BrowserRouter>
                        <Routes>
                            <Route element={<PrivateRoutes/>}>
                                <Route element={<Dashboard/>} path="/"/>
                                <Route element={<UpdateProfile/>} path="/update-profile"/>
                            </Route>
                            <Route element={<PublicRoutes/>}>
                                <Route element={<Login/>} path="/login"/>
                                <Route element={<SignUp/>} path="/signup"/>
                                <Route element={<ForgotPassword/>} path="/forgot-password"/>
                            </Route>
                        </Routes>
                    </BrowserRouter>
                </div>
            </Container>
        </AuthProvider>
    );
}

export default App;

