import React, { useState } from 'react';

const UserForm = (props) => {
  const [firstName, setFirstName] = useState("");
  const [firstNameError, setFirstNameError] = useState("");

  const [lastName, setLastName] = useState("");
  const [lastNameError, setLastNameError] = useState("");

  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");

  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const [confirmPassword, setConfirmPassword] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");



  const handleFirstName = (e) => {
    setFirstName(e.target.value);
    if (e.target.value.length < 2) {
      setFirstNameError("First name must be at lesst to 2 character");
    } else {
      setFirstNameError("");
    }
  }

  const handleLastName = (e) => {
    setLastName(e.target.value);
    if (e.target.value.length < 2) {
      setLastNameError("Lastname must be at lesst to 2 character");
    } else {
      setLastNameError("");
    }
  }

  const handleLEmail = (e) => {
    setEmail(e.target.value);
    if (e.target.value.length < 5) {
      setEmailError("Email must be at least 5 characters");
    } else {
      setEmailError("");
    }
  }

  const handlePassword = (e) => {
    setPassword(e.target.value);
    if (e.target.value.length < 8) {
      setPasswordError(" passwords must match and be at least 8 characters");
    } else {
      setPasswordError("");
    }
  }

  const handleConfirmPassword = (e) => {
    setConfirmPassword(e.target.value);
    if (e.target.value != password) {
      setConfirmPasswordError("Passwords must match");
    } else {
      setConfirmPasswordError("");
    }
  }


  return (
    <div>
      <form >
        <div>

          <label>FirstName: </label>
          <input type="text" onChange={(e) => { setFirstName(e.target.value); handleFirstName(e) }} />
          <p>{firstNameError}</p>
        </div>
        <div>

          <label>Lastname: </label>
          <input type="text" onChange={(e) => { setLastName(e.target.value); handleLastName(e) }} />
          <p>{lastNameError}</p>
        </div>
        <div>

          <label>Email Address: </label>
          <input type="text" onChange={(e) => { setEmail(e.target.value); handleLEmail(e) }} />
          <p>{emailError}</p>
        </div>
        <div>

          <label>Password: </label>
          <input type="text" onChange={(e) => { setPassword(e.target.value); handlePassword(e) }} />
          <p>{passwordError}</p>
        </div>
        <div>

          <label>ConfirmPassword: </label>
          <input type="text" onChange={(e) => { setConfirmPassword(e.target.value); handleConfirmPassword(e) }} />
          <p>{confirmPasswordError}</p>
        </div>
        <input type="submit" value="Create User" />

        <p> FirstName: {firstName}</p>
        <p> Lastname: {lastName}</p>
        <p> Email: {email}</p>
        <p> Password: {password}</p>
        <p> ConfirmPassword: {confirmPassword}</p>
      </form>


    </div>
  );

}
export default UserForm;

