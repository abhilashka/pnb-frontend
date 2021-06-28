import React, { Component } from "react";
import { Link } from "react-router-dom";

export class Register extends Component {
  render() {
    return (
      <div>
        <div className="d-flex align-items-center auth px-0 h-100">
          <div className="row w-100 mx-0">
            <div className="col-lg-4 mx-auto">
              <div className="card text-left py-5 px-4 px-sm-5">
                {/* <div className="brand-logo">
                  <img src={require("../../assets/images/logo.svg")} alt="logo" />
                </div> */}
                <h4>New here?</h4>
                <h6 className="font-weight-light">
                  Signing up is easy. It only takes a few steps
                </h6>
                <form className="pt-3">
                  <div className="form-group">
                    <label htmlFor="exampleInputUsername1">First name</label>
                    <input
                      type="text"
                      className="form-control form-control-lg"
                      id="exampleInputUsername1"
                      placeholder="Enter your first name"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="lastname">Last name</label>
                    <input
                      type="text"
                      className="form-control form-control-lg"
                      id="lastname"
                      placeholder="Enter your last name"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="phone">Mobile number</label>
                    <input
                      type="tel"
                      className="form-control form-control-lg"
                      id="phone"
                      placeholder="Enter your 10 digit mobile number"
                      pattern="[6-9]{1}[0-9]{9}"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                      type="email"
                      className="form-control form-control-lg"
                      id="email"
                      placeholder="Enter your email id"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input
                      type="password"
                      className="form-control form-control-lg"
                      id="password"
                      placeholder="Enter your password"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="city">City</label>
                    <input
                      type="text"
                      className="form-control form-control-lg"
                      id="city"
                      placeholder="Enter your City"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="localities">Locality</label>
                    <input
                      type="text"
                      className="form-control form-control-lg"
                      id="localities"
                      placeholder="Enter your near by locality"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="state">State</label>
                    <input
                      type="text"
                      className="form-control form-control-lg"
                      id="state"
                      placeholder="Enter your State"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="pincode">Pincode</label>
                    <input
                      type="tel"
                      pattern="[0-9]{6}"
                      className="form-control form-control-lg"
                      id="pincode"
                      placeholder="Enter your 6 digit Pincode"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="type">
                      Select if you to register as a Reader or Reporter
                    </label>
                    <select className="form-control form-control-lg" id="type">
                      <option>Reader</option>
                      <option>Reporter</option>
                    </select>
                  </div>

                  <div className="mb-4">
                    <div className="form-check">
                      <label className="form-check-label text-muted">
                        <input type="checkbox" className="form-check-input" />
                        <i className="input-helper"></i>I agree to all Terms &
                        Conditions
                      </label>
                    </div>
                  </div>
                  <div className="mt-3">
                    <Link
                      className="btn btn-block btn-primary btn-lg font-weight-medium auth-form-btn"
                      to="/dashboard"
                    >
                      SIGN UP
                    </Link>
                  </div>
                  <div className="text-center mt-4 font-weight-light">
                    Already have an account?{" "}
                    <Link to="/user-pages/login" className="text-primary">
                      Login
                    </Link>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Register;
