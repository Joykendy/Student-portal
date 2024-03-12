import React, { useState } from "react";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";

const graduationImage = "/src/images/graduation image.jpg";

const SignUp = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSignUp = () => {
    console.log("Signing up with:", { username, password, confirmPassword });
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "90vh",
        marginTop: "50px",
      }}
    >
      <Stack sx={{ width: "1000px", display: "flex" }} spacing={2}>
        <Card sx={{ 
          display: "flex",
          width: "1000px",
          background: "linear-gradient(to bottom, #800000, #4B0082)",
          padding:"20px,20px,40px,20px"
        }}>
          <Box sx={{ 
            display: "flex",
            width: "1000px",
            height: "450px",
            padding: 2,
          }}>
            <img
              src={graduationImage}
              alt="Your Alt Text"
              style={{ width: "50%", height: "auto" }}
            />
            <Card sx={{ 
              width: "100%",
              height: "auto",
              padding: "20px",
              background: "rgba(255, 255, 255, 0.9)", // Semi-transparent white background
              borderRadius: "10px", // Optional: Adds rounded corners
            }}>
              <h1 style={{ color: "blue", marginLeft: "25%", fontSize: "24px" }}>Account Registration</h1>
              <h3 style={{ marginLeft: "20%", fontSize: "18px" }}>To sign up, kindly fill the form below</h3>
              <form>
                <Box sx={{ marginBottom: 2 }}>
                  <label style={{ fontWeight: "bold", fontSize: "16px" }}>Username:</label>
                  <TextField
                    type="text"
                    placeholder="Student No"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    variant="outlined"
                    margin="normal"
                    sx={{ width: "100%", height: "30px" }}
                    
                  />
                </Box>
                <Box sx={{ marginBottom: 2 }}>
                  <label style={{ fontWeight: "bold", fontSize: "16px" }}>Password:</label>
                  <TextField
                    type="password"
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    variant="outlined"
                    margin="normal"
                    sx={{ width: "100%", height: "10px" }}
                    InputLabelProps={{ shrink: true }}
                  />
                </Box>
                <Box sx={{ marginBottom: 2 }}>
                  <label style={{ fontWeight: "bold", fontSize: "16px" }}>Confirm Password:</label>
                  <TextField
                    type="password"
                    placeholder="Confirm your password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    sx={{ width: "100%", height: "30px" }}
                    InputLabelProps={{ shrink: true }}
                  />
                </Box>
                <Button variant="contained" onClick={handleSignUp} sx={{ width: "100%", borderRadius: "10px", height: "30px" }}>
                  Submit
                </Button>
                <p sx={{ fontSize: "14px" }}>
                  Already have an account? <Link href="#" variant="body2">Log In</Link>
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

export default SignUp;
