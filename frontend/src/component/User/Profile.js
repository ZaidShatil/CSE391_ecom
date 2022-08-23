import React, { Fragment, useEffect } from "react";
import { useSelector } from "react-redux";
import MetaData from "../layout/MetaData";
import Loader from "../layout/Loader/Loader";
import { Link } from "react-router-dom";
import "./Profile.css";
import totalAmount from "../../component/Order/MyOrders"
// import getAllOrders from "../../../../backend/controllers/orderController";

// import totalAmount from "../../component/Order/MyOrders"
// import { getAllOrders } from "../../actions/orderAction.js";
// import { useAlert } from "react-alert";






const Profile = ({ history }) => {
  const { user, loading, isAuthenticated } = useSelector((state) => state.user);


//   ////////////////////////////////////////
//   const dispatch = useDispatch();

//   const alert = useAlert();

//   const { loading, error, orders } = useSelector((state) => state.myOrders);
//   const { user } = useSelector((state) => state.user);

//  let totalAmount = 0;
//   orders &&
//     orders.forEach((item) => {
//       totalAmount += item.totalPrice;})

//     //////////////////////////////////////////////





  useEffect(() => {
    if (isAuthenticated === false) {
      history.push("/login");
    }
  }, [history, isAuthenticated]);
  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) : (
        <Fragment>

          <MetaData title={`${user.name}'s Profile`} />

          <div className="profileContainer">

            <div>
              <h1>My Profile</h1>
              <img src={user.avatar.url} alt={user.name} />
              <Link to="/me/update">Edit Profile</Link>
            </div>

            <div>

              <div>
                <h4>Full Name</h4>
                <p>{user.name}</p>
              </div>

              <div>
                <h4>Email</h4>
                <p>{user.email}</p>
              </div>

              <div>
                <h4>Joined On</h4>
                <p>{String(user.createdAt).substr(0, 10)}</p>
              </div>

              <div>
                <h4>Customer Survey</h4>
                <p><form onSubmit={"submit"}>
                      <label>
                        Name:
                        <input type="text" value="text" />
                      </label>
                      <input type="submit" value="Submit" />
                    </form>
                </p>
              </div>

              <div>
                <h4>Points</h4>
                <p><span>{totalAmount}</span></p>
                
              </div>


              <div>
                <Link to="/orders">My Orders</Link>
                <Link to="/password/update">Change Password</Link>
              </div>

              
               
            </div>
            
            
            </div>
            
        </Fragment>
      )}
    </Fragment>
  );
};

export default Profile;
