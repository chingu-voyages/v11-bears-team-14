import React from 'react';
import "./DetailSearch.css";

function DetailSearch() {

    return (
        <div className="detail-search-container">
            <div className="p-5">
                <h4 className="text-left">Book Unique Places to stay and things to do</h4>
                <div className="form-group">
                    <label htmlFor="where">
                        WHERE
                    </label>
                    <input className="form-control" type="text" placeholder="Anywhere" aria-label="where" id="where" />
                </div>
                <div className="form-group w-50 d-inline-block">
                    <label htmlFor="checkin">
                        CHECK-IN
                     </label>
                    <input className="form-control" type="text" placeholder="mm/dd/yyy" aria-label="checkin" id="checkin" />
                </div>
                <div className="form-group w-50 d-inline-block">
                    <label htmlFor="checkout">
                        CHECK-OUT
                    </label>
                    <input className="form-control" type="text" placeholder="mm/dd/yyy" aria-label="checkout" id="checkout" />
                </div>
                <div className="form-group">
                    <label htmlFor="guests">
                        GUESTS
                    </label>
                    <input className="form-control" type="text" placeholder="Guests" aria-label="guests" id="guests" />
                </div>
                <div className="search-btn">
                    <button>Search</button>
                </div>
            </div>
        </div>
    );
}

export default DetailSearch;
