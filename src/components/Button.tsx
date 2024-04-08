// Props: Là object đặc biệt, cho truyền dữ liệu từ cha xuống con
// Props không thể bị thay đổi
const Button = (props: { title: String }) => {
    return <button className=" rounded-md bg-[#FFD333] px-5 py-2.5 text-sm font-medium text-teal-600 transition hover:text-" >
         {props.title}
    </button>
}

export default Button