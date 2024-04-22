import React from "react";
import { MDBFooter, MDBContainer } from "mdb-react-ui-kit";

export default function Footer() {
  return (
    <div className="footer">
      <MDBFooter style={{ backgroundColor: "#FFFFFF" }}>
        <MDBContainer className="p-3">
          COPYRIGHT © 2024 Solana tweet, All rights Reserved
        </MDBContainer>
      </MDBFooter>
    </div>
  );
}
