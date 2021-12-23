import { useEffect, useState } from "react";
import axios from "axios";
import DevicesList from "./DevicesList";
import config from "./config.json";
import Loading from "./Loading";
import PageNotFound from "./PageNotFound";

const { API_KEY, APPLICATION_KEY } = config;

const HomePage = () => {
  const url = `https://rt.ambientweather.net/v1/devices?applicationKey=${APPLICATION_KEY}&apiKey=${API_KEY}`;

  const [enteredDevice, setEnteredDevice] = useState("");
  const [devices, setDevices] = useState([]);
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const selectedDevices = devices.filter((device) =>
    device.info.name.toLowerCase().includes(enteredDevice.toLowerCase())
  );
  useEffect(() => {
    const fetchDevicesHandler = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const response = await axios(url);
        setDevices(response.data);
      } catch (error) {
        setError(true);
      }
      setIsLoading(false);
    };
    fetchDevicesHandler();
  }, []);

  const changeDeviceHandler = ({ target: { value } }) => {
    setEnteredDevice(value);
  };

  if (error) return <PageNotFound />;
  if (isLoading) return <Loading />;

  return (
    <>
      <div className="row">
        <div className="col-11 col-md-6 card bg-info mx-auto p-5 mt-5 rounded-pill">
          <input
            type="text"
            className="form-control m-4 mx-auto rounded-pill"
            placeholder="Search by a device name..."
            aria-label="Example text with button addon"
            aria-describedby="button-addon1"
            onChange={changeDeviceHandler}
          />
        </div>
      </div>
      <DevicesList selectedDevices={selectedDevices} />
    </>
  );
};

export default HomePage;
