import React from "react";
import  {apiHeader}   from    "../common/apiHeader"
export const getStudentDetails = async (id) => {
  fetch("")
    .then((res) => res.json)
    .then((result) => {
      return result;
    });
};

export default apiCalls;
