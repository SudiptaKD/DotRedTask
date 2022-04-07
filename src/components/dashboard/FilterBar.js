const FilterBar = ({drivers, locations, statuses}) => {
 
  return (
    <div className="row mt-1 p-2">
        <div className="col-3">
          <label htmlFor="startDate"><strong>Start date :</strong></label>
          <input
            type="date"
            className="form-control"
            id="startDate"
          />
        </div>
        <div className="col-3">
          <label htmlFor="endDate"><strong>End date :</strong></label>
          <input
            type="date"
            className="form-control"
            id="endDate"
        />
        </div>
        <div className="col-2">
          <label htmlFor="ordertype"><strong>Select Driver</strong></label>
          <select
            className="form-control"
            id="ordertype"
          >
            <option value="">All</option>
            {drivers.map((driver) => (
              <option value={driver} key={driver}>
                {driver}
              </option>
            ))}
          </select>
        </div>
        <div className="col-2">
          <label htmlFor="ordertype"><strong>Select Location</strong></label>
          <select
            className="form-control"
            id="ordertype"
          >
            <option value="">Select</option>
            {locations.map((location) => (
              <option value={location} key={location}>
                {location}
              </option>
            ))}
          </select>
        </div>
        <div className="col-2">
          <label htmlFor="ordertype"><strong>Select Status</strong></label>
          <select
            className="form-control"
            id="ordertype"
          >
            <option value="">All</option>
            {statuses.map((status) => (
              <option value={status} key={status}>
                {status}
              </option>
            ))}
          </select>
        </div>
    </div>
  )
}

export default FilterBar