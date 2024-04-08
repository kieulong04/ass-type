import { Link, Outlet } from "react-router-dom"

const AdminLayout = () => {
    return <div>
        <Header />
        <div className="flex">
            <Sidebar />
            <div className="grow">
                <Outlet />
            </div>
        </div>
    </div>
}

export default AdminLayout

const Header = () => {
    return <header className=" bg-gray-50 h-[84px] ">
        <div className=" ">
            <div className="relative top-4 px-6 sm:flex sm:items-center sm:justify-between">
                <div>
                <span className="grid h-10 w-14 place-content-center  bg-[#D9D9D9] text-xs text-gray-600">
                </span>
                <img src="../../" alt="" />
                </div>
                <div className="mt-4 flex flex-col gap-4 sm:mt-0 sm:flex-row sm:items-center">
                    <button
                        className="inline-flex items-center justify-center gap-1.5 rounded-lg border border-gray-200 bg-white px-5 py-3 text-gray-500 transition hover:text-gray-700 focus:outline-none focus:ring"
                        type="button"
                    >
                        <a href="#" className="text-sm font-medium"> Account </a>

                    </button>

                    <button
                        className="block rounded-lg bg-indigo-600 px-5 py-3 text-sm font-medium text-white transition hover:bg-indigo-700 focus:outline-none focus:ring"
                        type="button"
                    >
                        <a href="#">Logout</a>
                    </button>
                </div>
            </div>
        </div>
    </header>
}

const Sidebar = () => {
    return <div className="w-[360px] flex h-screen flex-col justify-between border-e bg-white">
        <div className="px-4 py-6">

            <ul className="mt-6 space-y-1">
                <li>
                    <Link
                        to="/admin"
                        className="block rounded-lg bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700"
                    >
                        Dashboard
                    </Link>
                </li>

                <li>
                    <Link
                        to="/admin/history"
                        className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                    >
                        Lịch sử chuyến xe
                    </Link>
                </li>

                <li>
                    <Link
                        to="/admin/trips"
                        className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                    >
                        Chuyến xe
                    </Link>
                </li>

                <li>
                    <Link
                        to="/admin/busHouse"
                        className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                    >
                        Nhà xe
                    </Link>
                </li>

                <li>
                    <details className="group [&_summary::-webkit-details-marker]:hidden">
                        <summary
                            className="flex cursor-pointer items-center justify-between rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                        >
                            <span className="text-sm font-medium"> Account </span>

                            <span className="shrink-0 transition duration-300 group-open:-rotate-180">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                >
                                    <path
                                        fill-rule="evenodd"
                                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                        clip-rule="evenodd"
                                    />
                                </svg>
                            </span>
                        </summary>

                        <ul className="mt-2 space-y-1 px-4">
                            <li>
                                <a
                                    href="#"
                                    className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                                >
                                    Details
                                </a>
                            </li>

                            <li>
                                <a
                                    href="#"
                                    className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                                >
                                    Security
                                </a>
                            </li>

                            <li>
                                <form action="#">
                                    <button
                                        type="submit"
                                        className="w-full rounded-lg px-4 py-2 text-sm font-medium text-gray-500 [text-align:_inherit] hover:bg-gray-100 hover:text-gray-700"
                                    >
                                        Logout
                                    </button>
                                </form>
                            </li>
                        </ul>
                    </details>
                </li>
            </ul>
        </div>
    </div>
}