import UserMenuSider from "../../../MainPage/ProfileMenu/UserMenuSider";
import Event from "./Event";
import { useSelector } from "react-redux";

export default function History() {
  // const historyEvents = [
  //   { title: "курнуть", description: "description", regDate: "random data" },
  //   { title: "погулять", description: "погулять", datregDatee: "random data" },
  // ];

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
