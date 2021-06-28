import React from 'react';
import { useState, useEffect } from 'react'
import { signup } from '../../actions/oAuthAction'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import NavbarSearch from "../layout/MainNavbar/NavbarSearch"
import { Navbar, FormControl, Nav, Form, Button } from 'react-bootstrap';

const EmailError = () => {
  return (
    <div style={{ border: '1px solid red', alignItems: 'center' }}>
      <div style={{ margin: '15px', cellPadding: '55px' }}>Email already exist</div>
    </div>
  );
}

const PhoneError = () => {
  return (
    <div style={{ border: '1px solid red', alignItems: 'center' }}>
      <div style={{ margin: '15px', cellPadding: '55px' }}>Phone already exist </div>
    </div>
  );
}

export const Register = (props) => {

  const [emailError, setEmailError] = useState(false)
  const [phoneError, setPhoneError] = useState(false)

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [firstname, setFirstname] = useState('')
  const [lastname, setLastname] = useState('')
  const [mobile, setMobile] = useState('')
  const [city, setCity] = useState('')
  const [locality, setLocality] = useState('')
  const [state, setState] = useState('')
  const [pincode, setPincode] = useState('')
  const [type, setType] = useState('RED')



  const userSignup = useSelector((store) => store.signup)
  const { loading, response, error } = userSignup

  const dispatch = useDispatch()
  const onSignup = () => {
    dispatch(signup(firstname, lastname, mobile, email, password, city, locality, state, pincode, type))
    window.scrollTo(0, 0)
  }


  useEffect(() => {

    if (response && response.status == 'success') {

      toast.success('Registerd Successfull', { autoClose: 2000 }, { position: toast.POSITION.TOP_LEFT })

      props.history.push('/login')


    } else if (response && response.status == 'error') {
      // alert(response.error);

      if (response.error == "phone") {
        setPhoneError(true)
        setEmailError(false);

      }
      else {
        setEmailError(true);
        setPhoneError(false);

      }
    } else if (error) {
      alert(error)
    }
  }, [loading, error, response])

  return (
    <div>


      <Navbar bg="light" variant="light" >
        <Navbar.Brand href="">Public News Board</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="/"><button className="mb-2 mr-1 btn ">Trending News</button></Nav.Link>
          <NavbarSearch />
          <Nav.Link href="login"> <button className="mb-2 mr-1 btn btn-outline-primary btn-sm">Login</button></Nav.Link>
          <Nav.Link href="register"><button className="mb-2 mr-1 btn btn-outline-primary btn-sm">Register</button></Nav.Link>

        </Nav>

      </Navbar>
      <div className="d-flex align-items-center auth px-0 h-100 ">
        <div className="row w-100 mx-0 ">
          <div className="col-lg-6 mx-auto">
            <div className="card text-left py-5 px-4 px-sm-5">


              <h4 className="fas fa-solar-panel">Public News Board</h4>

              <h6>New here?</h6>
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
                    onChange={(e) => {
                      setFirstname(e.target.value)
                    }}

                  />
                </div>
                <div className="form-group">
                  <label htmlFor="lastname">Last name</label>
                  <input
                    type="text"
                    className="form-control form-control-lg"
                    id="lastname"
                    placeholder="Enter your last name"
                    onChange={(e) => {
                      setLastname(e.target.value)
                    }}
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
                    onChange={(e) => {
                      setMobile(e.target.value)
                    }}
                  />
                  {phoneError && <PhoneError />}

                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    className="form-control form-control-lg"
                    id="email"
                    placeholder="Enter your email id"
                    onChange={(e) => {
                      setEmail(e.target.value)
                    }}
                  />
                  {(emailError) ? <EmailError /> : ''}

                </div>
                <div className="form-group">
                  <label htmlFor="password">Password</label>
                  <input
                    type="password"
                    className="form-control form-control-lg"
                    id="password"
                    placeholder="Enter your password"
                    onChange={(e) => {
                      setPassword(e.target.value)
                    }}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="city">City</label>
                  <input
                    type="text"
                    className="form-control form-control-lg"
                    id="city"
                    placeholder="Enter your City"
                    onChange={(e) => {
                      setCity(e.target.value)
                    }}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="localities">Locality</label>
                  <input
                    type="text"
                    className="form-control form-control-lg"
                    id="localities"
                    placeholder="Enter your near by locality"
                    onChange={(e) => {
                      setLocality(e.target.value)
                    }}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="state">State</label>
                  <input
                    type="text"
                    className="form-control form-control-lg"
                    id="state"
                    placeholder="Enter your State"
                    onChange={(e) => {
                      setState(e.target.value)
                    }}
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
                    onChange={(e) => {
                      setPincode(e.target.value)
                    }}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="type">
                    Select if you to register as a Reader or Reporter
                    </label>
                  <select className="form-control form-control-lg" id="type" onChange={(e) => {
                    setType(e.target.value)
                  }}>
                    <option >Reader</option>
                    <option >Reporter</option>
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
                <Link to="/" className="btn btn-block btn-danger btn-lg font-weight-medium auth-form-btn">
                  CANCLE
                  </Link>
                <div onClick={onSignup} className="btn btn-block btn-primary btn-lg font-weight-medium auth-form-btn">
                  SIGN UP
                  </div>

                <div className="text-center mt-4 font-weight-light">
                  Already have an account?{" "}
                  <Link to="/login" className="text-primary">
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

