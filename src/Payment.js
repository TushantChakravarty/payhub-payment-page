import React, { useEffect, useState } from "react";
import { PaymentModal } from "./modals/payment.modal";
import { RedirectModal } from "./modals/redirect.modal";
import { QrcodeModal } from "./modals/qrcode.modal";
import { Button } from "@mui/joy";
import alertIcon from "./alert.png";

export default function Payments() {
  const [open, setOpen] = React.useState(false);
  const [openConfirm, setConfirm] = React.useState(false);
  const [enableQr, setEnableQr] = useState(false);
  const [openQr, setOpenQr] = useState(false);
  const [qrcode, setQrcode] = useState("");
  const [gatewayData, setGatewayData] = React.useState();
  const urlParams = new URLSearchParams(window.location.search);
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
    phonepeurl: phonepe,
    paytmurl: paytm,
    gpayurl: gpay,
  };

  //"http://localhost:3000/?amount=100&email=tushant2909@gmail.com&phone=9340079982&username=tushant"
  console.log(
    "code",
    amount,
    email,
    username,
    phone,
    txId,
    redirect,
    phonepe,
    gpay,
    paytm,
    upi
  );
  console.log(amount);
  useEffect(() => {
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
        setEnableQr(true);
        const decodeUri = decodeURIComponent(qr);
        setGatewayData(decodeUri);
        setQrcode(decodeUri);

        window.location.replace(decodeUri);
      } else if (gateway == "payhubSt") {
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
  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          margin: "3rem 0",
          gap: "2rem",
        }}
      >
        <h6
          style={{
            fontFamily: "Roboto",
            fontSize: "1.25rem",
            fontStyle: "normal",
            fontWeight: "700",
            lineHeight: "1.5rem",
            letterSpacing: "0.01875rem",
            color: "#1D3A70",
            padding: "1rem 0",
          }}
        >
          Scan QR Code
        </h6>

        {/* <h1>Payhub Payments</h1> */}

        <p
          style={{
            width: "17rem",
            height: "3rem",
            textAlign: "center",
            fontFamily: "Roboto",
            fontSize: "1rem",
            fontStyle: "normal",
            fontWeight: "600",
            lineHeight: "1.5rem",
            letterSpacing: "0.01875rem",
          }}
        >
          Scan the QR code below to complete the transaction
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
          width: "100%",
          flexDirection: "column",
          height: "3rem",
          padding: "0.75rem 1.5rem",
          justifyContent: "center",
          alignItems: "center",
          gap: "0.625rem",
          flexShrink: "0",
          margin: ".69rem 0 2rem 0",
        }}
      >
        <Button
          style={{
            borderRadius: 10,
            width: "20.4375rem",
            padding: "1rem 1.5rem",
            //   backgroundColor: "#0069CA",
          }}
          onClick={() => {
            if (!enableQr) {
              setOpenQr(!openQr);
            } else {
              alert("Please wait");
            }
          }}
          size="md"
          variant="solid"
        >
          View QR Code
        </Button>

        <Button
          //   type="button"
          class="btn-outline-light m-0"
          data-dismiss="modal"
          aria-label="Close"
          onClick={() => {
            // setOpen(false)
            window.location.replace(qrcode);
          }}
          style={{
            borderRadius: 10,
            width: "20.4375rem",
            padding: "1rem 1.5rem",
          }}
          variant="outlined"
        >
          Pay
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
        <img
          src={alertIcon}
          alt="alert"
          class="img-fluid"
          style={{ height: "1.5rem", width: "1.5rem" }}
        />
        <p
          style={{
            width: "17.6875rem",
            fontFamily: "Roboto",
            fontSize: "0.75rem",
            fontStyle: "normal",
            fontWeight: "500",
            lineHeight: "1.125rem",
            letterSpacing: "0.01875rem",
            textAlign: "center",
          }}
        >
          This is a single-use code for one time payment only. Go back and retry
          in case of failure
        </p>
      </div> */}
    </div>
  );
}
