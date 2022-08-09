import useAsync from "./useAsync";

const useFetch = (
  url: string,
  params: string[] = [],
  options: RequestInit = {}
) => {
  function getFormatedParams() {
    return "/" + params.join("/");
  }

  return useAsync(
    fetch(url + getFormatedParams(), { ...options }).then((resp) => {
      if (resp.status !== 200) throw new Error(resp.status.toString());
      return resp.json();
    })
  );
};

export default useFetch;
