const ModelY = () => {
  return (
    <div className="bg-[url('/bg.avif')]  py-32 bg-center bg-cover h-screen flex justify-between space-y-4 flex-col items-center ">
        <div className="text-center">
          <div className="text-[44px] font-bold">Model Y</div>
          <div className="text-[15px] font-light tracking-wider leading-4">
            Starting at $40,240
          </div>
          <div className="text-[15px] font-light tracking-wider">
            After Federal Tax Credit
          </div>
        </div>
        <div className="flex justify-between items-center space-x-4 ">
          <button className="px-4 py-2 rounded-md bg-[#edeceb] text-[#5a5b5d] w-72">
            Explore Inventory
          </button>
          <button className="px-4 py-2 rounded-md bg-[#5a5b5d] text-[#edeceb] w-72">
            Custom Order
          </button>
        </div>
      </div>
  )
}

export default ModelY