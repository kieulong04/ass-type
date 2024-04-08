import Select from './home/Select'
import Button from '../Button'

const Search = () => {
  return (
    <div className='w-full '>
      <form action="" className=" rounded-xl bg-white p-4 flex justify-between gap-4">
        <div className="flex border-2 border-light-grey-600 rounded-lg w-full ">
        <Select title="Điểm đi" />
        <Select title="Điểm đến" />
        <Select title="Ngày đi" />
        </div>
        <Button title="Tìm Kiếm" />
      </form>
    </div>
  )
}

export default Search