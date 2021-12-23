const DeviceListItem = ({ k, deviceData }) => {
  return (
    <li className="list-group-item">
      <span className="text-info">{k}</span>
      <span className="text-secondary float-end">{deviceData[k]}</span>
    </li>
  );
};

export default DeviceListItem;
