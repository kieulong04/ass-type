import Banner from "./Banner"
import Card from "./Card"



const HomePage = () => {
  return (
<>
    <Banner />
    <div className="mx-32">
        <div className="mx-16">
        <h1 className="text-4xl font-medium	my-16">Tuyến đường phổ biến</h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mx-12 " >
        <Card URL="/1.png" name="Sài Gòn - Nha Trang" price={ 200.000}/>
        <Card URL="/2.png" name="Hà Nội - Hải Phòng" price={ 110.000}/>
        <Card URL="/3.png" name="Sài Gòn - Đà Lạt" price={ 200.000}/>
        <Card URL="/4.png" name="Sài Gòn - Phan Thiết" price={150.000}/>``
        </div>
    </div>
</>
  )
}
export default HomePage
 