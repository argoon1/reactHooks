import React, { useEffect, useState } from "react";

const useGeolocation = (options: PositionOptions = {}) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<unknown>(null);
  const [data, setData] = useState<Partial<GeolocationCoordinates>>({
    latitude: 0,
    longitude: 0,
  });
  useEffect(() => {
    function handleSuccess(data: GeolocationPosition) {
      setData(data.coords);
      setLoading(false);
    }
    function handleFailure(e: unknown) {
      setError(e);
      setLoading(false);
    }
    navigator.geolocation.getCurrentPosition(
      handleSuccess,
      handleFailure,
      options
    );
    navigator.geolocation.watchPosition(handleSuccess, handleFailure, options);
  }, [options]);
  return { loading, error, data };
};

export default useGeolocation;
