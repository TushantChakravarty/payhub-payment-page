import * as React from "react";
import Modal from "@mui/joy/Modal";
import "./payment.css";
export function RedirectModal({ open, setOpen, data }) {
  //   const [open, setOpen] = React.useState(false);
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
      sx={{ display: "flex", flexDirection: "column", marginTop: 40 }}
    >
      <div>
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
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
                  <label for="radio-card-3" className="radio-card">
                    <input
                      type="radio"
                      name="radio-card"
                      id="radio-card-3"
                      onClick={() => {
                        //   window.location.href(data)
                      }}
                    />
                    <div className="card-content-wrapper">
                      <span className="check-icon"></span>
                      <div className="card-content text-center">
                        {/* <img src="https://akm-img-a-in.tosshub.com/businesstoday/images/story/202102/phonepe_660_050221042103.jpg?size=1200:675"
                            className="img-fluid" /> */}
                        <h4>Please confirm after doing the transaction </h4>
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
            <div className="modal-footer justify-content-end p-0 mt-3">
              <button
                type="button"
                className="btn-outline-light m-0"
                data-dismiss="modal"
                aria-label="Close"
                onClick={() => {
                  setOpen(false);
                }}
              >
                Cancel
              </button>
              <button
                type="button"
                className="btn-outline-primary m-0"
                data-dismiss="modal"
                aria-label="Close"
                onClick={() => {
                  console.log(data);
                  window.location.assign(data);
                }}
              >
                Confirm
              </button>
            </div>
          </div>
        </div>
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
