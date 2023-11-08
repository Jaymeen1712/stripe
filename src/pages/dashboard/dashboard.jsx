import { Button } from "@mui/material";
import { CardElement } from "@stripe/react-stripe-js";
import React from "react";

const Dashboard = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
      }}
    >
      <div>
        <div
          style={{
            width: "300px",
          }}
        >
          <CardElement />
        </div>
        <Button className="w-100">Click me</Button>
      </div>
    </div>
  );
};

export default Dashboard;
