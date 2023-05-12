import { ThirdwebProvider, coinbaseWallet, localWallet, metamaskWallet, smartWallet } from "@thirdweb-dev/react";
import "../styles/globals.css";
import { FACTORY_ADDRESS, API_KEY } from "../const/addresses"

// This is the chain your dApp will work on.
// Change this to the chain your app is built for.
// You can also import additional chains from `@thirdweb-dev/chains` and pass them directly.
const activeChain = "mumbai";

function MyApp({ Component, pageProps }) {
  return (
    <ThirdwebProvider 
      activeChain={activeChain}
      supportedWallets={[
        metamaskWallet(),
        smartWallet({
          factoryAddress: FACTORY_ADDRESS,
          thirdwebApiKey: API_KEY,
          gasless: true,
          personalWallets: [
            metamaskWallet(),
            coinbaseWallet(),
            localWallet({persist: true})
          ]
        })
      ]}
    
    >
      <Component {...pageProps} />
    </ThirdwebProvider>
  );
}

export default MyApp;
