import React, { useState } from "react";
import { useSelector } from "react-redux";
import SideDetails from "./SideDetails";

const ListView = () => {
  const state = useSelector((store) => store.reducer);
  const [detailId, setDetailId] = useState(null);
  const [showDetail, setShowDetail] = useState(false);

  // detay butonuna tıklanınca çalışır
  const handleClick = (id) => {
    setDetailId(id);
    setShowDetail(true);
  };

  return (
    <div className="p-4">
      <h2>{state.flights.length} Flight Found</h2>
      <table className="table table-dark">
        <thead>
          <tr>
            <th>ID</th>
            <th>Tail Code</th>
            <th>Latitude</th>
            <th>Longitude</th>
            <th>Transactions</th>
          </tr>
        </thead>
        <tbody>
          {/* dizideki her bir obje için tablo satırı oluşturma */}
          {state.flights.map((flight) => (
            <tr key={flight.id}>
              <td>{flight.id}</td>
              <td>{flight.code}</td>
              <td>{flight.lat}</td>
              <td>{flight.lng}</td>
              <td>
                <button onClick={() => handleClick(flight.id)}>Detail</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {/* ekrana detay penceresi açma */}
      {showDetail && (
        <SideDetails detailID={detailId} setShowDetails={setShowDetail} />
      )}
    </div>
  );
};

export default ListView;
