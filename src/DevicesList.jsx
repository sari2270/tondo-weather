import React from "react";
import { Link } from "react-router-dom";

const DevicesList = ({ selectedDevices }) => {
  return (
    <div className="row">
      <div className="col-sm-12 col-md-8 mx-auto text-center mt-5 text-info">
        <h1>Weather Devices</h1>
        <div className="border-bottom pb-3 text-secondary fw-light">
          Showing {selectedDevices.length} results
        </div>
        <ul className="list-group list-group-flush">
          {selectedDevices.map((d, index) => (
            <Link
              key={index}
              to={`device/${d.macAddress}/${d.info.name}`}
              className="list-group-item border-bottom text-info fs-5"
            >
              {d.info.name}, {d.info.location}
            </Link>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default DevicesList;
