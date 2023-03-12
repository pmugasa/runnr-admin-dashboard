import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import {
  faInbox,
  faBoxesPacking,
  faReceipt,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";

function Sidebar() {
  return (
    <>
      <nav className=" h-16 p-4 border-2 border-gray-600 fixed w-full bottom-0 overflow-hidden">
        <div className="flex justify-around ">
          <Link to="/received-parcels">
            <FontAwesomeIcon icon={faInbox} size="xl" />
          </Link>
          <Link to="/packing-requests">
            <FontAwesomeIcon icon={faBoxesPacking} size="xl" />
          </Link>
          <Link to="/orders">
            <FontAwesomeIcon icon={faReceipt} size="xl" />
          </Link>
          <Link to="/users">
            <FontAwesomeIcon icon={faUsers} size="xl" />
          </Link>
        </div>
      </nav>
    </>
  );
}
export default Sidebar;
