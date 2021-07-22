import Event from "./Event";
import { useSelector } from "react-redux";

export default function History() {

  const currentUser = useSelector((state) => state.users.currentUser);

  return (
    <>
      <div className="container--history">
        <ul className="history">
          <Event />
        </ul>
      </div>
    </>
  );
}
