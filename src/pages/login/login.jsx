import React, { useState } from "react";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import Link from "@mui/material/Link";

const graduationImage = "/src/images/graduation image.jpg";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [pin, setPin] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  const handleLogin = () => {
    // Add your login logic here
    console.log("Logging in with:", { username, pin, rememberMe });
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "90vh",
        marginTop: "50px ",
      }}
    >
      <Stack sx={{ width: "1000px", display: "flex" }} spacing={2}>
        <Card sx={{ display: "flex", width: "1000px", background: "linear-gradient(to bottom, #800000, #4B0082)",
 }}>
          <Box sx={{ display: "flex", width: "1000px", height: "450px", padding: 2 }}>
            <img
              src={graduationImage}
              alt="Your Alt Text"
              style={{ width: "50%", height: "auto" }}
            />



            <Card sx={{ width: "100%" ,background: "rgba(255, 255, 255, 0.9)",borderRadius: "10px",padding:"20px 20px 50px 20px"}}>
              <h1 style={{ color: "blue", marginLeft: "25%" }}>Hi, welcome back</h1>
              <h3 style={{ marginLeft: "20%" }}>Please fill in your details to log in</h3>
              <form>
                <Box sx={{ marginBottom: 1 }}>
                  <Box>
                  <label style={{ fontWeight: "bold" }}>Username:</label>
                  <TextField
                    type="text"
                    placeholder="Student No"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    variant="outlined"
                    margin="normal"
                    sx={{ width: "100%",height:"70px" }}
                  />
                </Box>
                <Box sx={{ marginBottom: 1 }}>
                  <label style={{ fontWeight: "bold" }}>Password:</label>
                  <TextField
                    type="password"
                    placeholder="Enter your password"
                    value={pin}
                    onChange={(e) => setPin(e.target.value)}
                    variant="outlined"
                  
                    margin="normal"
                    sx={{ width: "100%", height: "30px" }} // Adjusted height here
                  />
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    marginLeft: "20px",
                    fontSize: "small",
                  }}
                >
                  <FormControlLabel
                    control={<Checkbox checked={rememberMe} onChange={() => setRememberMe(!rememberMe)} />}
                    label="Remember Me"
                    sx={{ fontSize: "10px" }}
                  />
                  <Link
                    component="button"
                    variant="body2"
                    onClick={() => console.log("Forgot Password?")}
                    sx={{ marginLeft: "auto", fontSize: "10px" }}
                  >
                    Forgot Password?
                  </Link>
                </Box>
                <Button variant="contained" onClick={handleLogin} sx={{ width: "100%" }}>
                  Sign In
                </Button>
                </Box>
                <p sx={{ fontSize: "small" }}>
                  Don't have an account? <Link href="#" variant="body2">Sign up</Link>
                </p>
              
              </form>
            </Card>
          </Box>
        </Card>
        <Box sx={{ textAlign: "center", marginTop: "10px" }}></Box>
      </Stack>
    </Box>
  );
};

export default LoginPage;
