interface CardProps {
    URL: string;
    name: string;
    price: number;
  }

const Card = (props:CardProps) => {
    let backgroundClass = '';
    if (props.name === 'Sài Gòn - Nha Trang') {
      backgroundClass = 'bg-[#9E947C]';
    } else if (props.name === 'Hà Nội - Hải Phòng') {
      backgroundClass = 'bg-[#585279]';
    } else if (props.name === 'Sài Gòn - Đà Lạt'){
      backgroundClass = 'bg-[#C6324E]'; 
    } else if (props.name === 'Sài Gòn - Phan Thiết'){
        backgroundClass = 'bg-[#4C6C8C]'; 
    }else{
        backgroundClass = 'bg-white-500'; 
    }
  return (
<a href="#" className="block rounded-lg p-4 shadow-sm shadow-indigo-100">
  <img alt="" src={props.URL} className="h-56 w-full rounded-t-lg object-cover" />
  <div className={`  relative buttom-8  ${backgroundClass} py-8 `}>
    <dl>
      <div>
        <dt className="sr-only">Name</dt>
        <dd className="font-medium text-white pl-6">{props.name}</dd>
      </div>
      <div>
        <dt className="sr-only">Price</dt>
        <dd className="text-sm text-white pl-6">${props.price}</dd>
      </div>
    </dl>
  </div>
</a>

  )
}

export default Card