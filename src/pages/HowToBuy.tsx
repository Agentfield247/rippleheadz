import { Button } from "@/components/ui/button";
import { Copy, ExternalLink } from "lucide-react";

const HowToBuy = () => {
  const copyAddress = () => {
    navigator.clipboard.writeText("rH3cpS9tcN9GZTwwkHFkNJD5YgAHsF9sFu");
    // You can add a toast notification here if needed
  };

  return (
    <section className="py-8 sm:py-20 px-4 bg-gradient-to-br from-ripple-sky/50 to-ripple-lightblue/30">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-foreground mb-6 sm:mb-12 lg:mb-16 text-center">
          How to Buy
        </h1>
        
        <div className="bg-white/80 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 shadow-lg">
          {/* Contract Address Section */}
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-foreground mb-3 sm:mb-4">
              How to purchase RIPPLEHEADZ ($HEADZ)
            </h2>
            <div className="bg-gray-100 rounded-lg p-3 sm:p-4 mb-4 sm:mb-6">
              <p className="text-xs sm:text-sm text-gray-600 mb-1 sm:mb-2">Contract address:</p>
              <p className="font-mono text-sm sm:text-base lg:text-lg bg-white p-2 sm:p-3 rounded border break-all">rH3cpS9tcN9GZTwwkHFkNJD5YgAHsF9sFu</p>
            </div>
            <Button 
              onClick={copyAddress}
              className="bg-primary text-white hover:bg-primary/90 font-bold text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 rounded-full transition-all duration-300 w-full sm:w-auto"
            >
              <Copy className="w-4 h-4 sm:w-5 sm:h-5 mr-2 sm:mr-3" />
              Copy Address
            </Button>
          </div>

          {/* Introduction */}
          <div className="mb-6 sm:mb-8">
            <p className="text-foreground/80 text-sm sm:text-base leading-relaxed">
              New to the XRPL? There are various wallets that you can use to make token purchases on the XRPL. 
              Two of the most popular wallets used by the XRP community are the XAMAN wallet and the First Ledger wallet. 
              Do your own research and decide which wallet is best for you. But, if you would like to use either of these, 
              we have provided some helpful directions below:
            </p>
          </div>

          {/* XAMAN Wallet Section */}
          <div className="mb-8 sm:mb-12">
            <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-foreground mb-3 sm:mb-4 border-b-2 border-primary pb-2">
              XAMAN Mobile Wallet App
            </h3>
            <ol className="list-decimal list-inside space-y-3 sm:space-y-4 text-foreground/80 text-sm sm:text-base">
              <li className="pb-1 sm:pb-2">If you have not already, you will need to create a XAMAN Wallet. Your XRP wallet address will be created automatically.</li>
              <li className="pb-1 sm:pb-2">Next, add XRP to fund it, by sending XRP to your wallet address.</li>
              <li className="pb-1 sm:pb-2">
                You can then connect your wallet to either:
                <ul className="list-disc list-inside ml-4 sm:ml-6 mt-1 sm:mt-2 space-y-1">
                  <li>
                    First Ledger, through either its app or webpage{" "}
                    <a href="http://www.firstledger.net" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline break-words">
                      http://www.firstledger.net
                    </a>
                  </li>
                  <li>
                    or connect to XMagnetic through its mobile app or webpage{" "}
                    <a href="http://www.xmagnetic.org" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline break-words">
                      http://www.xmagnetic.org
                    </a>{" "}
                    for a DEX interface, in order to make the purchase.
                  </li>
                </ul>
              </li>
              <li className="pb-1 sm:pb-2">Once you are connected, click on "Copy Address" above to copy the $HEADZ contract address and paste it into the search bar on whichever platform you chose.</li>
              <li className="pb-1 sm:pb-2">A new window will open with a Buy/Sell Box. Type in the number of XRP you want to spend in the empty box. You will see the approximate number of HEADZ tokens you are expected to receive right below the box.</li>
              <li className="pb-1 sm:pb-2">When you are ready to buy, click the "Buy" button.</li>
              <li className="pb-1 sm:pb-2">You will then be prompted to review, confirm and sign the transaction on a pop up page.</li>
              <li className="pb-1 sm:pb-2">Once you sign the transaction, your order will be submitted, and your tokens will be on the way!</li>
            </ol>
          </div>

          {/* First Ledger Mobile App Section */}
          <div className="mb-8 sm:mb-12">
            <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-foreground mb-3 sm:mb-4 border-b-2 border-primary pb-2">
              First Ledger Mobile Wallet App
            </h3>
            <ol className="list-decimal list-inside space-y-3 sm:space-y-4 text-foreground/80 text-sm sm:text-base">
              <li className="pb-1 sm:pb-2">If you haven't already, you will need to create a First Ledger Wallet. Your XRP wallet address will be created automatically.</li>
              <li className="pb-1 sm:pb-2">Next, add XRP to fund it, by sending XRP to your wallet address.</li>
              <li className="pb-1 sm:pb-2">Click on "Copy Address" above to copy the $HEADZ contract address and paste it in the search bar and submit. A bubble with information on the HEADZ token will then load. You will be purchasing HEADZ within your wallet.</li>
              <li className="pb-1 sm:pb-2">Click the "Buy" button at the bottom of the info bubble. Next it will ask you how many XRP you want to spend. Type in the number of XRP and submit.</li>
              <li className="pb-1 sm:pb-2">A window will pop up asking you to confirm your purchase. Review the information and confirm the purchase.</li>
              <li className="pb-1 sm:pb-2">The amount of HEADZ you received in your wallet will pop up in the next window!</li>
            </ol>
          </div>

          {/* First Ledger Website Section */}
          <div className="mb-6 sm:mb-8">
            <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-foreground mb-3 sm:mb-4 border-b-2 border-primary pb-2">
              First Ledger Website
            </h3>
            <ol className="list-decimal list-inside space-y-3 sm:space-y-4 text-foreground/80 text-sm sm:text-base">
              <li className="pb-1 sm:pb-2">
                Go to{" "}
                <a href="http://www.firstledger.net" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline break-words">
                  http://www.firstledger.net
                </a>
              </li>
              <li className="pb-1 sm:pb-2">If you haven't already, you will need to create a First Ledger Wallet. Your XRP wallet address will be created automatically.</li>
              <li className="pb-1 sm:pb-2">Next, add XRP to fund it, by sending XRP to your wallet address.</li>
              <li className="pb-1 sm:pb-2">Click the "Tokens" tab, at the top left.</li>
              <li className="pb-1 sm:pb-2">When the window opens, click the box next to "View All Tokens" in the top middle of the page.</li>
              <li className="pb-1 sm:pb-2">Paste the contract address in the Search Bar.</li>
              <li className="pb-1 sm:pb-2">Under the "Info" column, click on HEADZ.</li>
              <li className="pb-1 sm:pb-2">A new window will open with a chart and a Buy/Sell Box. Type in the number of XRP you want to spend in the empty box. You will see the estimated number of HEADZ tokens you are expected to receive right below the box.</li>
              <li className="pb-1 sm:pb-2">When you are ready to buy, click the Buy button.</li>
              <li className="pb-1 sm:pb-2">A window will pop up asking you to confirm your purchase. Review the information and confirm the purchase.</li>
              <li className="pb-1 sm:pb-2">Your wallet will then reflect that you now have HEADZ!</li>
            </ol>
          </div>

          {/* Additional Copy Address Button at Bottom */}
          <div className="text-center mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-gray-200">
            <p className="text-foreground/80 text-sm sm:text-base mb-3 sm:mb-4">Need to copy the contract address again?</p>
            <Button 
              onClick={copyAddress}
              className="bg-primary text-white hover:bg-primary/90 font-bold text-sm sm:text-base px-4 sm:px-6 py-2 sm:py-3 rounded-full transition-all duration-300 w-full sm:w-auto"
            >
              <Copy className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
              Copy Address
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowToBuy;