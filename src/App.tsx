function App() {
  return (
    <div className="bg-[#FEF0EE] min-h-screen w-full">
      <div className="flex flex-col items-center min-h-screen pt-6 sm:pt-8 md:pt-10 px-4 sm:px-6">
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
