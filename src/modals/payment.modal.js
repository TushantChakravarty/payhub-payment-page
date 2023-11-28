import * as React from "react";
import Button from "@mui/joy/Button";
import Modal from "@mui/joy/Modal";

import "./payment.css";
import { QrcodeModal } from "./qrcode.modal";

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
        marginTop: 40,
        width: "100%",
      }}
    >
      <div>
        <div class="modal-dialog modal-lg">
          <div
            class="modal-content"
            style={{ borderWidth: "0px", borderRadius: "8px" }}
          >
            <div class="modal-body p-0">
              <div class="container">
                <div
                  class="grid-wrapper grid-col-auto wrapper"
                  style={{
                    display: "flex",
                    justifyContent: "space-around",
                    alignItems: "center",
                  }}
                >
                  <label for="radio-card-1" class="radio-card">
                    <input
                      type="radio"
                      name="radio-card"
                      id="radio-card-1"
                      onClick={() => {
                        window.location.replace(data.paytmurl);
                      }}
                    />
                    <div class="card-content-wrapper">
                      <span class="check-icon"></span>
                      <div class="card-content text-center">
                        <img
                          src="https://telugu.economictimes.com/thumb/msid-94681942,width-540,height-405,resizemode-75/paytm-logo-94681942.jpg"
                          alt="PayTM"
                          class="img-fluid"
                          style={{ width: "4rem", height: "3rem" }}
                        />
                        <h4>PayTM</h4>
                      </div>
                    </div>
                  </label>
                  <label for="radio-card-2" class="radio-card">
                    <input
                      type="radio"
                      name="radio-card"
                      id="radio-card-2"
                      onClick={() => {
                        window.location.replace(data.gpayurl);
                      }}
                    />
                    <div class="card-content-wrapper">
                      <span class="check-icon"></span>
                      <div class="card-content text-center">
                        <img
                          src="https://images.cnbctv18.com/wp-content/uploads/2019/06/Google-Pay-Tez-728x573.jpeg?impolicy=website&width=617&height=264"
                          alt="Gpay"
                          class="img-fluid"
                          style={{ width: "4rem", height: "3rem" }}
                        />
                        <h4>Gpay</h4>
                      </div>
                    </div>
                  </label>
                  <label for="radio-card-3" class="radio-card" onClick={()=>{
                                            window.location.replace(data.phonepeurl);

                  }}>
                    <input
                      type="radio"
                      name="radio-card"
                      id="radio-card-2"
                      onClick={() => {
                        window.location.replace(data.phonepeurl);
                      }}
                    />
                    <div class="card-content-wrapper">
                      <span class="check-icon"></span>
                      <div class="card-content text-center">
                        <img
                          src="https://akm-img-a-in.tosshub.com/businesstoday/images/story/202102/phonepe_660_050221042103.jpg?size=1200:675"
                          alt="PhonePe"
                          class="img-fluid"
                          style={{ width: "4rem", height: "3rem" }}
                        />
                        <h4>PhonePe</h4>
                      </div>
                    </div>
                  </label>

                  {/* <label for="radio-card-5" class="radio-card">
                      <input type="radio" name="radio-card" id="radio-card-5" />
                      <div class="card-content-wrapper">
                        <span class="check-icon"></span>
                        <div class="card-content text-center">
                          <img src="https://cdn-icons-png.flaticon.com/512/2175/2175515.png"
                            class="img-fluid" />
                          <h4>Others</h4>
                        </div>
                      </div>
                    </label> */}
                </div>
              </div>
            </div>
            <div
              class="modal-footer justify-content-end p-0 mt-3 buttonContainer"
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
                class="btn-outline-light m-0 button"
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
                  border: "1px solid black",
                }}
              >
                <p style={{ textAlign: "center", margin: "0" }}>Cancel</p>
              </Button>
              <Button
                type="button"
                class="btn-outline-primary m-0 button"
                data-dismiss="modal"
                aria-label="Close"
                onClick={() => {
                  setOpenQr(true);
                }}
                size="md"
                variant="solid"
                style={{
                  borderRadius: 10,
                  // width: "20.4375rem",
                  width: "100%",
                  padding: ".75rem 1rem",
                  backgroundColor: "#0069CA",
                }}
              >
                <p style={{ color: "#ffff", textAlign: "center", margin: "0" }}>
                  Show QR
                </p>
              </Button>
            </div>
          </div>
        </div>
        <QrcodeModal
          open={openOr}
          setOpen={setOpenQr}
          data={data ? data?.upiUrl : ""}
        />
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
