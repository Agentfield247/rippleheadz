const Roadmap = () => {
  const phases = [
    {
      title: "Phase 1",
      items: [
        "Launch token",
        "Twitter Account",
        "Website",
        "Light marketing",
        "Telegram Channel",
        "Giveaways/contests",
        "Fundraise at x mkt cap",
        "X spaces",
        "Nft release"
      ]
    },
    {
      title: "Phase 2",
      items: [
        "Paid X Ads",
        "KOLS marketing",
        "Rewards for Holders"
      ]
    },
    {
      title: "Phase 3",
      items: [
        "YouTube Ads",
        "600 holders",
        "Dextool Upgrades",
        "DexScreener Ads",
        "CG Listing",
        "CMC fast tracking"
      ]
    }
  ];

  return (
    <section className="py-8 sm:py-20 px-4 bg-gradient-to-br from-ripple-sky/50 to-ripple-lightblue/30">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-foreground mb-6 sm:mb-12 lg:mb-16 text-center">
          Roadmap
        </h1>
        
        <div className="relative">
          {/* Timeline line - hidden on mobile, visible on lg+ */}
          <div className="absolute left-4 sm:left-1/2 transform sm:-translate-x-1/2 w-1 bg-primary/30 h-full hidden sm:block"></div>
          
          <div className="space-y-8 sm:space-y-12 lg:space-y-20">
            {phases.map((phase, phaseIndex) => (
              <div key={phaseIndex} className="relative">
                {/* Phase connector dot - hidden on mobile, visible on sm+ */}
                <div className="absolute left-0 sm:left-1/2 transform sm:-translate-x-1/2 -translate-y-2 sm:-translate-y-4 w-4 h-4 sm:w-6 sm:h-6 bg-primary rounded-full border-2 sm:border-4 border-white shadow-lg hidden sm:block z-10"></div>
                
                {/* Mobile phase indicator */}
                <div className="sm:hidden w-8 h-8 bg-primary rounded-full border-2 border-white shadow-lg flex items-center justify-center mb-4">
                  <span className="text-white text-sm font-bold">{phaseIndex + 1}</span>
                </div>
                
                <div className="sm:flex items-center">
                  {/* Phase content - full width on mobile, half on desktop */}
                  <div className="w-full sm:w-1/2 sm:px-6">
                    <div className="bg-white/90 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-primary/20">
                      <h2 className="text-xl sm:text-2xl lg:text-3xl font-black text-primary mb-4 sm:mb-6 text-center">
                        {phase.title}
                      </h2>
                      <ul className="space-y-2 sm:space-y-3">
                        {phase.items.map((item, itemIndex) => (
                          <li key={itemIndex} className="flex items-start">
                            <div className="flex-shrink-0 w-1.5 h-1.5 sm:w-2 sm:h-2 bg-primary rounded-full mt-1.5 sm:mt-2 mr-2 sm:mr-3"></div>
                            <span className="text-foreground/80 text-sm sm:text-base lg:text-lg font-medium leading-relaxed">
                              {item}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  
                  {/* Spacer for desktop */}
                  <div className="hidden sm:block sm:w-1/2"></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Progress Legend */}
        <div className="mt-8 sm:mt-16 bg-white/80 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 shadow-lg max-w-2xl mx-auto">
          <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-foreground mb-3 sm:mb-4 text-center">
            Journey to Success
          </h3>
          <p className="text-foreground/70 text-center text-xs sm:text-sm lg:text-base leading-relaxed">
            Our roadmap outlines the strategic phases of RIPPLEHEADZ growth and development. 
            Each phase builds upon the previous one, creating a solid foundation for long-term success.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Roadmap;