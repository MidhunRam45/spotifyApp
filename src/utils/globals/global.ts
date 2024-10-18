export const getAccessToken = () => {
  return window.location.hash //returns the current url from #
    .substring(1) //extracts rest of the string other then #
    .split("&")
    .reduce((initial, item) => {
      const parts = item.split("=");
      initial[parts[0]] = decodeURIComponent(parts[1]);

      return initial;
    }, {});
};
