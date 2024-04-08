
import { useLoaderData, useNavigate } from "react-router-dom"
import { useForm, SubmitHandler } from "react-hook-form"
import { IBusHouse, ITrip } from "../../../interfaces";
import { postTrip } from "../../../api/trips.api";

type AddTripForm = {
    busHouseId: string,
    startTime: string,
    fromStation: string,
    toStation: string,
    station: string,
    seats: number,
    price: number
}
const UpdateTrip = () =>{
    const navigate = useNavigate();
    const { busHouses, trip } = useLoaderData() as { busHouses: IBusHouse[], trip: ITrip } ;
    console.log(busHouses);
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<AddTripForm>({
        // defaultValues:trip
    })
    const onSubmit: SubmitHandler<AddTripForm> = async(data) =>{
        try {
            await postTrip(data);
            navigate('/admin/trips');
        } catch (error) {
            alert("thêm mới chuyến đi thất bại");
        }
    }
    return <form action="#" className="space-y-4" onSubmit={handleSubmit(onSubmit)} >
    <h1 className="py-4 text-4xl text-center text-black-500">Sửa chuyến đi</h1>

    <div>
        <label className="sr-only" htmlFor="name">
            Nhà xe
        </label>
        <select {...register("busHouseId", { required: "Dữ liệu bắt buộc" })}>
            {busHouses && busHouses.map(item => <option value={item.id}>{item.name}</option>)}
        </select>
        <p className="text-red-500 text-sm italic">{errors.busHouseId?.message}</p>
    </div>
    <div>
        <label className="sr-only" htmlFor="name">
            Thời gian khởi hành
        </label>
        <input
            className="w-full rounded-lg border-gray-200 p-3 text-sm"
            placeholder="Thời gian khởi hành"
            type="datetime-local"
            {...register("startTime", { required: "Dữ liệu bắt buộc" })}
        />
            <p className="text-red-500 text-sm italic">{errors.startTime?.message}</p>
    </div>
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div>
            <label className="sr-only" htmlFor="email">
                Điểm đi
            </label>
            <input
                className="w-full rounded-lg border-gray-200 p-3 text-sm"
                placeholder="Điểm đi"
                type="text"
                {...register("fromStation", { required: "Dữ liệu bắt buộc" })}
            />
            <p className="text-red-500 text-sm italic">{errors.fromStation?.message}</p>
        </div>
        <div>
            <label className="sr-only" htmlFor="phone">
                Điểm đến
            </label>
            <input
                className="w-full rounded-lg border-gray-200 p-3 text-sm"
                placeholder="Điểm đến"
                type="text"
                {...register("toStation", { required: "Dữ liệu bắt buộc" })}
            />
            <p className="text-red-500 text-sm italic">{errors.toStation?.message}</p>
        </div>
    </div>

    <div>
        <label className="sr-only" htmlFor="phone">
            Bến xe
        </label>
        <input
            className="w-full rounded-lg border-gray-200 p-3 text-sm"
            placeholder="Bến xe"
            type="text"
            {...register("station", { required: "Dữ liệu bắt buộc" })}
            
        />
            <p className="text-red-500 text-sm italic">{errors.station?.message}</p>
    </div>
    <div>
        <label className="sr-only" htmlFor="phone">
            Số ghế
        </label>
        <input
            className="w-full rounded-lg border-gray-200 p-3 text-sm"
            placeholder="Số ghế"
            type="number"
            {...register("seats", { required: "Dữ liệu bắt buộc" })}
        />
            <p className="text-red-500 text-sm italic">{errors.seats?.message}</p>
    </div>
    <div>
        <label className="sr-only" htmlFor="phone">
            Giá
        </label>
        <input
            className="w-full rounded-lg border-gray-200 p-3 text-sm"
            placeholder="Giá"
            type="number"
            {...register("price", { required: "Dữ liệu bắt buộc" })}
        />
            <p className="text-red-500 text-sm italic">{errors.price?.message}</p>
    </div>

    <div className="mt-4 ">
        <button
            type="submit"
            className="margin-auto inline-block w-full rounded-lg bg-black px-5 py-3 font-medium text-white sm:w-auto"
        >
            Thêm mới chuyến xe
        </button>
    </div>
</form>
}

export default UpdateTrip;