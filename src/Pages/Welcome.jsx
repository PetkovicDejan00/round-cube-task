import { Link } from "react-router-dom";
import { useMessages } from "../Hooks/useMesages";

const Welcome = () => {
  const { data, isLoading, error, isError } = useMessages();
  const messages = data?.data.length > 10 ? data?.data.slice(-10) : data?.data;

  if (isLoading) {
    return <h2>Loading...</h2>;
  }
  if (isError) {
    return <h2>{error.message}</h2>;
  }

  return (
    <section className="welcome-section">
      <h1>Guestbook</h1>
      <p className="intro">
        See what people wrote about us and feel free to leave a message.
      </p>
      <div className="msgs">
        {messages?.map((item) => {
          return (
            <div className="msg" key={item.id}>
              <p className="msg-text">{item.message}</p>
              <p className="msg-author"> - {item.name}</p>
            </div>
          );
        })}
      </div>
      <Link to="/message">Leave a message</Link>
    </section>
  );
};

export default Welcome;
