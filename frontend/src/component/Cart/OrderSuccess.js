import React from "react";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import "./orderSuccess.css";
import { Typography } from "@material-ui/core";
import { Link } from "react-router-dom";

const OrderSuccess = () => {
  return (
    <div className="orderSuccess">
      <CheckCircleIcon />

      <Typography>Your Order has been Placed successfully </Typography>
      <p>You will recieve <a href="https://redx.com.bd/">RedX</a> tracking number sms soon</p>
      <Link to="/orders">View Orders</Link>
    </div>
  );
};

export default OrderSuccess;
