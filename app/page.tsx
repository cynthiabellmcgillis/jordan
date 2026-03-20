const publications = [
  { date: "2025.09", title: "Make SoCal Fly Again", tag: "Infrastructure", href: "https://www.nationalreview.com/magazine/2025/09/make-socal-fly-again/" },
  { date: "2025.05", title: "On the Twenty-First-Century Waterfront", tag: "Labor", href: "https://www.city-journal.org/article/international-longshoremens-association-dockworkers-ports-trade-technology-unions" },
  { date: "2025", title: "AI Can Keep Truck Drivers Awake", tag: "AI", href: "https://www.wsj.com/opinion/ai-can-keep-truck-drivers-awake-95ec67fc" },
  { date: "2025", title: "Balancing AI Innovation with National Security", tag: "Security", href: "https://nationalinterest.org/blog/techland/balancing-ai-innovation-with-national-security" },
];

const socialLinks = [
  { label: "X", href: "https://x.com/jordanmcgillis" },
  { label: "LinkedIn", href: "https://linkedin.com/in/jordanmcgillis" },
  { label: "RSS", href: "#" },
  { label: "Colophon", href: "#" },
];

export default function Home() {
  return (
    <>
      {/* Nav */}
      <nav className="fixed top-0 w-full z-50 bg-[#fcf9ef]/80 dark:bg-[#1c1c16]/80 backdrop-blur-xl">
        <div className="flex justify-between items-center px-8 py-6 max-w-7xl mx-auto">
          <span className="text-xl font-normal tracking-tight text-[#99462a] dark:text-[#d97757]">
            Geopolitics Policy, Anthropic
          </span>
          <div className="flex gap-8 items-center">
            <a href="#about" className="text-[#5f5f57] dark:text-[#e5e2d9] font-['Inter'] tracking-tight text-sm font-medium hover:text-[#99462a] transition-colors duration-300">About</a>
            <a href="#publications" className="text-[#5f5f57] dark:text-[#e5e2d9] font-['Inter'] tracking-tight text-sm font-medium hover:text-[#99462a] transition-colors duration-300">Publications</a>
          </div>
        </div>
      </nav>

      <main className="pt-32 pb-24 px-8 max-w-7xl mx-auto">
        {/* Hero */}
        <header className="mb-24 max-w-3xl">
          <h1 className="text-6xl md:text-7xl font-extrabold tracking-tighter text-on-surface mb-6">
            Jordan McGillis
          </h1>
          <p className="text-lg text-secondary leading-relaxed">
            I join Anthropic&rsquo;s policy team from the Economic Innovation Group (EIG), where I&rsquo;ve been a fellow since 2025. I&rsquo;m also a member of the Council on Foreign Relations and a winner of a 2026 Emergent Ventures award from George Mason University.
          </p>
        </header>

        {/* Bento Grid */}
        <section className="grid grid-cols-1 md:grid-cols-12 gap-6 mb-32">
          {/* Large Card */}
          <div className="md:col-span-8 group cursor-pointer bg-surface-container-low p-8 md:p-12 hover:bg-surface-container-highest transition-colors duration-500">
            <div className="flex flex-col h-full justify-between">
              <div>
                <span className="font-mono text-[10px] uppercase tracking-widest text-primary mb-8 block">
                  The Spectator / Mar 26
                </span>
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 group-hover:text-primary transition-colors">
                How Iran could end the AI boom
                </h2>
                <p className="text-secondary max-w-xl">
                While Americans anxiously watch the price of gasoline tick higher as the war in the Middle East squeezes the global oil supply, the conflict has highlighted another energy vulnerability that could prove just as costly: Taiwan’s dependency on foreign natural gas.
                </p>
              </div>
              <div className="mt-12 flex items-center gap-2 text-primary font-medium text-sm">
                <span>Read full essay</span>
                <span className="material-symbols-outlined text-sm">arrow_right_alt</span>
              </div>
            </div>
          </div>

          {/* Card with Image */}
          <a href="https://www.city-journal.org/article/meta-artificial-intelligence-stem-workers-immigration" target="_blank" rel="noopener noreferrer" className="md:col-span-4 group cursor-pointer bg-surface-container-high p-8 hover:bg-surface-container-highest transition-colors duration-500 flex flex-col">
            <div className="flex flex-col h-full justify-between">
              <div>
                <span className="font-mono text-[10px] uppercase tracking-widest text-secondary mb-6 block">
                  City Journal / Dec 25
                </span>
                <h2 className="text-2xl font-bold tracking-tight mb-3">Skill Issue</h2>
                <p className="text-sm text-secondary leading-relaxed">
                  Raising America&rsquo;s talent quotient requires a new immigration strategy.
                </p>
              </div>
              <div className="mt-8 flex items-center gap-2 text-primary font-medium text-sm">
                <span>Read full essay</span>
                <span className="material-symbols-outlined text-sm">arrow_right_alt</span>
              </div>
              <div className="mt-4">
                <div className="w-full h-32 overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    alt="Minimalist concrete architecture detail"
                    className="w-full h-full object-cover grayscale opacity-50 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBnEWxpzF6204W95lAxxQeETskxwDjw1pEOKROKfVrQavQTINcLcGZQyn-SPY1z0Ocf6onug9uz40K5vN5m-dPjHBA8K6WczKU6xwCQvlTGYvL2rTxp4bQQ_xnQffSfTyJXABpyUdvCBH2hJI0om4NL54bRvXnCipgMwOVLhwZr4D159GcdZdWMVBOJqtQurb34tgVVAwZjdt050-EGUksCox4TQtbNZuRpenWl9A9CWrjQny9DkVwQDvT2GznfOGonVgS10HSGI8IA"
                  />
                </div>
              </div>
            </div>
          </a>

        </section>

        {/* About */}
        <section id="about" className="mt-24 mb-24 max-w-3xl scroll-mt-24">
          <div className="flex items-center gap-8 mb-12">
            <h3 className="text-xs font-mono uppercase tracking-[0.2em] text-outline whitespace-nowrap">
              About
            </h3>
            <div className="h-px flex-grow bg-outline-variant/30"></div>
          </div>
          <div className="space-y-6 text-secondary leading-relaxed">
            <p>
              I join Anthropic&rsquo;s policy team from the Economic Innovation Group (EIG), where I&rsquo;ve been a fellow since 2025. I&rsquo;m also a member of the Council on Foreign Relations and a winner of a 2026 Emergent Ventures award from George Mason University. My primary project for 2025&ndash;2026 has been to analyze regional technology, energy, and manufacturing developments within the U.S., compare and contrast these regional developmental strategies with East Asian and Gulf strategies, and advocate for what I call &ldquo;Industrial Policy with American Characteristics.&rdquo; This approach to global competitiveness emphasizes agglomeration effects, defense-industrial overlaps, and market mechanisms.
            </p>
            <p>
              Before EIG, I was economics editor of the Manhattan Institute&rsquo;s <em>City Journal</em>{" "}magazine and an adjunct fellow at the Global Taiwan Institute, specializing in Taiwan&rsquo;s energy and industrial supply chains. Before that, I was deputy director of policy at the Institute for Energy Research.
            </p>
            <p>
              You can find my writing on economics, technology, and industrial policy in the <em>Washington Post</em>, the <em>Wall Street Journal</em>, <em>Bloomberg</em>, <em>Nikkei Asia</em>, CNN, and many other publications.
            </p>
            <p>
              My research has been cited by <em>the Economist</em>, the <em>Wall Street Journal</em>, the U.S. House Ways and Means Committee, the Congressional Research Service, the U.S. Defense Department&rsquo;s <em>Journal of Indo-Pacific Affairs</em>, the U.S.&ndash;China Economic and Security Review Commission, and International Crisis Group.
            </p>
          </div>
        </section>

        {/* Publications List */}
        <section id="publications" className="mt-24 scroll-mt-24">
          <div className="flex items-center justify-between mb-12">
            <h3 className="text-xs font-mono uppercase tracking-[0.2em] text-outline">
              Additional Publications
            </h3>
            <div className="h-px flex-grow mx-8 bg-outline-variant/30"></div>
          </div>

          <div className="space-y-0">
            {publications.map((item) => (
              <a
                key={item.title}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group block py-8 border-b border-outline-variant/10 hover:bg-surface-container-low transition-colors px-4 -mx-4"
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-12">
                    <span className="font-mono text-[10px] text-secondary w-20">{item.date}</span>
                    <h4 className="text-lg font-bold tracking-tight text-on-surface group-hover:text-primary transition-colors">
                      {item.title}
                    </h4>
                  </div>
                  <div className="flex items-center gap-6">
                    <span className="px-3 py-1 bg-secondary-container text-on-secondary-container rounded-full text-[10px] font-mono font-bold">
                      {item.tag}
                    </span>
                    <span className="material-symbols-outlined text-outline group-hover:translate-x-1 transition-transform">
                      north_east
                    </span>
                  </div>
                </div>
              </a>
            ))}
          </div>


        </section>
      </main>

      {/* Footer */}
      <footer className="bg-[#dddad0] dark:bg-[#141410]">
        <div className="max-w-7xl mx-auto px-8 py-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex gap-8">
            {socialLinks.slice(0, 2).map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="font-mono text-[10px] uppercase tracking-widest text-[#5f5f57] dark:text-[#e5e2d9] opacity-70 hover:opacity-100 hover:text-[#99462a] dark:hover:text-[#d97757] transition-all"
              >
                {link.label}
              </a>
            ))}
          </div>
          <span className="font-mono text-[10px] uppercase tracking-widest text-[#5f5f57] dark:text-[#e5e2d9] opacity-50">
            Made with Claude Code
          </span>
        </div>
      </footer>

    </>
  );
}
