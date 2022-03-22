import React, { useState, useRef } from "react";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import { Button } from 'react-bootstrap';
import { isEmail } from "validator";
import "../../styles/Text.css"
import axios from "axios";

const API_URL = "http://localhost:8000/api/v1/";

const required = (value) => {
  if (!value) {
    return (
      <div className="alert alert-danger" role="alert">
        This field is required!
      </div>
    );
  }
};

const validEmail = (value) => {
  if (!isEmail(value)) {
    return (
      <div className="alert alert-danger" role="alert">
        This is not a valid email.
      </div>
    );
  }
};

export const GetStarted = () => {
  const form = useRef();
  const checkBtn = useRef();

  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [successful, setSuccessful] = useState(false);
  const [message, setMessage] = useState("");
  const [phone, setPhone] = useState("");
  const [textarea, setTextarea] = useState("");

  const onChangeFirstname = (e) => {
    const firstname = e.target.value;
    setFirstname(firstname);
  };

  const onChangeLastname = (e) => {
    const lastname = e.target.value;
    setLastname(lastname);
  };

  const onChangeEmail = (e) => {
    const email = e.target.value;
    setEmail(email);
  };

  const onChangePhone = (e) => {
    const phone = e.target.value;
    setPhone(phone);
  };

  const onChangeTextarea = (e) => {
    const textarea = e.target.value;
    setTextarea(textarea);
  };

  const handleRegister = (e) => {
    e.preventDefault();

    setMessage("");
    setSuccessful(false);

    form.current.validateAll();

    if (checkBtn.current.context._errors.length === 0) {
      let values = {
        "firstname": firstname,
        "lastname": lastname,
        "email": email,
        "phone": phone,
        "message": textarea
       };
    
      let json_values = JSON.stringify(values)
      
      axios({
        method: 'post',
        header: {
          'Accept': 'application/json',
          'Access-Control-Allow-Origin': '*',
          'Content-Type': 'application/json',
        },
        //mode: 'no-cors',
        url: API_URL + 'posts/',
        data: json_values
      }).then(
        (response) => {
          //setMessage(response.data.message);
          setMessage('Message has sent successfully!');
          setSuccessful(true);
        },
        (error) => {
          const resMessage =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString();

          setMessage(resMessage);
          setSuccessful(false);
        }
      );
    }
  };

  return (
    <>
    <div className="row animate__animated animate__fadeIn mt-5">
      <div className="col-md-5" />
      <div className="col-md-2">
        <div className="container ">

          <Form onSubmit={handleRegister} ref={form}>
            {!successful && (
              <div>
                <div className="form-group">
                  <Input
                    type="text"
                    className="form-control mb-2"
                    placeholder="Nombre (opcional)"
                    name="firstname"
                    value={firstname}
                    onChange={onChangeFirstname}
                    autoComplete="nope"
                  />
                </div>

                <div className="form-group">
                  <Input
                    type="text"
                    className="form-control mb-2"
                    placeholder="Apellido (opcional)"
                    name="Lastname"
                    value={lastname}
                    onChange={onChangeLastname}
                    autoComplete="nope"
                  />
                </div>

                <div className="form-group">
                  <Input
                    type="text"
                    className="form-control mb-2"
                    placeholder="Email"
                    name="email"
                    value={email}
                    onChange={onChangeEmail}
                    validations={[required, validEmail]}
                    autoComplete="nope"
                  />
                </div>

                <div className="form-group">
                  <Input
                    type="text"
                    className="form-control mb-2"
                    placeholder="Teléfono (opcional)"
                    name="phone"
                    value={phone}
                    onChange={onChangePhone}
                    autoComplete="nope"
                  />
                </div>

                <div className="form-group">
                  <textarea
                    type="text"
                    className="form-control mb-2"
                    placeholder="Coméntanos cuales son tus objetivos (opcional)"
                    name="textarea"
                    value={textarea}
                    onChange={onChangeTextarea}
                    validations={[required, validEmail]}
                    autoComplete="nope"
                    style={{"height":"150px"}}
                  />
                </div>

                <div className="form-group d-grid gap-2">
                <Button variant="primary" size="lg" onClick={ handleRegister }>Enviar</Button>
                </div>
              </div>
            )}

            {message && (
              <div className="form-group animate__animated animate__fadeIn">
                <div
                  className={
                    successful ? "alert alert-success" : "alert alert-danger"
                  }
                  role="alert"
                >
                  {message}
                </div>
              </div>
            )}
            <CheckButton style={{ display: "none" }} ref={checkBtn} />
          </Form>
        </div>
      </div>
      <div className="col-md-5" />
    </div>
    </>
  );
};
