import bradImage from "@/assets/brad.png";
import monicaImage from "@/assets/monica.png";
import davidImage from "@/assets/david.png";
import chrisImage from "@/assets/chris.png";
import stuartImage from "@/assets/stuart.png";
import Layout from "@/components/Layout";

const Team = () => {
  return (
    <Layout>
      <section className="py-12 sm:py-20 px-4 bg-gradient-to-br from-ripple-sky/50 to-ripple-lightblue/30">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-foreground mb-8 sm:mb-16 text-center">
            The Rippleheadz
          </h1>
          
          <div className="space-y-12 sm:space-y-16">
            {/* Brad Garlinghouse */}
            <div className="bg-white/80 backdrop-blur-sm rounded-lg sm:rounded-xl p-6 sm:p-8 shadow-lg text-center">
              <img 
                src={bradImage} 
                alt="Brad Garlinghouse" 
                className="w-32 h-32 sm:w-40 sm:h-40 mx-auto mb-4 rounded-full object-cover border-4 border-white shadow-lg"
              />
              <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-3">
                Brad Garlinghouse, XRP Overlord
              </h3>
              <p className="text-foreground/80 text-base sm:text-lg">
                I, the silver fox haired CEO mastermind, who has turned Ripple and XRP into cross-border payment powerhouses, giving SWIFT a true reason to sweat.
              </p>
            </div>

            {/* Monica Long */}
            <div className="bg-white/80 backdrop-blur-sm rounded-lg sm:rounded-xl p-6 sm:p-8 shadow-lg text-center">
              <img 
                src={monicaImage} 
                alt="Monica Long" 
                className="w-32 h-32 sm:w-40 sm:h-40 mx-auto mb-4 rounded-full object-cover border-4 border-white shadow-lg"
              />
              <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-3">
                Monica Long, The Blockchain Baroness
              </h3>
              <p className="text-foreground/80 text-base sm:text-lg">
                Ripple's visionary President, who leads with grace and grit, steering the ship towards Ripple's global financial dominance. She's not just making moves — she's orchestrating a takeover, one blockchain deal at a time.
              </p>
            </div>

            {/* David Schwartz */}
            <div className="bg-white/80 backdrop-blur-sm rounded-lg sm:rounded-xl p-6 sm:p-8 shadow-lg text-center">
              <img 
                src={davidImage} 
                alt="David Schwartz" 
                className="w-32 h-32 sm:w-40 sm:h-40 mx-auto mb-4 rounded-full object-cover border-4 border-white shadow-lg"
              />
              <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-3">
                David Schwartz, The Ledger Whisperer
              </h3>
              <p className="text-foreground/80 text-base sm:text-lg">
                The bearded tech wizard and Ripple CTO. As the brilliant mind behind Ripple's technological foundation, and fintech steward of the XRP Ledger, David weaves the fabric of a decentralized future, by waving his magic wand in a symphony of cryptographic design.
              </p>
            </div>

            {/* Chris Larsen */}
            <div className="bg-white/80 backdrop-blur-sm rounded-lg sm:rounded-xl p-6 sm:p-8 shadow-lg text-center">
              <img 
                src={chrisImage} 
                alt="Chris Larsen" 
                className="w-32 h-32 sm:w-40 sm:h-40 mx-auto mb-4 rounded-full object-cover border-4 border-white shadow-lg"
              />
              <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-3">
                Chris Larsen, The Ripple OG
              </h3>
              <p className="text-foreground/80 text-base sm:text-lg">
                The co-founder and visionary-in-chief of the XRPL, who set out to rewire the global financial system, stacking partnerships, and creating waves through decentralization, like a boss.
              </p>
            </div>

            {/* Stuart Alderoty */}
            <div className="bg-white/80 backdrop-blur-sm rounded-lg sm:rounded-xl p-6 sm:p-8 shadow-lg text-center">
              <img 
                src={stuartImage} 
                alt="Stuart Alderoty" 
                className="w-32 h-32 sm:w-40 sm:h-40 mx-auto mb-4 rounded-full object-cover border-4 border-white shadow-lg"
              />
              <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-3">
                Stuart Alderoty, Legal Hitman
              </h3>
              <p className="text-foreground/80 text-base sm:text-lg">
                Ripple's dynamic Chief Legal Officer, who led Ripple through court battles with unwavering resolve, setting new legal precedents and delivering fierce regulatory clapbacks, so that XRP can continue to reign supreme.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Team;