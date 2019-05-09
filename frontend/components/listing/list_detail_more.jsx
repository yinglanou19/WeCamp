import React from "react";
import "./list_detail_more.css";
const ListingDetailsMore = () => (
  <div className="detail-info-all">
    <div className="detail-info-container">
      <div className="detail-info-title">Campsite Area</div>
      <div>
        <i class="fas fa-campground" />
        Bring your own tents
      </div>
      <div>
        <i class="fas fa-parking" /> Park at listing
      </div>
      <div>
        <i class="fas fa-wheelchair" />
        Wheelchair access
      </div>
      <div>
        <i class="fas fa-map-marker-alt" /> 2 sites
      </div>
    </div>
    <div className="detail-info-container">
      <div className="detail-info-title">Essentials</div>
      <div>
        <i class="fas fa-burn" />
        Campfires allowed
      </div>
      <div>
        <i class="fas fa-toilet-paper" />
        Toilet available
      </div>
      <div>
        <i class="fas fa-dog" />
        Pet allowed
      </div>
    </div>
    <div className="detail-info-container">
      <div className="detail-info-title">Amenities</div>
      <div>
        <i class="fas fa-bath" />
        Showers available
      </div>
      <div>
        <i class="fas fa-wifi" />
        Wifi available
      </div>
      <div>
        <i class="fas fa-dumpster" />
        Bins available
      </div>
      <div>
        <i class="fas fa-ban" />
        No kitchen
      </div>
    </div>
  </div>
);

export default ListingDetailsMore;
