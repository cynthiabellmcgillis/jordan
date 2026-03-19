const publications = [
  { date: "2023.08.12", title: "The Typography of Public Space", tag: "Urbanism" },
  { date: "2023.05.24", title: "Notes on Minimalist Interface Design", tag: "Systems" },
  { date: "2023.02.09", title: "Cognitive Load and Editorial Clarity", tag: "Psychology" },
  { date: "2022.11.30", title: "Semantic Structures for Personal Archives", tag: "Archive" },
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
          {socialLinks.slice(0, 2).map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="font-mono text-[10px] uppercase tracking-widest text-[#5f5f57] dark:text-[#e5e2d9] opacity-70 hover:opacity-100 hover:text-[#99462a] transition-all"
            >
              {link.label}
            </a>
          ))}
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
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vel commodo tellus. Cras fringilla urna nec accumsan ullamcorper. Etiam tristique mollis urna, iaculis pulvinar elit vestibulum ac. Vivamus convallis porta est eu eleifend. Aliquam facilisis sodales magna id lacinia. Suspendisse potenti. Duis ipsum velit, vulputate sed lacinia nec, semper id metus.
          </p>
        </header>

        {/* Bento Grid */}
        <section className="grid grid-cols-1 md:grid-cols-12 gap-6 mb-32">
          {/* Large Card */}
          <div className="md:col-span-8 group cursor-pointer bg-surface-container-low p-8 md:p-12 hover:bg-surface-container-highest transition-colors duration-500">
            <div className="flex flex-col h-full justify-between">
              <div>
                <span className="font-mono text-[10px] uppercase tracking-widest text-primary mb-8 block">
                  The Spectator / 2026
                </span>
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 group-hover:text-primary transition-colors">
                How Iran could end the AI boom
                </h2>
                <p className="text-secondary max-w-xl">
                hile Americans anxiously watch the price of gasoline tick higher as the war in the Middle East squeezes the global oil supply, the conflict has highlighted another energy vulnerability that could prove just as costly: Taiwan’s dependency on foreign natural gas.
                </p>
              </div>
              <div className="mt-12 flex items-center gap-2 text-primary font-medium text-sm">
                <span>Read full essay</span>
                <span className="material-symbols-outlined text-sm">arrow_right_alt</span>
              </div>
            </div>
          </div>

          {/* Card with Image */}
          <div className="md:col-span-4 group cursor-pointer bg-surface-container-high p-8 hover:bg-surface-container-highest transition-colors duration-500">
            <div className="flex flex-col h-full justify-between">
              <div>
                <span className="font-mono text-[10px] uppercase tracking-widest text-secondary mb-6 block">
                  Short Form / Oct 23
                </span>
                <h2 className="text-2xl font-bold tracking-tight mb-3">Brutalism &amp; Bytes</h2>
                <p className="text-sm text-secondary leading-relaxed">
                  Parallels between mid-century architectural movements and decentralized web
                  protocols.
                </p>
              </div>
              <div className="mt-8">
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
          </div>

          {/* Critique Card */}
          <div className="md:col-span-4 group cursor-pointer bg-surface-container-high p-8 hover:bg-surface-container-highest transition-colors duration-500">
            <div className="flex flex-col h-full justify-between">
              <div>
                <span className="font-mono text-[10px] uppercase tracking-widest text-secondary mb-6 block">
                  Critique / 2023
                </span>
                <h2 className="text-2xl font-bold tracking-tight mb-3">Curation as Code</h2>
                <p className="text-sm text-secondary leading-relaxed">
                  How algorithmic recommendation engines are redefining the role of the traditional
                  gallery curator.
                </p>
              </div>
              <div className="mt-8 flex items-center gap-2 text-on-surface opacity-40 group-hover:opacity-100 transition-opacity">
                <span className="material-symbols-outlined">description</span>
                <span className="text-xs font-mono uppercase tracking-tighter">12 min read</span>
              </div>
            </div>
          </div>

          {/* Visual Accent Card */}
          <div className="md:col-span-8 bg-surface-container-low overflow-hidden relative min-h-[300px]">
            <div className="absolute inset-0 p-12 flex flex-col justify-center z-10">
              <h3 className="text-5xl font-black tracking-tighter text-on-surface/5 select-none pointer-events-none uppercase">
                Digital Ephemera
              </h3>
              <p className="mt-4 font-mono text-[10px] text-outline max-w-[200px]">
                Capturing the impermanent nature of the modern web through structured documentation.
              </p>
            </div>
            <div className="absolute right-0 top-0 w-1/2 h-full">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                alt="Detailed close-up of textured paper"
                className="w-full h-full object-cover mix-blend-multiply opacity-20"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAh1loivlU8CF7lTr26d2dl9dVyM8ONF-Ch7mYC5hBS_EDp-ahwQKB9w935V3aaYk1MYJZPt4djsPvOxuDDNQJRZLMceQtqS4td4p8LBEAoV9xSGELhQNZwYRjAS3a0aEcX9S0J4TWx3DfyIIyJyrrJWrJlgVV6UI5p9-TccTjc_1SzNrOdy1DzKbnBMW0ze2OMbvbgulNycQseXkOK07JphFzZi48GjHBcv3pkd1gChpkN6MkrgrC3fNTWohNDNsA4RaEaxTyyrWNP"
              />
            </div>
          </div>
        </section>

        {/* Publications List */}
        <section className="mt-24">
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
                href="#"
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

    </>
  );
}
