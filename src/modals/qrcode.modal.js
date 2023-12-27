import * as React from "react";
import { QRCodeSVG } from "qrcode.react";
import "./payment.css";
export function QrcodeModal({ open, setOpen, data }) {
  //   const [open, setOpen] = React.useState(false);
  const handleClose = (event, reason) => {
    if (reason && reason == "backdropClick") return;
    setOpen(false);
  };
  return (
    <div
      aria-labelledby="modal-title"
      aria-describedby="modal-desc"
      // open={open}
      onClose={() => handleClose}
      style={{
        display: "flex",
        marginTop: "-3rem",
        justifyContent: "center",
      }}
    >
      <div>
        <div className="modal-dialog ">
          <div className="modal-content" style={{ border: "none" }}>
            <div className="modal-body p-0">
              <div className="container">
                <div className="grid-wrapper grid-col-auto">
                  {/* <label for="radio-card-1" className="radio-card">
                      <input type="radio" name="radio-card" id="radio-card-1"   onClick={()=>{
                                                    window.location.replace(data.paytmurl)

                    }}/>
                      <div className="card-content-wrapper" >
                        <span className="check-icon"></span>
                        <div className="card-content text-center">
                          <img src="https://telugu.economictimes.com/thumb/msid-94681942,width-540,height-405,resizemode-75/paytm-logo-94681942.jpg"
                            className="img-fluid" />
                          <h4>PayTM</h4>
                        </div>
                      </div>
                    </label> */}
                  {/* <label for="radio-card-2" className="radio-card">
                      <input type="radio" name="radio-card" id="radio-card-2"  onClick={()=>{
                                                   window.location.replace(data.gpayurl)

                    }} />
                      <div className="card-content-wrapper">
                        <span className="check-icon"></span>
                        <div className="card-content text-center">
                          <img src="https://images.cnbctv18.com/wp-content/uploads/2019/06/Google-Pay-Tez-728x573.jpeg?impolicy=website&width=617&height=264"
                            className="img-fluid" />
                          <h4>Gpay</h4>
                        </div>
                      </div>
                    </label> */}
                  <label for="radio-card-1" className="radio-card">
                    <input
                      type="radio"
                      name="radio-card"
                      id="radio-card-3"
                      onClick={() => {
                        //   window.location.href(data)
                      }}
                    />
                    <div className="card-content-wrapper card-content-margin">
                      <span className="check-icon"></span>
                      <div
                        style={{
                          height: "3rem",
                          position: "absolute",
                          width: "3rem",
                          borderTop: "7px solid #535353",
                          borderLeft: "7px solid #535353",
                          top: "3rem",
                          left: "4rem",
                          borderRadius: "9px",
                        }}
                      />
                      <div
                        style={{
                          height: "3rem",
                          position: "absolute",
                          width: "3rem",
                          borderBottom: "7px solid #535353",
                          borderLeft: "7px solid #535353",
                          bottom: "3rem",
                          left: "4rem",
                          borderRadius: "9px",
                        }}
                      />
                      <div
                        style={{
                          height: "3rem",
                          position: "absolute",
                          width: "3rem",
                          borderTop: "7px solid #535353",
                          borderRight: "7px solid #535353",
                          top: "3rem",
                          right: "4rem",
                          borderRadius: "9px",
                        }}
                      />
                      <div
                        style={{
                          height: "3rem",
                          position: "absolute",
                          width: "3rem",
                          borderBottom: "7px solid #535353",
                          borderRight: "7px solid #535353",
                          bottom: "3rem",
                          right: "4rem",
                          borderRadius: "9px",
                        }}
                      />
                      <div
                        className="card-content text-center"
                        style={{
                          display: "flex",
                          width: "19.0625rem",
                          // height: "20.25rem",
                          padding: "3.5625rem 2.9375rem 3.5625rem 3rem",
                          flexDirection: "column",
                          justifyContent: "center",
                          alignItems: "center",
                          flexShrink: 0,
                          boxShadow:
                            "2px 15px 25px 0px rgba(107, 114, 128, 0.06)",
                        }}
                      >
                        {/* <img src="https://akm-img-a-in.tosshub.com/businesstoday/images/story/202102/phonepe_660_050221042103.jpg?size=1200:675"
                            className="img-fluid" /> */}
                        <QRCodeSVG
                          value={data}
                          size={150}
                          style={{
                            filter: open
                              ? "blur(0)"
                              : "blur(22.299999237060547px)",
                          }}
                        />
                        {/* <h4>
                          Scan the QR code above to complete the transaction
                        </h4> */}
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
            {/* <div className="modal-footer">
            <button type="button" className="btn-outline-light m-0" data-dismiss="modal" aria-label="Close" onClick={() => {
                // setOpen(false)
                window.location.replace(data)

              }}>Pay</button>
              <button type="button" className="btn-outline-light m-0" data-dismiss="modal" aria-label="Close" onClick={() => {
                setOpen(false)
              }}>Cancel</button>

            </div> */}
          </div>
        </div>
      </div>
    </div>
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
