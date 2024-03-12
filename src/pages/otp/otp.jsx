import React, { useState } from "react";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";

const OTPVerificationPage = () => {
  const [otp, setOtp] = useState("");
  const [error, setError] = useState("");

  const handleVerifyOTP = () => {
    
    const dummyOTP = "123456";

    if (otp === dummyOTP) {
      alert("OTP verification successful!");
    } else {
      setError("Invalid OTP. Please try again.");
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "90vh",
      }}
    >
      <Stack sx={{ width: "300px" }} spacing={2}>
        <Card  sx={{ width: "400px" ,height:"400px"}} >
        <h2 sx={{ marginLeft:"25%" }} >OTP Verification</h2>
        <TextField
          type="text"
          borderRadius="50px"
          placeholder="Enter OTP"
          value={otp}
          onChange={(e) => setOtp(e.target.value)}
          variant="outlined"
          margin="normal"
          fullWidth
          error={error !== ""}
          helperText={error}
        />
        <Button variant="contained" onClick={handleVerifyOTP} fullWidth>
          Verify OTP
        </Button>
        </Card>
      </Stack>
    </Box>
  );
};

export default OTPVerificationPage;
