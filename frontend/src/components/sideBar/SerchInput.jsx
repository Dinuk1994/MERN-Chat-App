import { IoSearch } from "react-icons/io5";

const SerchInput = () => {
    return (
        <div >
            <form action="flex item-center gap-2">
                <input type="text" placeholder="Search..." className="input text-white opacity-70 h-10 bg-gray-600 input-bordered rounded-lg" />
                <button type="submit" className="btn btn-sm ml-2 btn-circle bg-green-600 hover:bg-green-800 text-white">
                  <IoSearch className="text-xl"/>
                </button>
            </form>
        </div>
    )
}

export default SerchInput