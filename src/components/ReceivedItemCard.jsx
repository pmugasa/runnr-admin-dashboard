import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faWeight,
  faCalendar,
  faLocationDot,
  faShop,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
function ReceivedItemCard({ parcel }) {
  return (
    <>
      <div className="flex items-center">
        <div>
          <Link to={`/received/${parcel.trackingNumber}`}>
            <h3 className="font-bold text-primary link link-hover">
              {parcel.trackingNumber}
            </h3>
          </Link>
          <div className="flex space-x-4 mt-2">
            <p className="font-bold text-gray-400 text-sm">
              <FontAwesomeIcon icon={faUser} className="mr-2" />
              {parcel.lockerNumber}
            </p>
            <p className="font-bold text-gray-400 text-sm">
              <FontAwesomeIcon icon={faShop} className="mr-2" />
              {parcel.store}
            </p>
            <p className="font-bold text-gray-400 text-sm">
              <FontAwesomeIcon icon={faCalendar} className="mr-2" />
              {parcel.dateReceived}
            </p>
            <p className="font-bold text-gray-400 text-sm">
              <FontAwesomeIcon icon={faWeight} className="mr-2" />
              {parcel.weight}kg
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default ReceivedItemCard;
