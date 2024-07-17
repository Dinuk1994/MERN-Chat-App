/* eslint-disable react/prop-types */

const GenderBox = ({ onCheckBoxChange, selectedGender }) => {
    return (
        <div className="flex">
            <div className="form-control">
                <label htmlFor="" className={`label gap-2 cursor-pointer ${selectedGender =="male" ? "selected" : ""}`}>
                    <span className="label-text text-white">Male</span>
                    <input type="checkbox" className="checkbox text-white checkbox-info border border-gray-600"
                        checked={selectedGender === "male"}
                        onChange={() => onCheckBoxChange("male")}
                    />
                </label>
            </div>
            <div className="form-control">
                <label htmlFor="" className={`label gap-2 cursor-pointer ${selectedGender =="female" ? "selected" : ""}`}>
                    <span className="label-text text-white">Female</span>
                    <input type="checkbox" className="checkbox text-white checkbox-info border-gray-600"
                        checked={selectedGender === "female"}
                        onChange={() => onCheckBoxChange("female")}
                    />
                </label>
            </div>
        </div>
    )
}

export default GenderBox