import { useSelector } from "react-redux";
import Event from "../components/Event";

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
