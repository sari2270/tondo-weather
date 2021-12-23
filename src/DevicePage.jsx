import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import DeviceListItem from "./DeviceListItem";
import PageNotFound from "./PageNotFound";
import config from "./config.json";
import keysMap from "./keysMap.json";
import BackBtn from "./BackBtn";
import Loading from "./Loading";

import axios from "axios";
import DataCol from "./DataCol";

const { API_KEY, APPLICATION_KEY } = config;

const DevicePage = () => {
  const { macAddress, deviceName } = useParams();
  const url = `https://rt.ambientweather.net/v1/devices/${macAddress}?apiKey=${API_KEY}&applicationKey=${APPLICATION_KEY}&endDate=&limit=1`;

  const [deviceData, setDeviceData] = useState({});
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchDeviceDataHandler = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const response = await axios(url);
        const data = response.data[0];

        // Replace labels in the original keys
        const mappedData = Object.keys(data).reduce((obj, k) => {
          const key = keysMap[k] ? keysMap[k] : k;
          return Object.assign(obj, { [key]: data[k] });
        }, {});

        setDeviceData(mappedData);
      } catch (error) {
        setError(true);
      }
      setIsLoading(false);
    };
    fetchDeviceDataHandler();
  }, [macAddress, url]);
  const dataMid = Math.ceil(Object.keys(deviceData).length / 2);

  const generateCol = (...sliceParams) => {
    return Object.keys(deviceData)
      .slice(...sliceParams)
      .map((k, index) => (
        <DeviceListItem key={index} k={k} deviceData={deviceData} />
      ));
  };
  const col1 = generateCol(0, dataMid);
  const col2 = generateCol(dataMid);

  if (error) return <PageNotFound />;
  if (isLoading) return <Loading />;

  return (
    <div className="vh-100">
      <div className="h-25 w-100 d-inline-block bg-info text-white text-center">
        <h1 className="mt-5 pt-3">{deviceName}</h1>
      </div>
      <div className="container">
        <BackBtn />
        <div className="row">
          <DataCol>{col1}</DataCol>
          <DataCol>{col2}</DataCol>
        </div>
      </div>
      {!!Object.keys(deviceData).length && <BackBtn />}
    </div>
  );
};

export default DevicePage;
