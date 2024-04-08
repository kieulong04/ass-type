
import Search from "../Search"
import Checkbox from "./Checkbox"

const LayoutDetail = () => {
  return (
    <div className="bg-[#f2f2f2]">
      <div className="container mx-auto w-[1016px]">
      <Search />
      
      <div className="flex my-6 gap-8  rounded-xl w-[1016px]">
        <Checkbox />
      <div className="w-3/4">
      <div className="flex px-2 mb-6 h-[267px] rounded-xl	 	py-10 bg-white">
          <div className="h-[150px] w-1/4 mx-3 bg-[url('/5.png')] bg-cover bg-center" ></div>
          <div className=" w-3/4 ">
            <div className="flex justify-between">
            <h3 className="text-base font-semibold">Hải Phòng Travel (Đất Cảng)</h3>
            <span className="text-[#2474E5] text-xl">Từ 230.000đ</span>
            </div>
            <div className="flex justify-between my-2">
              <div className="flex justify-start"></div>
              <div className=" flex justify-end border border-[#27AE60] px-2 py-2" >Giảm 10%</div>
            </div>
            <div className="grid grid-rows-2 grid-flow-col gap-2">
              <div className="col-span-1 md:col-span-2"> 19:00 • Hà Nội</div>
              <div className="col-span-1 md:col-span-2"> 20:30 • Hải Phòng</div>
              <div className="col-span-1 md:col-span-2">Còn 11 chỗ trống</div>
              <button className="w-[118.4px] 	py-2 md:col-span-2 bg-[#FFC700] ">Chọn chuyến</button>
            </div>

          </div>
        </div>
        <div className="flex px-2 mb-6 h-[267px] rounded-xl		py-10 bg-white">
          <div className="h-[150px] w-1/4 mx-3 bg-[url('/5.png')] bg-cover bg-center" ></div>
          <div className=" w-3/4 ">
            <div className="flex justify-between">
            <h3 className="text-base font-semibold">Hải Phòng Travel (Đất Cảng)</h3>
            <span className="text-[#2474E5] text-xl">Từ 230.000đ</span>
            </div>
            <div className="flex justify-between my-2">
              <div className="flex justify-start"></div>
              <div className=" flex justify-end border border-[#27AE60] px-2 py-2" >Giảm 10%</div>
            </div>
            <div className="grid grid-rows-2 grid-flow-col gap-2">
              <div className="col-span-1 md:col-span-2"> 19:00 • Hà Nội</div>
              <div className="col-span-1 md:col-span-2"> 20:30 • Hải Phòng</div>
              <div className="col-span-1 md:col-span-2">Còn 11 chỗ trống</div>
              <button className="w-[118.4px] 	py-2 md:col-span-2 bg-[#FFC700] ">Chọn chuyến</button>
            </div>

          </div>
        </div>
        <div className="flex px-2 mb-6 h-[267px] rounded-xl		py-10 bg-white">
          <div className="h-[150px] w-1/4 mx-3 bg-[url('/5.png')] bg-cover bg-center" ></div>
          <div className=" w-3/4 ">
            <div className="flex justify-between">
            <h3 className="text-base font-semibold">Hải Phòng Travel (Đất Cảng)</h3>
            <span className="text-[#2474E5] text-xl">Từ 230.000đ</span>
            </div>
            <div className="flex justify-between my-2">
              <div className="flex justify-start"></div>
              <div className=" flex justify-end border border-[#27AE60] px-2 py-2" >Giảm 10%</div>
            </div>
            <div className="grid grid-rows-2 grid-flow-col gap-2">
              <div className="col-span-1 md:col-span-2"> 19:00 • Hà Nội</div>
              <div className="col-span-1 md:col-span-2"> 20:30 • Hải Phòng</div>
              <div className="col-span-1 md:col-span-2">Còn 11 chỗ trống</div>
              <button className="w-[118.4px] 	py-2 md:col-span-2 bg-[#FFC700] ">Chọn chuyến</button>
            </div>

          </div>
        </div>
      </div>
      </div>
      </div>


    </div>



  )
}

export default LayoutDetail