"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { setCookie } from "@/app/lib/actions";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [messages, setMessages] = useState([]);

  const router = useRouter();

  function onChangeEmail(e) {
    setEmail(e.target.value);
  }
  function onChangePassword(e) {
    setPassword(e.target.value);
  }

  async function onSubmitLogin(e) {
    e.preventDefault();

    const user = {
      user: {
        email: email,
        password: password
      }
    }

    const res = await fetch("http://localhost:3000/api/users/login", {
      method: "POST",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify(user)
    });

    const data = await res.json();
    if (res.ok) {
      await setCookie("username", data.user.username);
      await setCookie("token", data.user.token);
      router.push("/");
    } else {
      setMessages(data.errors);
    }
  }

  return (
    <div className="auth-page">
      <div className="container page">
        <div className="row">
          <div className="col-md-6 offset-md-3 col-xs-12">
            <h1 className="text-xs-center">Sign in</h1>
            <p className="text-xs-center">
              <Link href="/register">Need an account?</Link>
            </p>

            <ul className="error-messages">
              {messages.map((message, index) => {
                return <li key={index}>{message}</li>
              })}
            </ul>

            <form onSubmit={onSubmitLogin}>
              <fieldset className="form-group">
                <input className="form-control form-control-lg" type="text" placeholder="Email" onChange={onChangeEmail} value={email} />
              </fieldset>
              <fieldset className="form-group">
                <input className="form-control form-control-lg" type="password" placeholder="Password" onChange={onChangePassword} value={password} />
              </fieldset>
              <button className="btn btn-lg btn-primary pull-xs-right">Sign in</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}