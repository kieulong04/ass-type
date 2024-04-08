import { useEffect, useState } from "react"
import { ITrip,IBusHouse } from "../../../interfaces"
import { Link } from "react-router-dom";

const TripList = () => {
    const [trips, setTrips] = useState<ITrip[]>([])

    const fetchTrips = async () => {
          const dataTrips = await fetch("http://localhost:3000/trips").then(
            (result) => result.json()
          );

          console.log(dataTrips);
          const pathVariable = dataTrips
            .map((trip: ITrip) => "busHouseId=" + trip.busHouseId)
            .join("&");
            console.log(pathVariable);
          const dataHouses = await fetch(
            "http://localhost:3000/busHouses?" + pathVariable
          ).then((result) => result.json());
          console.log(dataHouses);
          let result = dataTrips.map((e: ITrip) => {
            let temp = dataHouses.find((element: IBusHouse) => element.id === e.busHouseId);
            console.log(temp);
            if (temp?.address) {
              e.address = temp.address;
            }
            if (temp?.name) {
              e.name = temp.name;
            }
            if (temp?.phone) {
              e.phone = temp.phone;
            }
            return e;
          });
    
          console.log(result);
          setTrips(result);

      };
    
      useEffect(() => {
        fetchTrips();
      }, []);

    return <div>
        <h1 className="text-4xl text-center my-8">Danh sách chuyến đi</h1>
        {trips.map(item => <Trip data={item} key={item.id} />)}
    </div>
}

export default TripList

const Trip = (props: { data: ITrip }) => {
  console.log(props.data)
  
  return <article className="rounded-xl border-2 border-gray-100 bg-white">
  <div className="flex items-start gap-4 p-4 sm:p-6 lg:p-8">
      <a href="#" className="block shrink-0">
          <img
              alt=""
              src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YXZhdGFyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
              className="size-14 rounded-lg object-cover"
          />
      </a>

      <div>
          <h3 className="font-medium sm:text-lg">
              <Link to={"/admin/trips/" + props.data.id} className="hover:underline">{props.data.name}</Link>
          </h3>

          <p className="line-clamp-2 text-sm text-gray-700">
              {props.data.price}
          </p>

          <div className="mt-2 sm:flex sm:items-center sm:gap-2">
              <div className="flex items-center gap-1 text-gray-500">
                  <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      stroke-width="2"
                  >
                      <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"
                      />
                  </svg>

                  <p className="text-xs">{props.data.seats}</p>
              </div>

              <span className="hidden sm:block" aria-hidden="true">&middot;</span>

              <p className="hidden sm:block sm:text-xs sm:text-gray-500">
                  Posted by
                  <a href="#" className="font-medium underline hover:text-gray-700"> {props.data.price} </a>
              </p>
          </div>
      </div>
  </div>

  <div className="flex justify-end">
      <strong
          className="-mb-[2px] -me-[2px] inline-flex items-center gap-1 rounded-ee-xl rounded-ss-xl bg-green-600 px-3 py-1.5 text-white"
      >
          <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
          >
              <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
              />
          </svg>

          <span className="text-[10px] font-medium sm:text-xs">Solved!</span>
      </strong>
  </div>
</article>
}