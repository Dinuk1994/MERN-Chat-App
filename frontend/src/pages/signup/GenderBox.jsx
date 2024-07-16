
const GenderBox = () => {
    return (
        <div className="flex">
            <div className="form-control">
                <label htmlFor="" className={`label gap-2 cursor-pointer`}>
                    <span className="label-text text-white">Male</span>
                    <input type="checkbox" className="checkbox text-white checkbox-info border border-gray-600" />
                </label>
            </div>
            <div className="form-control">
                <label htmlFor="" className={`label gap-2 cursor-pointer`}>
                    <span className="label-text text-white">Female</span>
                    <input type="checkbox" className="checkbox text-white checkbox-info border-gray-600" />
                </label>
            </div>
        </div>
    )
}

export default GenderBox