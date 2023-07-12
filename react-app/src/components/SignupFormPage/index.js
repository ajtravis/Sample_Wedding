import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import { signUp } from "../../store/session";
import './SignupForm.css';

function SignupFormPage() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [isComing, setisComing] = useState(false);
  const [numGuests, setNumGuests] = useState(0);
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState([]);

  if (sessionUser) return <Redirect to="/" />;

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = await dispatch(signUp({ firstName, lastName, email, isComing, numGuests, message }));
    if (data) {
      setErrors(data)
    }
    else {
      setErrors(['Confirm Password field must be the same as the Password field']);
    }
  };

  return (
    <>
      <h1>Sign Up</h1>
      <form onSubmit={handleSubmit}>
        <ul>
          {errors.map((error, idx) => <li key={idx}>{error}</li>)}
        </ul>
        <label>
          Email
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>
        <label>
          First Name
          <input
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
          />
        </label>
        <label>
          Last Name
          <input
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
          />
        </label>
        <label>
          Number of guests.
          <input
            type="number"
            min={0}
            step={1}
            value={numGuests}
            onChange={(e) => setNumGuests(e.target.value)}
          // required
          />
        </label>
        <textarea value={message}
          onChange={(e) => setMessage(e.target.value)} />

        <button type="submit">submit</button>
      </form>
    </>
  );
}

export default SignupFormPage;
