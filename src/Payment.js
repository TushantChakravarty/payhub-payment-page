import React, { useEffect, useState } from "react";
import { PaymentModal } from "./modals/payment.modal";
import { RedirectModal } from "./modals/redirect.modal";
import { QrcodeModal } from "./modals/qrcode.modal";
import { Box, Button, Divider } from "@mui/joy";
import alertIcon from "./alert.png";
import { checkPageExpiry } from "./paymentController";
import { Router, useNavigate } from "react-router-dom";
import googlePay from "./images/google-pay.png";
import payTm from "./images/paytm.png";
import phonePe from "./images/PhonePe-Logo.png";
import payHub from "./images/payhub-black-transformed.png";
const initialPaymentTimeout = 15 * 60; // 15 minutes in seconds

const features = [
  { id: 1, desc: "OPEN YOUR PAYMENT APP" },
  { id: 2, desc: "SCAN THIS QR CODE" },
  { id: 3, desc: "VERIFY THE PAYMENT DETAILS" },
  { id: 4, desc: "CONFIRM THE TRANSACTION" },
];

const payMethods = [
  { id: 1, icon: googlePay },
  { id: 2, icon: payTm },
  { id: 3, icon: phonePe },
];

export default function Payments() {
  const [open, setOpen] = React.useState(false);
  const [openConfirm, setConfirm] = React.useState(false);
  const [enableQr, setEnableQr] = useState(false);
  const [openQr, setOpenQr] = useState(true);
  const [qrcode, setQrcode] = useState("");
  const [gatewayData, setGatewayData] = React.useState();
  const urlParams = new URLSearchParams(window.location.search);
  const navigate = useNavigate();
  const [paymentTimeOut, setPaymentTimeOut] = useState(initialPaymentTimeout);

  let amount = urlParams.get("amount");
  let email = urlParams.get("email");
  let username = urlParams.get("username");
  let phone = urlParams.get("phone");
  let txId = urlParams.get("txid");
  let gateway = urlParams.get("gateway");
  let qr = urlParams.get("qr");
  let phonepe = urlParams.get("phonepe");
  let gpay = urlParams.get("gpay");
  let paytm = urlParams.get("paytm");
  let upi = urlParams.get("upi");
  let token = urlParams.get("token");

  let redirect = urlParams.get("url");
  console.log("platform is: ", window?.navigator?.platform);

  let data = {
    amount: amount,
    emailId: email,
    username: username,
    phone: phone,
    txId: txId,
  };
  const upiData = {
    phonepeurl: decodeURIComponent(phonepe),
    paytmurl: paytm,
    gpayurl: gpay,
  };
  console.log(token);
  useEffect(() => {
    checkPageExpiry(token)
      .then((response) => {
        if (response.responseCode !== 200) {
          // navigate("/expired");
          // return alert("Link Expired");
        }
      })
      .catch((error) => {
        // navigate('/expired')
        console.log("error", error);
      });
    if (data.amount != null) {
      if (gateway == "payhubb") {
        // processPayinRequestBazorpay(data)
        // .then((response)=>{
        //     console.log(response)
        //     if(response.success)
        //     {
        //         console.log(response)
        if (window?.navigator?.platform == "iPhone") {
          setGatewayData(upiData);
          setQrcode(upi);
          setEnableQr(true);
          setOpen(true);
        } else {
          setEnableQr(true);
          setGatewayData(upi);
          setQrcode(upi);
          window.location.replace(upi);
        }
      }
      // })
      else if (gateway == "payhubp") {
        console.log(qr);
        setEnableQr(true);
        setGatewayData(qr);
        setQrcode(qr);

        window.location.replace(qr);
      } else if (gateway == "payhubA") {
        if (window?.navigator?.platform == "iPhone") {
          setGatewayData(upiData);
          setQrcode(upi);
          setEnableQr(true);
          setOpen(true);
          return;
        }
        setEnableQr(true);
        const decodeUri = decodeURIComponent(qr);
        setGatewayData(decodeUri);
        setQrcode(decodeUri);

        window.location.replace(decodeUri);
      } else if (gateway == "payhubi") {
        console.log(qr);
        setEnableQr(true);

        const decodeUri = decodeURIComponent(qr);
        console.log(decodeUri);
        window.location.replace(decodeUri);
      } else if (gateway == "payhubpt") {
        if (window?.navigator?.platform == "iPhone") {
          setGatewayData(upiData);
          setQrcode(upi);
          setEnableQr(true);
          setOpen(true);
          return;
        }
        setEnableQr(true);
        const decodeUri = decodeURIComponent(qr);
        setGatewayData(decodeUri);
        setQrcode(decodeUri);

        window.location.replace(decodeUri);
      } else if (gateway == "payhubSt") {
        if (window?.navigator?.platform == "iPhone") {
          setGatewayData(upiData);
          setQrcode(upi);
          setEnableQr(true);
          setOpen(true);
          return;
        }
        setEnableQr(true);
        const decodeUri = decodeURIComponent(qr);
        setGatewayData(decodeUri);
        setQrcode(decodeUri);

        window.location.replace(decodeUri);
      }
    }
    const handleLocationChange = () => {
      // This function will be called whenever the URL changes.
      // You can perform actions or trigger functions here.
      console.log("URL changed:", window.location.href);
      if (redirect != null) {
        setConfirm(true);
      }
    };

    // Add an event listener to listen for the 'popstate' event, which is triggered
    // when the browser's back/forward buttons are used or when history.pushState()
    // or history.replaceState() is called.
    window.addEventListener("visibilitychange", handleLocationChange);

    // Clean up the event listener when the component is unmounted.
    return () => {
      window.removeEventListener("popstate", handleLocationChange);
    };
  }, []);

  const formatTime = (timeInSeconds) => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = timeInSeconds % 60;
    return `${minutes} mins and ${seconds} secs`;
  };



  useEffect(() => {
    const timer = setTimeout(() => {
      if (paymentTimeOut > 0) setPaymentTimeOut(paymentTimeOut - 1);
    }, 1000); // 1000 milliseconds = 1 second

    return () => {
      clearTimeout(timer);
    }; // return with cleanup function
  }, [paymentTimeOut]);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: "0rem",
      }}
    >
      <div
        style={{
          padding: "2rem 1rem",
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
        }}
      >
        <div
          style={{
            position: "relative",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <p
            style={{
              position: "absolute",
              fontSize: "8px",
              fontWeight: "bold",
              top: "-0.75rem",
              left: "7rem",
            }}
          >
            Powered by PayHub
          </p>
          <img
            src={payHub}
            alt="brand"
            style={{
              width: "10rem",
            }}
          />
        </div>
        <Divider sx={{ height: ".25rem", width: "380px" }} />
      </div>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          padding: "0 1rem",
          gap: "1rem",
        }}
      >
        {features.map((item, index) => {
          return (
            <div
              key={index}
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                position: "relative",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "1rem",
                }}
              >
                <div
                  style={{
                    display: "flex",

                    justifyContent: "center",
                    alignItems: "center",
                    width: "30px",
                    height: "30px",
                    border: "1px solid #000",
                    borderRadius: "50%",
                    background: "#000",
                  }}
                >
                  <p
                    style={{
                      color: "#ffffff",
                      alignSelf: "center",
                      fontSize: "14px",
                      margin: "0",
                    }}
                  >
                    {item.id}
                  </p>
                </div>
                <p
                  style={{
                    fontSize: "10px",
                    fontStyle: "normal",
                    width: "5rem",
                    height: "2rem",
                    color: "#555555",
                    fontWeight: "bold",
                  }}
                >
                  {item.desc}
                </p>
              </div>
              {features.length - 1 > index && (
                <div
                  style={{
                    position: "absolute",
                    width: "4rem",
                    height: "6px",
                    left: "3rem",
                    top: "1rem",
                  }}
                >
                  {" "}
                  <Divider
                    style={{
                      width: "6rem",
                      background: "#E3E3E3",
                      zIndex: -1,
                    }}
                  />
                </div>
              )}
            </div>
          );
        })}
      </div>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: ".5rem",
          margin: "1.5rem 0",
        }}
      >
        <p style={{ fontSize: "22px", fontWeight: "600" }}>
          Checking the payment status...
        </p>
        <p style={{ fontSize: "22px", fontWeight: "600", color: "#39A454" }}>
        {formatTime(paymentTimeOut)}
        </p>
      </div>

      <PaymentModal open={open} setOpen={setOpen} data={gatewayData} />
      <RedirectModal open={openConfirm} setOpen={setConfirm} data={redirect} />

      <div>
        <QrcodeModal open={openQr} setOpen={setOpenQr} data={qrcode} />
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "1rem",
        }}
      >
        {payMethods.map((image) => {
          return (
            <div key={image.id}>
              <img
                src={image.icon}
                alt="payment method"
                style={{ width: "6rem" }}
              />
            </div>
          );
        })}
      </div>

      <div
      // style={{
      //   display: "flex",
      //   width: "100%",
      //   flexDirection: "column",
      //   height: "3rem",
      //   padding: "0.75rem 1.5rem",
      //   justifyContent: "center",
      //   alignItems: "center",
      //   gap: "0.625rem",
      //   flexShrink: "0",
      //   margin: ".69rem 0 2rem 0",
      // }}
      >
        <Button
          //   type="button"
          className="btn-outline-light m-0"
          data-dismiss="modal"
          aria-label="Close"
          onClick={() => {
            // setOpen(false)
            if (window?.navigator?.platform == "iPhone") {
              setGatewayData(upiData);
              setQrcode(upi);
              setEnableQr(true);
              setOpen(true);
              return
            }
            window.location.replace(qrcode);
          }}
          style={{
            borderRadius: 10,
            width: "16.75rem",
            padding: ".75rem",
            fontFamily: "Open Sans",
            backgroundColor: "#4286F5",
          }}
          variant="solid"
        >
          <p
            style={{
              fontSize: "1.25rem",
              margin: "0",
              fontWeight: "bold",
            }}
          >
            PAY
          </p>
        </Button>
      </div>

      {/* <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          margin: "1rem 0",
          gap: "1.5rem",
        }}
      >
        <p
          style={{
            width: "17.6875rem",
            fontFamily: "Open Sans",
            fontSize: "0.75rem",
            fontStyle: "normal",
            fontWeight: "500",
            lineHeight: "1.125rem",
            letterSpacing: "0.01875rem",
            textAlign: "center",
            color: "#1D3A70",
          }}
        >
          This is a single-use code for one time payment only. Go back and retry
          in case of failure
        </p>
      </div> */}
    </div>
  );
}
