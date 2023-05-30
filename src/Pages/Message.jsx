import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";

const Message = () => {
  const [message, setMessage] = useState({
    name: "",
    message: "",
  });
  const [statusText, setStatusText] = useState("");

  const handleChange = (e) => {
    setMessage((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async () => {
    setStatusText("sending");
    try {
      await axios.post("http://localhost:8800/messages", message);
      setStatusText("success");
      setMessage({
        name: "",
        message: "",
      });
    } catch (err) {
      console.log(err);
      setStatusText("failed");
    }
  };

  return (
    <section className="message-section">
      <Link to="/welcome">⏎ Welcome page</Link>
      <form action="post" className="form">
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          name="name"
          value={message.name}
          required
          onChange={handleChange}
        />
        <label htmlFor="message">Message:</label>
        <input
          type="text"
          name="message"
          value={message.message}
          required
          onChange={handleChange}
        />
        <button
          disabled={
            statusText === "sending" ||
            message.name === "" ||
            message.message === ""
          }
          onClick={handleSubmit}
        >
          Post
        </button>
        <span className={`${statusText}`}>{statusText}</span>
      </form>
    </section>
  );
};

export default Message;
