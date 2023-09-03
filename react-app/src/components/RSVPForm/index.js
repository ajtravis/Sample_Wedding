import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import { signUp } from "../../store/session";
import './SignupForm.css';

function RSVPForm() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [isComing, setisComing] = useState(false);
  const [numGuests, setNumGuests] = useState(0);
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState([]);


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
    <div>
      <h1>RSVP</h1>
      <form id="rsvp-form" onSubmit={handleSubmit}>
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
          Number of guests
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
          placeholder="Got a message for the bride and groom? Leave it here!"
          onChange={(e) => setMessage(e.target.value)} />

        <button type="submit">submit</button>
      </form>
    </div>
  );
}

export default RSVPForm;
