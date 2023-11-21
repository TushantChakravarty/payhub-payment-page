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
        <div class="modal-dialog modal-lg">
          <div class="modal-content">
            <div class="modal-body p-0">
              <div class="container">
                <div class="grid-wrapper grid-col-auto">
                  {/* <label for="radio-card-1" class="radio-card">
                      <input type="radio" name="radio-card" id="radio-card-1"   onClick={()=>{
                                                    window.location.replace(data.paytmurl)

                    }}/>
                      <div class="card-content-wrapper" >
                        <span class="check-icon"></span>
                        <div class="card-content text-center">
                          <img src="https://telugu.economictimes.com/thumb/msid-94681942,width-540,height-405,resizemode-75/paytm-logo-94681942.jpg"
                            class="img-fluid" />
                          <h4>PayTM</h4>
                        </div>
                      </div>
                    </label> */}
                  {/* <label for="radio-card-2" class="radio-card">
                      <input type="radio" name="radio-card" id="radio-card-2"  onClick={()=>{
                                                   window.location.replace(data.gpayurl)

                    }} />
                      <div class="card-content-wrapper">
                        <span class="check-icon"></span>
                        <div class="card-content text-center">
                          <img src="https://images.cnbctv18.com/wp-content/uploads/2019/06/Google-Pay-Tez-728x573.jpeg?impolicy=website&width=617&height=264"
                            class="img-fluid" />
                          <h4>Gpay</h4>
                        </div>
                      </div>
                    </label> */}
                  <label for="radio-card-3" class="radio-card">
                    <input
                      type="radio"
                      name="radio-card"
                      id="radio-card-3"
                      onClick={() => {
                        //   window.location.href(data)
                      }}
                    />
                    <div class="card-content-wrapper">
                      <span class="check-icon"></span>
                      <div class="card-content text-center">
                        {/* <img src="https://akm-img-a-in.tosshub.com/businesstoday/images/story/202102/phonepe_660_050221042103.jpg?size=1200:675"
                            class="img-fluid" /> */}
                        <h4>Please confirm after doing the transaction </h4>
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
            <div class="modal-footer justify-content-end p-0 mt-3">
              <button
                type="button"
                class="btn-outline-light m-0"
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
                class="btn-outline-primary m-0"
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
