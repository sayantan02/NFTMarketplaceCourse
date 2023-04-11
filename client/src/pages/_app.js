import Navbar from '@/components/Navbar';
import '@/styles/globals.css'
import { useState, useEffect } from 'react'

export default function App({ Component, pageProps }) {

  const [currentAccount, setCurrentAccount] = useState();
  const [isLoading, setIsLoading] = useState(false);

  const checkIfWalletIsConnected = async () => {
    try{
      if(!ethereum) return alert("Please install Metamask.");

      const accounts = await ethereum.request({ method: "eth_accounts" });

      if (accounts.length > 0) {
        setCurrentAccount(accounts[0]);
        console.log(accounts[0]);
      } else {
        console.log("No Accounts found.");
      }

    }catch (error) {
      console.log(error);
    }

  };

  const connectWallet = async () => {
    try {
      setIsLoading(true);
      if(!ethereum) return alert("Please install Metamask.");

      const accounts = await ethereum.request({ method: "eth_requestAccounts", });

      if (accounts !== 0) {
        setCurrentAccount(accounts[0]);
        window.location.reload();

      } else {
        console.log("No authorised account found.");
      }

    } catch (error) {
      setIsLoading(false);
      console.log(error);
    }
  };


  useEffect(() => {
    checkIfWalletIsConnected();
  }, [])


  return (
    <>
    {currentAccount ? <Navbar currentAccount={currentAccount} /> : <Navbar connectAccount={connectWallet} /> }

    <Component {...pageProps} currentAccount={currentAccount} />
    </>
  )
}
