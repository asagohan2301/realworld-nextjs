"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function Register() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [messages, setMessages] = useState([]);

  const router = useRouter();

  function onChangeUsername(e) {
    setUsername(e.target.value);
  }
  function onChangeEmail(e) {
    setEmail(e.target.value);
  }
  function onChangePassword(e) {
    setPassword(e.target.value);
  }

  async function onSubmitRegister(e) {
    e.preventDefault();

    const user = {
      user: {
        username: username,
        email: email,
        password: password
      }
    }

    const res = await fetch("http://localhost:3000/api/users", {
      method: "POST",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify(user)
    });

    const data = await res.json();
    if (res.ok) {
      router.push("/login");
    } else {
      setMessages(data.errors);
    }
  }

  return (
    <div className="auth-page">
      <div className="container page">
        <div className="row">
          <div className="col-md-6 offset-md-3 col-xs-12">
            <h1 className="text-xs-center">Sign up</h1>
            <p className="text-xs-center">
              <Link href="/login">Have an account?</Link>
            </p>

            <ul className="error-messages">
              {messages.map((message, index) => {
                return <li key={index}>{message}</li>
              })}
            </ul>

            <form onSubmit={onSubmitRegister}>
              <fieldset className="form-group">
                <input className="form-control form-control-lg" type="text" placeholder="Username" onChange={onChangeUsername} value={username} />
              </fieldset>
              <fieldset className="form-group">
                <input className="form-control form-control-lg" type="text" placeholder="Email" onChange={onChangeEmail} value={email} />
              </fieldset>
              <fieldset className="form-group">
                <input className="form-control form-control-lg" type="password" placeholder="Password" onChange={onChangePassword} value={password} />
              </fieldset>
              <button className="btn btn-lg btn-primary pull-xs-right">Sign up</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}