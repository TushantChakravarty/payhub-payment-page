import * as React from "react";
import Button from "@mui/joy/Button";
import Modal from "@mui/joy/Modal";

import "./payment.css";
import { QrcodeModal } from "./qrcode.modal";
import BHIMUPI from "../images/bhimupi.webp";
import { Link } from "react-router-dom";

export function PaymentModal({ open, setOpen, data }) {
  const [openOr, setOpenQr] = React.useState(false);
  const handleClose = (event, reason) => {
    if (reason && reason == "backdropClick") return;
    setOpen(false);
  };
  return (
    <Modal
      aria-labelledby="modal-title"
      aria-describedby="modal-desc"
      open={open}
      onClose={() => handleClose}
      sx={{
        display: "flex",
        flexDirection: "column",
        marginTop: 20,
        width: "100%",
      }}
    >
      <div>
        <div className="modal-dialog modal-lg">
          <div
            className="modal-content"
            style={{ borderWidth: "0px", borderRadius: "8px" }}
          >
            <div className="modal-body p-0">
              <div className="container">
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyItems: "flex-start",
                    alignItems: "flex-start",
                    padding: ".75rem",
                  }}
                >
                  <p
                    style={{
                      color: "#D4DCDF",
                      fontSize: "15px",
                      fontWeight: "bold",
                    }}
                  >
                    Select your UPI App
                  </p>
                </div>
                <div
                  className="grid-wrapper grid-col-auto wrapper"
                  style={{
                    display: "grid",
                    // placeItems: "center",
                    gridTemplateColumns: "150px 150px",
                    gridTemplateRows: "2fr",
                    marginLeft: "1.25rem",
                  }}
                >
                  <label for="radio-card-1" className="radio-card">
                    <input
                      type="radio"
                      name="radio-card"
                      id="radio-card-1"
                      onClick={() => {
                        window.location.replace(data.paytmurl);
                      }}
                    />
                    <div
                      className="card-content-wrapper"
                      style={{
                        boxShadow: "0 -16px 6px 0px rgba(0, 0, 0, 0.3)",
                      }}
                    >
                      <span className="check-icon"></span>
                      <div className="card-content text-center">
                        <img
                          src={BHIMUPI}
                          alt="PayTM"
                          className="img-fluid"
                          style={{ width: "4rem", height: "3rem" }}
                        />
                      </div>
                    </div>
                  </label>
                  <label for="radio-card-1" className="radio-card">
                    <input
                      type="radio"
                      name="radio-card"
                      id="radio-card-1"
                      onClick={() => {
                        window.location.replace(data.paytmurl);
                      }}
                    />
                    <div
                      className="card-content-wrapper"
                      style={{
                        boxShadow: "0 -16px 6px 0px rgba(0, 0, 0, 0.3)",
                      }}
                    >
                      <span className="check-icon"></span>
                      <div className="card-content text-center">
                        <img
                          src="https://telugu.economictimes.com/thumb/msid-94681942,width-540,height-405,resizemode-75/paytm-logo-94681942.jpg"
                          alt="PayTM"
                          className="img-fluid"
                          style={{ width: "4rem", height: "3rem" }}
                        />
                      </div>
                    </div>
                  </label>
                  <label for="radio-card-2" className="radio-card">
                    <input
                      type="radio"
                      name="radio-card"
                      id="radio-card-2"
                      onClick={() => {
                        window.location.replace(data.gpayurl);
                      }}
                    />
                    <div
                      className="card-content-wrapper"
                      style={{
                        boxShadow: "0 -16px 6px 0px rgba(0, 0, 0, 0.3)",
                      }}
                    >
                      <span className="check-icon"></span>
                      <div className="card-content text-center">
                        <img
                          src="https://images.cnbctv18.com/wp-content/uploads/2019/06/Google-Pay-Tez-728x573.jpeg?impolicy=website&width=617&height=264"
                          alt="Gpay"
                          className="img-fluid"
                          style={{ width: "4rem", height: "3rem" }}
                        />
                      </div>
                    </div>
                  </label>
                  <label
                    for="radio-card-3"
                    className="radio-card"
                    onClick={() => {
                      window.location.replace(data.phonepeurl);
                    }}
                  >
                    <input
                      type="radio"
                      name="radio-card"
                      id="radio-card-2"
                      onClick={() => {
                        window.location.replace(data.phonepeurl);
                      }}
                    />
                    <div
                      className="card-content-wrapper"
                      style={{
                        boxShadow: "0 -16px 6px 0px rgba(0, 0, 0, 0.3)",
                      }}
                    >
                      <span className="check-icon"></span>
                      <div className="card-content text-center">
                        <img
                          src="https://akm-img-a-in.tosshub.com/businesstoday/images/story/202102/phonepe_660_050221042103.jpg?size=1200:675"
                          alt="PhonePe"
                          className="img-fluid"
                          style={{ width: "4rem", height: "3rem" }}
                        />
                      </div>
                    </div>
                  </label>

                  {/* <label for="radio-card-5" className="radio-card">
                      <input type="radio" name="radio-card" id="radio-card-5" />
                      <div className="card-content-wrapper">
                        <span className="check-icon"></span>
                        <div className="card-content text-center">
                          <img src="https://cdn-icons-png.flaticon.com/512/2175/2175515.png"
                            className="img-fluid" />
                          <h4>Others</h4>
                        </div>
                      </div>
                    </label> */}
                </div>
              </div>
            </div>
            <div
              className="modal-footer justify-content-end p-0 mt-3 buttonContainer"
              style={{
                display: "flex",
                justifyContent: "space-around",
                flexDirection: "column-reverse",
                gap: "1rem",
                alignItems: "center",
                margin: "1rem",
                padding: ".5rem",
                border: "none",
              }}
            >
              <Button
                type="button"
                className="btn-outline-light m-0 button"
                data-dismiss="modal"
                aria-label="Close"
                onClick={() => {
                  setOpen(false);
                }}
                size="md"
                variant="outlined"
                style={{
                  borderRadius: 10,
                  // width: "20.4375rem",
                  width: "100%",
                  padding: ".75rem 1rem",
                  border: "1px solid #6099C4",
                }}
              >
                <p
                  style={{
                    textAlign: "center",
                    margin: "0",
                    textTransform: "uppercase",
                    color: "#6099C4",
                  }}
                >
                  other upi apps
                </p>
              </Button>
            </div>
          </div>
        </div>
        {/* <QrcodeModal
          open={openOr}
          setOpen={setOpenQr}
          data={data ? data?.upiUrl : ""}
        /> */}
      </div>
    </Modal>
  );
}
/**
 * 
 * 
 *  <Button variant="outlined" color="neutral" onClick={() => {
                            window.location.replace(data.paytmurl)

                        }}>
                            PayTM
                        </Button>
                        <Button variant="outlined" color="neutral" onClick={() => {
                            window.location.replace(data.phonepeurl)

                        }}>
                            PhonePe
                        </Button>
                        <Button variant="outlined" color="neutral" onClick={() => {
                            window.location.replace(data.gpayurl)

                        }}>
                            Gpay
                        </Button>
 */
