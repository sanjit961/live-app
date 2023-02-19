let token = "";
const apiHeader = () => {
  return {
    Authorization: "Bearer " + token,
  };
};
export default apiHeader;
