import Card from "../components/Card";
import { useState } from "react";
import ReceivedParcelsForm from "../components/ReceivedParcelForm";
import ReceivedItemCard from "../components/ReceivedItemCard";

function ReceivedParcels() {
  //received parcel state
  const [receivedParcels, setReceivedParcels] = useState([]);
  //parcel to be added state
  const [parcel, setParcel] = useState({
    lockerNumber: "",
    trackingNumber: "",
    dateReceived: "",
    weight: "",
    store: "",
    img1: "",
    img2: "",
  });

  function handleSubmit(e) {
    e.preventDefault();
    setReceivedParcels([...receivedParcels, parcel]);
    console.log("parcel", parcel);
  }
  console.log("received parcels", receivedParcels);

  return (
    <>
      <Card>
        <ReceivedParcelsForm
          parcel={parcel}
          setParcel={setParcel}
          handleSubmit={handleSubmit}
        />
      </Card>
      <Card>
        <h1>Received Parcels</h1>
        {receivedParcels.map((parcel) => (
          <ReceivedItemCard parcel={parcel} />
        ))}
      </Card>
    </>
  );
}
export default ReceivedParcels;
