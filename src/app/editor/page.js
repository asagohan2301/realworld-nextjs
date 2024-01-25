"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { getCookieValue } from "../lib/actions";

export default function Editor() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [body, setBody] = useState("");
  const [tagList, setTagList] = useState([]);
  const [messages, setMessages] = useState([]);

  const router = useRouter();

  async function onSubmitCreateArticle(e) {
    e.preventDefault();

    const article = {
      article: {
        title: title,
        description: description,
        body: body,
        tag_list: tagList.split(" ")
      }
    }

    const token = await getCookieValue("token");
    const res = await fetch("http://localhost:3000/api/articles", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
        "Authorization": `Bearer ${token}`,
      },
      body: JSON.stringify(article)
    });

    const data = await res.json();
    if (res.ok) {
      router.push(`/article/${data.article.slug}`)
    } else {
      setMessages(data.errors);
    }

  }

  return (
    <div className="editor-page">
      <div className="container page">
        <div className="row">
          <div className="col-md-10 offset-md-1 col-xs-12">
            <ul className="error-messages">
              {messages.map((message, index) => {
                return <li key={index}>{message}</li>
              })}
            </ul>

            <form onSubmit={onSubmitCreateArticle}>
              <fieldset>
                <fieldset className="form-group">
                  <input type="text" className="form-control form-control-lg" placeholder="Article Title" onChange={(e) => { setTitle(e.target.value) }} />
                </fieldset>
                <fieldset className="form-group">
                  <input type="text" className="form-control" placeholder="What's this article about?" onChange={(e) => { setDescription(e.target.value) }} />
                </fieldset>
                <fieldset className="form-group">
                  <textarea
                    className="form-control"
                    rows="8"
                    placeholder="Write your article (in markdown)"
                    onChange={(e) => { setBody(e.target.value) }}
                  ></textarea>
                </fieldset>
                <fieldset className="form-group">
                  <input type="text" className="form-control" placeholder="Enter tags" onChange={(e) => { setTagList(e.target.value) }} />
                  {/* <div className="tag-list">
                    <span className="tag-default tag-pill"> <i className="ion-close-round"></i> tag </span>
                  </div> */}
                </fieldset>
                <button className="btn btn-lg pull-xs-right btn-primary" type="submit">
                  Publish Article
                </button>
              </fieldset>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}