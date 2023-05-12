import { ConnectWallet, Web3Button } from "@thirdweb-dev/react";
import { NFT1155_ADDRESS } from "../const/addresses"
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <ConnectWallet />
        <Web3Button
          contractAddress={NFT1155_ADDRESS}
          action={(contractInstance) => contractInstance.erc1155.claim(0, 1)}
          onSuccess={() => alert("NFT Claimed!")}
        >
          Claim NFT
        </Web3Button>
      </main>
    </div>
  );
}
