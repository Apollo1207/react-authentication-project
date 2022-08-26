import React, {useRef, useState} from "react";
import {Form, Button, Card, Alert} from "react-bootstrap";
import {useAuth} from "../contexts/AuthContext";
import {Link, useNavigate} from "react-router-dom";


function ForgotPassword() {
    const emailRef = useRef();
    const {resetPassword} = useAuth()
    const [error, setError] = useState("");
    const [message, setMessage] = useState("");
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    async function handleSubmit(e) {
        e.preventDefault()

        try {
            setMessage("")
            setError("")
            setLoading(true)
            await resetPassword(emailRef.current.value)
            setMessage("Check your inbox for further instructions")
            // navigate("/")

        } catch {
            setError("Failed to reset password")
        }

        setLoading(false)

    }

    return (
        <>
            <Card>
                <Card.Body>
                    <h2 className="text-center mb-4">Reset password</h2>
                    {error && <Alert variant="danger">{error}</Alert>}
                    {message && <Alert variant="success">{message}</Alert>}
                    <Form onSubmit={handleSubmit}>
                        <Form.Group id="email">
                            <Form.Label className="mt-3">Email</Form.Label>
                            <Form.Control type="email" ref={emailRef} required/>
                        </Form.Group>
                        <Button disabled={loading} className="w-100 mt-3" type="submit">Reset password</Button>
                    </Form>
                </Card.Body>
                <div className="w-100 text-center mb-3">
                    <Link to="/login">Login</Link>
                </div>
            </Card>
            <div className="w-100 text-center mt-2">
                Need an account? <Link to="/signup">Sign Up</Link>
            </div>
        </>
    );
}

export default ForgotPassword;

