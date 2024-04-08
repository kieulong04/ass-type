const Checkbox = () => {
    return (
      <div className="w-1/3 h-[274px] rounded-xl bg-white px-4 py-12">
        <fieldset>
          <legend className="text-lg font-medium text-gray-900">Sắp xếp</legend>
          <div className="mt-4 space-y-2 " >
          <label htmlFor="Option1" className="flex cursor-pointer items-start gap-4">
              <div className="flex items-center">
                <input type="radio" name="sorting" id="Option1" className="w-4 h-4 rounded border-gray-300" />
              </div>
              <div>
                <strong className="font-medium text-gray-900"> Mặc định </strong>
              </div>
            </label>
            <label htmlFor="Option2" className="flex cursor-pointer items-start gap-4">
              <div className="flex items-center">
                <input type="radio" name="sorting" id="Option2" className="w-4 h-4 rounded border-gray-300" />
              </div>
              <div>
                <strong className="font-medium text-gray-900"> Giờ đi sớm nhất </strong>
              </div>
            </label>
            <label htmlFor="Option3" className="flex cursor-pointer items-start gap-4">
              <div className="flex items-center">
                <input type="radio" name="sorting" id="Option3" className="w-4 h-4 rounded border-gray-300" />
              </div>
              <div>
                <strong className="font-medium text-gray-900"> Đánh giá cao nhất </strong>
              </div>
            </label>
            <label htmlFor="Option4" className="flex cursor-pointer items-start gap-4">
              <div className="flex items-center">
                <input type="radio" name="sorting" id="Option4" className="w-4 h-4 rounded border-gray-300" />
              </div>
              <div>
                <strong className="font-medium text-gray-900"> Giá tăng dần </strong>
              </div>
            </label>
            <label htmlFor="Option5" className="flex cursor-pointer items-start gap-4">
              <div className="flex items-center">
                <input type="radio" name="sorting" id="Option5" className="w-4 h-4 rounded border-gray-300" />
              </div>
              <div>
                <strong className="font-medium text-gray-900"> Giá giảm dần </strong>
              </div>
            </label>

          </div>
        </fieldset>
      </div>
    )
  }
  
  export default Checkbox;
  