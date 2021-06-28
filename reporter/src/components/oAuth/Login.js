import React from 'react';
import { Form } from 'react-bootstrap';
import { useState, useEffect } from 'react'
import { signin } from '../../actions/oAuthAction'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';


const EmailError = () => {
  return (
    <div style={{ border: '1px solid red', alignItems: 'center' }}>
      <div style={{ margin: '15px', cellPadding: '55px' }}>Please enter valid email/password</div>
    </div>
  );
}

const IsVerifiedError = () => {
  return (
    <div style={{ border: '1px solid red', alignItems: 'center' }}>
      <div style={{ margin: '15px', cellPadding: '55px' }}>Please verify your email </div>
    </div>
  );
}

export const Login = (props) => {

  const [showError, setShowError] = useState(false)
  const [showVerifyError, setShowVerifyError] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const userSignin = useSelector((store) => store.signin)
  const { loading, response, error } = userSignin

  const dispatch = useDispatch()
  const onSignin = () => {
    dispatch(signin(email, password))
  }


  useEffect(() => {

    if (response && response.status == 'success') {
      sessionStorage.setItem('token', response.data.token)
      sessionStorage.setItem('name', response.data.first_name + " " + response.data.last_name)
      sessionStorage.setItem('type', response.data.type)
      sessionStorage.setItem('isVerified', response.data.isVerified)
      toast.success('Login Successfull, Welcome', { autoClose: 2000 }, { position: toast.POSITION.TOP_LEFT })

      props.history.push('/news')


    } else if (response && response.status == 'error') {
      // alert(response.error);

      if (response.error == "please verify your email") {
        setShowVerifyError(true)
        setShowError(false);

      }
      else {
        setShowError(true);
        setShowVerifyError(false);

      }
    } else if (error) {
      alert(error)
    }
  }, [loading, error, response])



  return (
    <div>
      <div className="d-flex align-items-center auth px-0">
        <div className="row w-100 mx-0">
          <div className="col-lg-4 mx-auto">
            <div className="card text-left py-5 px-4 px-sm-5">
              <div className="brand-logo">
                {/* <img src={require("../../assets/images/logo.svg")} alt="logo" /> */}
                <h4 className="fas fa-solar-panel">Public News Board</h4>
              </div>
              <h6 className="">  SIGN IN </h6>
              {showVerifyError && <IsVerifiedError />}
              {(showError) ? <EmailError /> : ''}
              <Form className="pt-3">
                <Form.Group className="d-flex search-field">
                  <Form.Control onChange={(e) => {
                    setEmail(e.target.value)
                  }} type="email" placeholder="Email" size="lg" className="h-auto" />
                </Form.Group>
                <Form.Group className="d-flex search-field">
                  <Form.Control onChange={(e) => {
                    setPassword(e.target.value)
                  }} type="password" placeholder="Password" size="lg" className="h-auto" />
                </Form.Group>
                <div className="mt-3">
                  <Link to="/" className="btn btn-block btn-danger btn-lg font-weight-medium auth-form-btn">
                    CANCLE
                  </Link>
                  <div onClick={onSignin} className="btn btn-block btn-primary btn-lg font-weight-medium auth-form-btn">
                    SIGN IN
                  </div>
                </div>
                <div className="my-2 d-flex justify-content-between align-items-center">
                  <div className="form-check">
                    <label className="form-check-label text-muted">
                      <input type="checkbox" className="form-check-input" />
                      <i className="input-helper "></i>
                        Keep me signed in
                      </label>
                  </div>
                  <a href="!#" onClick={event => event.preventDefault()} className="auth-link text-muted">Forgot password?</a>
                </div>

                <div className="text-center mt-4 font-weight-light">
                  Don't have an account? <Link to="/register" className="text-primary">Create</Link>
                </div>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )

}

