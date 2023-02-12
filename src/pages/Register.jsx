import React, { useState } from "react";

const Register = () => {
  const [fullname, setFullname] = useState("");
  const [phone_number, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await fetch("http://localhost:3000/users/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        fullname,
        phone_number,
        email,
        password,
        
      }),
      
    });
    console.log(fullname)


    

    if (response.ok) {
      const data = await response.json();
      
      // Store the logged in data in the store
      // ...
      // Log the user in
      // ...
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="fullname">Full Name:</label>
        <input
          type="text"
          id="fullname"
          value={fullname}
          onChange={(event) => setFullname(event.target.value)}
        />
      </div>
      <div>
        <label htmlFor="phoneNumber">Phone Number:</label>
        <input
          type="text"
          id="phoneNumber"
          value={phone_number}
          onChange={(event) => setPhoneNumber(event.target.value)}
        />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
      </div>
      <button type="submit">Register</button>
    </form>
  );
};

export default Register;