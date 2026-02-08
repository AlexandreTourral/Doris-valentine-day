function App() {
  return (
    <div className="bg-[#ffffff] min-h-screen w-full relative overflow-hidden">
      {/* Décors dans les coins, légèrement recentrés */}
      <img
        src="/amour.png"
        alt=""
        className="absolute top-20 left-10 sm:top-12 sm:left-12 md:top-14 md:left-14 w-20 h-20 sm:w-28 sm:h-28 md:w-40 md:h-40 object-contain opacity-90 -rotate-12 pointer-events-none select-none z-0"
        aria-hidden
      />
      <img
        src="/coeurs.png"
        alt=""
        className="absolute top-15 right-10 sm:top-12 sm:right-12 md:top-14 md:right-14 w-14 h-14 sm:w-20 sm:h-20 md:w-24 md:h-24 object-contain opacity-90 rotate-12 pointer-events-none select-none z-0"
        aria-hidden
      />
      {/* Anciennes images du bas, remontées sur les côtés (milieu) */}
      <img
        src="/des-ballons.png"
        alt=""
        className="absolute left-10 sm:left-12 md:left-14 top-1/2 -translate-y-1/2 w-16 h-16 sm:w-24 sm:h-24 md:w-28 md:h-28 object-contain opacity-90 rotate-30 pointer-events-none select-none z-0"
        aria-hidden
      />
      <img
        src="/Human-heart.png"
        alt=""
        className="absolute right-10 sm:right-12 md:right-14 top-1/2 -translate-y-1/2 w-14 h-14 sm:w-20 sm:h-20 md:w-24 md:h-24 object-contain opacity-90 rotate-6 pointer-events-none select-none z-0"
        aria-hidden
      />
      {/* Nouvelles images en bas */}
      <img
        src="/bottom-left.png"
        alt=""
        className="absolute bottom-[-75px] left-[-75px] w-80 h-80 object-contain object-left-bottom pointer-events-none select-none z-0"
        aria-hidden
      />
      <img
        src="/bottom-right.png"
        alt=""
        className="absolute bottom-[-50px] right-[-100px] w-80 h-80 object-contain object-right-bottom pointer-events-none select-none z-0"
        aria-hidden
      />

      <div className="relative z-10 flex flex-col items-center min-h-screen pt-6 sm:pt-8 md:pt-10 px-4 sm:px-6">
        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-[100px] font-[Parisienne] text-[#944c42] font-regular text-center">
          Valentine's Menu
        </h1>
        <div className="flex flex-col items-center w-full max-w-xl pt-6 sm:pt-8 md:pt-10">
          <div className="flex flex-col items-center pb-10 sm:pb-14 md:pb-20 text-center">
            <div className="text-[#944c42] text-2xl sm:text-3xl md:text-4xl lg:text-[50px] font-[Parisienne] font-regular pb-3 sm:pb-5">
              Apéritif
            </div>
            <div className="text-[#944c42] text-lg sm:text-xl md:text-2xl lg:text-[30px] font-[Parisienne] font-light">
              Mojito
            </div>
          </div>
          <div className="flex flex-col items-center pb-10 sm:pb-14 md:pb-20 text-center">
            <div className="text-[#944c42] text-2xl sm:text-3xl md:text-4xl lg:text-[50px] font-[Parisienne] font-regular pb-3 sm:pb-5">
              Plat Principal
            </div>
            <div className="text-[#944c42] text-lg sm:text-xl md:text-2xl lg:text-[30px] font-[Parisienne] font-light">
              Magret de canard
            </div>
          </div>
          <div className="flex flex-col items-center pb-10 sm:pb-14 md:pb-20 text-center">
            <div className="text-[#944c42] text-2xl sm:text-3xl md:text-4xl lg:text-[50px] font-[Parisienne] font-regular pb-3 sm:pb-5">
              Dessert
            </div>
            <div className="text-[#944c42] text-lg sm:text-xl md:text-2xl lg:text-[30px] font-[Parisienne] font-light">
              Mousse au chocolat blanc
            </div>
          </div>
          <div className="flex flex-col items-center pb-10 sm:pb-14 md:pb-20 text-center">
            <div className="text-[#944c42] text-2xl sm:text-3xl md:text-4xl lg:text-[50px] font-[Parisienne] font-bold">
              999 <span className="text-lg sm:text-xl md:text-2xl lg:text-[30px] font-[Parisienne] font-light">bisous</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
