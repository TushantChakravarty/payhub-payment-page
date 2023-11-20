import React, { useEffect, useState } from 'react'
import { pinwalletPayin, processPayinRequestBazorpay } from './paymentController';
import { PaymentModal } from './modals/payment.modal';
import { RedirectModal } from './modals/redirect.modal';
import { QrcodeModal } from './modals/qrcode.modal';
import { Button } from '@mui/joy';

export default function Payments() {
    const [open, setOpen] = React.useState(false)
    const [openConfirm, setConfirm] = React.useState(false)
    const[enableQr, setEnableQr] = useState(false)
    const[openQr, setOpenQr] = useState(false)
    const[qrcode, setQrcode] = useState('')
    const[ gatewayData, setGatewayData] = React.useState()
    const urlParams = new URLSearchParams(window.location.search);
let amount = urlParams.get('amount');
let email = urlParams.get('email');
let username = urlParams.get('username');
let phone = urlParams.get('phone');
let txId = urlParams.get('txid');
let gateway = urlParams.get('gateway');
let qr = urlParams.get('qr');
let phonepe = urlParams.get('phonepe');
let gpay = urlParams.get('gpay');
let paytm = urlParams.get('paytm');
let upi = urlParams.get('upi');

let redirect =urlParams.get('url');
console.log("platform is: ", window?.navigator?.platform)

let data ={
    amount:amount,
    emailId:email,
    username:username,
    phone:phone,
    txId:txId
}
const upiData={
    phonepeurl:phonepe,
    paytmurl:paytm,
    gpayurl:gpay
}

//"http://localhost:3000/?amount=100&email=tushant2909@gmail.com&phone=9340079982&username=tushant"
console.log('code',amount,email,username,phone,txId,redirect,phonepe,gpay,paytm,upi)
console.log(amount)
useEffect(()=>{
    if(data.amount!=null)
    {
        if(gateway=='payhubb')
        {

            // processPayinRequestBazorpay(data)
            // .then((response)=>{
            //     console.log(response)
            //     if(response.success)
            //     {
            //         console.log(response)
                    if (window?.navigator?.platform == "iPhone")
                    {
                        setGatewayData(upiData)
                        setQrcode(upi)
                        setEnableQr(true)
                        setOpen(true)
                    }else{
                        setEnableQr(true)
                        setGatewayData(upi)
                        setQrcode(upi)
                        window.location.replace(upi)
                    }
                }
            // })
        else if(gateway=='payhubp')
        {
            console.log(qr)
            setEnableQr(true)
            setGatewayData(qr)
            setQrcode(qr)

            window.location.replace(qr)
          
        }
        else if(gateway=='payhubA')
        {
            setEnableQr(true)
            const decodeUri = decodeURIComponent(qr)
            setGatewayData(decodeUri)
            setQrcode(decodeUri)

            window.location.replace(decodeUri)
           
        }
        else if(gateway=='payhubi')
        {
            console.log(qr)
            setEnableQr(true)

            const decodeUri = decodeURIComponent(qr)
            console.log(decodeUri)
            window.location.replace(decodeUri)
          
        }
        else if(gateway=='payhubpt')
        {
            setEnableQr(true)
            const decodeUri = decodeURIComponent(qr)
            setGatewayData(decodeUri)
            setQrcode(decodeUri)

            window.location.replace(decodeUri)
           
        }
        else if(gateway=='payhubSt')
        {
            setEnableQr(true)
            const decodeUri = decodeURIComponent(qr)
            setGatewayData(decodeUri)
            setQrcode(decodeUri)

            window.location.replace(decodeUri)
           
        }
    }
    const handleLocationChange = () => {
        // This function will be called whenever the URL changes.
        // You can perform actions or trigger functions here.
        console.log('URL changed:', window.location.href);
        if(redirect!=null)
        {
            setConfirm(true)
        }
      };
  
      // Add an event listener to listen for the 'popstate' event, which is triggered
      // when the browser's back/forward buttons are used or when history.pushState()
      // or history.replaceState() is called.
      window.addEventListener("visibilitychange", handleLocationChange);
  
      // Clean up the event listener when the component is unmounted.
      return () => {
        window.removeEventListener('popstate', handleLocationChange);
      };
},[])
    return (
        <div>
            <h1>Payhub Payments</h1>
            <h3>please wait while we are loading page</h3>
            <Button style={{
                borderRadius:10,
                backgroundColor:'green'
            }} onClick={()=>{
                if(enableQr==true)
                {
                    setOpenQr(true)
                }else{
                    alert('Please wait')
                }
            }}>Show Qr Code</Button>
            <PaymentModal open={open} setOpen={setOpen} data={gatewayData}/>
            <RedirectModal open={openConfirm} setOpen={setConfirm} data={redirect}/>
            <QrcodeModal open={openQr} setOpen={setOpenQr} data={qrcode}/>
        </div>
    )
}