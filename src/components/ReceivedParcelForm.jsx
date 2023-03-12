function ReceivedParcelsForm({ handleSubmit, parcel, setParcel }) {
  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="tracking-number">
          <div className="form-control w-full ">
            <label className="label">
              <span className="label-text">Locker number</span>
            </label>
            <input
              type="text"
              value={parcel.lockerNumber}
              onChange={(e) =>
                setParcel({
                  ...parcel,
                  lockerNumber: e.target.value,
                })
              }
              placeholder="Locker number"
              className="input input-bordered w-full "
            />
          </div>
        </div>
        <div className="tracking-number">
          <div className="form-control w-full ">
            <label className="label">
              <span className="label-text">Tracking Number</span>
            </label>
            <input
              type="text"
              value={parcel.trackingNumber}
              onChange={(e) =>
                setParcel({
                  ...parcel,
                  trackingNumber: e.target.value.toUpperCase(),
                })
              }
              placeholder="Tracking number"
              className="input input-bordered w-full "
            />
          </div>
        </div>
        <div className="date-received">
          <div className="form-control w-full ">
            <label className="label">
              <span className="label-text">Date received</span>
            </label>
            <input
              type="date"
              //value={parcelDetails.dateReceived}
              onChange={(e) =>
                setParcel({
                  ...parcel,
                  dateReceived: new Date(
                    e.target.value.toString()
                  ).toDateString(),
                })
              }
              placeholder="Tracking number"
              className="input input-bordered w-full "
            />
          </div>
        </div>
        <div className="weight">
          <div className="form-control w-full ">
            <label className="label">
              <span className="label-text">Weight</span>
            </label>
            <input
              type="text"
              value={parcel.weight}
              onChange={(e) =>
                setParcel({
                  ...parcel,
                  weight: e.target.value,
                })
              }
              placeholder="Weight in kgs"
              className="input input-bordered w-full "
            />
          </div>
        </div>
        <div className="store">
          <div className="form-control w-full ">
            <label className="label">
              <span className="label-text">Store</span>
            </label>
            <input
              type="text"
              value={parcel.store}
              onChange={(e) =>
                setParcel({
                  ...parcel,
                  store: e.target.value,
                })
              }
              placeholder="Store name"
              className="input input-bordered w-full "
            />
          </div>
        </div>
        {/*<div className="parcel-image">
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Parcel image</span>
              </label>
              <input
                type="file"
                value={parcelDetails.weight}
                onChange={(e) =>
                  setParcelDetails({
                    ...parcelDetails,
                    img1: e.target.value,
                  })
                }
                className="input input-bordered w-full max-w-xs"
              />
            </div>
          </div>
          <div className="parcel-image">
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Label image</span>
              </label>
              <input
                type="file"
                value={parcelDetails.weight}
                onChange={(e) =>
                  setParcelDetails({
                    ...parcelDetails,
                    img2: e.target.value,
                  })
                }
                className="input input-bordered w-full max-w-xs"
              />
            </div>
          </div>
              */}
        <button type="submit" className="btn btn-primary btn-sm btn-block mt-4">
          Submit
        </button>
      </form>
    </>
  );
}

export default ReceivedParcelsForm;
