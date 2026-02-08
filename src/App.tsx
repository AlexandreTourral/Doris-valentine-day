function App() {
  return (
    <div className="min-h-screen w-full relative overflow-hidden bg-[#FBF5F7] flex items-center justify-center p-4 sm:p-6">
      {/* Motifs floraux en bas */}
      <img
        src="/bottom-left.png"
        alt=""
        className="absolute bottom-[-75px] left-[-75px] w-80 h-80  object-contain object-bottom-left pointer-events-none select-none z-0 opacity-90"
        aria-hidden
      />
      <img
        src="/bottom-right.png"
        alt=""
        className="absolute bottom-[-50px] right-[-75px] w-80 h-80  object-contain object-bottom-right pointer-events-none select-none z-0 opacity-90"
        aria-hidden
      />

      <img
        src="/bottom-left.png"
        alt=""
        className="absolute rotate-180 top-[-100px] left-[-75px] w-80 h-80  object-contain object-bottom-left pointer-events-none select-none z-0 opacity-90"
        aria-hidden
      />
      <img
        src="/bottom-right.png"
        alt=""
        className="absolute rotate-180 top-[-100px] right-[-75px] w-80 h-80  object-contain object-bottom-right pointer-events-none select-none z-0 opacity-90"
        aria-hidden
      />
      {/* Cœurs sur les côtés (milieu) */}

      {/* Carte du menu avec double bordure */}
      <div className="relative z-10 w-full max-w-2xl">
        {/* Bordure rose */}
        <div className="border-2 border-[#e8b4bc] rounded-sm p-6 sm:p-8 md:p-10 bg-[#FBF5F7]">
          <h1 className="font-[Parisienne] font-semibold text-[#7A554A] text-4xl sm:text-5xl md:text-6xl text-center pb-8 sm:pb-10">
            Menu de la Saint-Valentin
          </h1>

          <div className="space-y-8 sm:space-y-10 text-[#333] text-lg sm:text-xl font-[Parisienne] font-medium">
            {/* Apéritif */}
            <section className="text-center">
              <h2 className="text-center text-xl sm:text-2xl font-bold text-black pb-4 font-[Parisienne]">
                Apéritif
              </h2>
              <p className="text-lg sm:text-xl font-[Parisienne] font-medium">
                Mojito, Coca, Orangina...
              </p>
            </section>

            {/* Plat principal */}
            <section>
              <h2 className="text-center text-xl sm:text-2xl font-bold text-black pb-4 font-[Parisienne]">
                Plat principal
              </h2>
              <p className="text-lg sm:text-xl text-center font-[Parisienne] font-medium">Magret de canard</p>
            </section>

            {/* Dessert */}
            <section className="text-center">
              <h2 className="text-xl sm:text-2xl font-bold text-black pb-4 font-[Parisienne] text-center">
                Dessert
              </h2>
              <p className="text-lg sm:text-xl font-[Parisienne] font-medium">Mousse au chocolat blanc</p>
              <p className="text-lg sm:text-xl font-[Parisienne] font-medium">
                Moi
              </p>
            </section>
          </div>
        </div>

        {/* 999 bisous sous le cadre */}
        <p className="font-[Parisienne] font-semibold text-center text-2xl sm:text-3xl text-[#7A554A] pt-6">
          <span className="text-4xl sm:text-5xl md:text-5xl">999</span> bisous
        </p>
      </div>
    </div>
  )
}

export default App
