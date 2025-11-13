import { Button } from "@/components/ui/button";
import logoImage from "@/assets/rippleheadz-logo.png";
import teamHeaderImage from "@/assets/rippleheadz-team-header.jpg";
import headerVideo from "@/assets/headervideo.mp4";
import disclaimerImage from "@/assets/disclaimer.png";
import { Twitter, Send, ExternalLink, Copy } from "lucide-react";
import Layout from "@/components/Layout"; // Import Layout

const Index = () => {
  const copyAddress = () => {
    navigator.clipboard.writeText("rH3cpS9tcN9GZTwwkHFkNJD5YgAHsF9sFu");
    // You can add a toast notification here if needed
  };

  return (
    <Layout> {/* Wrap with Layout */}
      {/* Hero Section - Full Header Background */}
      <section 
        className="relative min-h-screen flex flex-col px-4 py-4 sm:py-8"
        style={{
          backgroundImage: `url(${teamHeaderImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundAttachment: 'fixed'
        }}
      >
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/40"></div>
        
        {/* Header Content */}
        <div className="relative z-10 flex-1 flex flex-col">
          {/* Mobile Buy Now Button - Above header text on mobile */}
          <div className="md:hidden flex justify-center mb-6">
            <Button className="bg-white text-primary hover:bg-white/90 font-bold text-sm px-6 py-3 rounded-full">
              BUY NOW
            </Button>
          </div>

          {/* Centered Main Content */}
          <div className="flex-1 flex flex-col items-center justify-center text-center max-w-5xl mx-auto w-full">
            <h1 className="text-3xl sm:text-5xl md:text-7xl font-black text-white mb-4 sm:mb-6 drop-shadow-2xl leading-tight sm:leading-normal">
              Justice Secured.<br />Ripple Unleashed.
            </h1>
            
            {/* Social Media Buttons */}
            <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-6 sm:mb-8">
              <a 
                href="https://x.com/Rippleheadz?s=09" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group"
              >
                <Button className="bg-white/20 hover:bg-white/30 text-white border border-white/30 font-semibold px-4 sm:px-6 py-2 rounded-full backdrop-blur-sm transition-all duration-300">
                  <Twitter className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                  Twitter
                </Button>
              </a>
              
              <a 
                href="https://t.me/RIPPLEHEADZ_XRPL" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group"
              >
                <Button className="bg-white/20 hover:bg-white/30 text-white border border-white/30 font-semibold px-4 sm:px-6 py-2 rounded-full backdrop-blur-sm transition-all duration-300">
                  <Send className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                  Telegram
                </Button>
              </a>
              
              <a 
                href="https://dexscreener.com/xrpl/484541445a000000000000000000000000000000.rh3cps9tcn9gztwwkhfknjd5ygahsf9sfu_xrp" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group"
              >
                <Button className="bg-white/20 hover:bg-white/30 text-white border border-white/30 font-semibold px-4 sm:px-6 py-2 rounded-full backdrop-blur-sm transition-all duration-300">
                  <ExternalLink className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                  DexScreener
                </Button>
              </a>
            </div>
            
            {/* Copy Address Button */}
            <Button 
              onClick={copyAddress}
              className="bg-white text-primary hover:bg-white/90 font-bold text-sm sm:text-lg px-6 sm:px-8 py-3 sm:py-4 rounded-full mt-4 sm:mt-6 transition-all duration-300"
            >
              <Copy className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
              Copy Address
            </Button>
          </div>
        </div>

        {/* Cloud decorations */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
          <div className="absolute top-10 left-10 w-20 sm:w-32 h-8 sm:h-16 bg-white/30 rounded-full blur-xl"></div>
          <div className="absolute top-20 right-4 sm:right-20 w-24 sm:w-40 h-12 sm:h-20 bg-white/40 rounded-full blur-xl"></div>
          <div className="absolute bottom-20 sm:bottom-40 left-1/4 w-32 sm:w-48 h-16 sm:h-24 bg-white/35 rounded-full blur-xl"></div>
          <div className="absolute top-1/3 right-1/4 sm:right-1/3 w-24 sm:w-36 h-12 sm:h-18 bg-white/30 rounded-full blur-xl"></div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-12 sm:py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8 sm:mb-12">
            <img 
              src={logoImage} 
              alt="Rippleheadz" 
              className="w-48 sm:w-64 mx-auto mb-4 sm:mb-6"
            />
          </div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-foreground mb-6 sm:mb-8 text-center">
            About
          </h2>

          {/* Video Section */}
          <div className="mb-8 sm:mb-12">
            <video 
              autoPlay 
              muted 
              loop 
              playsInline
              className="w-full h-auto rounded-2xl shadow-2xl"
              poster={teamHeaderImage}
            >
              <source src={headerVideo} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          
          <div className="prose prose-sm sm:prose-lg max-w-none text-foreground">
            <p className="mb-3 sm:mb-4 text-sm sm:text-base">
              <strong>Parody Disclaimer:</strong> The content presented here is a work of parody and should be viewed, by all, as such when viewed on this website or on any other platform or forum (see 17 U.S. Code § 107).
            </p>
            
            <p className="mb-3 sm:mb-4 text-sm sm:text-base">
              Ripple’s resilience, strategic legal defense, and unwavering stance, through its fearless leaders, solidified its position as a leader in crypto — emerging stronger, more validated, and better poised to build the future of finance.

Raise a glass and join us in roasting the Rippleheadz, the titans of the XRP revolution. 🍾🥂🎉

The Rippleheadz are battle-tested, SEC-slaying legends who exited the courtroom stronger, unshaken and with diamond hands, ready to send XRP to the moon, while the SEC sits back and nurses its L. 
            </p>
            
            <p className="text-sm sm:text-base">
              In 2023, after a multi-year court fight, Ripple secured a landmark victory when a federal judge dropped the hammer on the SEC, ruling that XRP is not a security when sold on public exchanges. This decision marked a major win not only for Ripple and XRP, but for broader crypto regulation clarity in the United States. 

Join us in celebration of the Rippleheadz. A toast to their triumph, resilience, and the bright future ahead for XRP and the crypto community! 🥂🚀
            </p>
          </div>
        </div>
      </section>

      {/* Disclaimer Section */}
      <section id="disclaimer" className="py-12 sm:py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          {/* Disclaimer Image */}
          <div className="text-center mb-8 sm:mb-12">
            <img 
              src={disclaimerImage} 
              alt="Disclaimer" 
              className="w-full max-w-2xl mx-auto rounded-2xl shadow-2xl"
            />
          </div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-foreground mb-6 sm:mb-8 text-center">
            Disclaimer
          </h2>
          
          <div className="prose prose-sm sm:prose-lg max-w-none text-foreground">
            <p className="mb-3 sm:mb-4 text-sm sm:text-base">
              <strong>Parody Disclaimer:</strong> The content presented here is a work of parody and should be viewed, by all, as such when viewed on this website or on any other platform or forum (see 17 U.S. Code § 107).
            </p>
            
            <p className="mb-3 sm:mb-4 text-sm sm:text-base">
              Rippleheadz (Ticker Symbol: HEADZ), a meme token on the XRP Ledger, and the related artistic works, inclusive of any NFT's, were created for and are used for entertainment purposes only. The artistic works, inclusive of any meme(s), as well as the token itself are by no means connected to nor associated, affiliated, endorsed, or authorized by Ripple Labs, Inc. (AKA "Ripple"), David "Joel Rain" Schwartz, Chris Larsen, Monica Long or Stuart Alderoty, the entity Ripple, or any of their respective affiliates or assigns, and is not associated, affiliated, endorsed, or authorized by any other companies or persons.
            </p>
            
            <p className="text-sm sm:text-base">
              The artist, and the creators of this parody and token, through images and the playful usage of the meme culture RIPPLEHEADZ, do not claim nor seek to claim any rights to the intellectual property rights of Ripple. Nor do they claim any rights to the intellectual property rights of any person depicted in any artwork, whether as an NFT product and company names, logos, and trademarks featured or referred to within as part of this parody are the property of their respective trademark holders.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;