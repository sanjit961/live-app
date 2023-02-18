import React from "react";
import NavMenu from "./NavMenu";
import styled from "styled-components";
import Footer from "./Footer";

const StyledDiv = styled.div`
  color: white;
`;
function Home() {
  return (
    <>
      <div style={{ height: "90vh" }}>
        <div className="row w-75 mt-3 mx-auto">
          <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6 col-xs-12 card m-3">
            <div className="p-2">
              <p>Japanese Lady Shoe</p>
              <img
                className="img w-100"
                src="https://fastly.picsum.photos/id/21/3008/2008.jpg?hmac=T8DSVNvP-QldCew7WD4jj_S3mWwxZPqdF0CNPksSko4"
                alt="sanjit"
              />
              <p>Price: $50</p>
              <button className="btn btn-primary">Buy now</button>
            </div>
          </div>
          <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6 col-xs-12 card m-3">
            <div className="p-2">
              <p>Japanese Lady Shoe</p>
              <img
                className="img w-100"
                src="https://fastly.picsum.photos/id/21/3008/2008.jpg?hmac=T8DSVNvP-QldCew7WD4jj_S3mWwxZPqdF0CNPksSko4"
                alt="sanjit"
              />
              <p>Price: $50</p>
              <button className="btn btn-primary">Buy now</button>
            </div>
          </div>
          <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6 col-xs-12 card m-3">
            <div className="p-2">
              <p>Japanese Lady Shoe</p>
              <img
                className="img w-100"
                src="https://fastly.picsum.photos/id/21/3008/2008.jpg?hmac=T8DSVNvP-QldCew7WD4jj_S3mWwxZPqdF0CNPksSko4"
                alt="sanjit"
              />
              <p>Price: $50</p>
              <button className="btn btn-primary">Buy now</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
