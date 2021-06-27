import React from 'react';
import { Form } from 'react-bootstrap';
import { useState, useEffect } from 'react'
import { signin } from '../../actions/oAuthAction'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom';


const EmailError = () => {
  return (
    <div style={{ border: '1px solid red', alignItems: 'center' }}>
      <h5 style={{ margin: '15px', cellPadding: '55px' }}>Please enter valid email/password</h5>
    </div>
  );
}

export const Login = (props) => {

  const [showError, setShowError] = useState(false)
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
      props.history.push('/news')

    } else if (response && response.status == 'error') {
      // alert(response.error);
      setShowError(true);
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
              </div>
              <h5 className="">  SIGN IN </h5>
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
                  Don't have an account? <Link to="/user-pages/register" className="text-primary">Create</Link>
                </div>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )

}

