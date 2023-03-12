import { Routes, Route, useNavigate, useMatch } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import ReceivedParcels from "./pages/ReceivedParcels";
import PackingRequests from "./pages/PackingRequests";
import Orders from "./pages/Orders";
import Users from "./pages/Users";
import ReceivedItemDetails from "./components/ReceivedItemDetails";

function App() {
  //match received item
  const matchReceivedItem = useMatch("/received-parcels/:id");

  //renderd the item that matches
  const receivedItem = matchReceivedItem
    ? ReceivedParcels.find(
        (item) => item.trackingNumber === matchReceivedItem.params
      )
    : null;
  return (
    <>
      <main>
        <Routes>
          <Route path="/received-parcels" element={<ReceivedParcels />} />
          <Route
            path="/received-parcels/:id"
            element={<ReceivedItemDetails />}
          />
          <Route path="/packing-requests" element={<PackingRequests />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/users" element={<Users />} />
        </Routes>
      </main>
      <div>
        <Sidebar />
      </div>
    </>
  );
}

export default App;
