export default class MarkerManager {
  constructor(map) {
    this.map = map;
    this.markers = {};
  }
  updateMarkers(listings) {
    // listings is an array here
    const listingsObj = {};
    listings.forEach(listing => (listingsObj[listing.id] = listing));
    // filter-> newListing only and create markers for them
    listings
      .filter(listing => !this.markers[listing.id])
      .forEach(newlisting => this.createMarkerFromListing(newlisting));
    // filter-> remove listings not longer in the state
    Object.keys(this.markers)
      .filter(listingId => !listingsObj[listingId])
      .forEach(listingId => this.removeMarker(this.markers[listingId]));
  }

  createMarkerFromListing(listing) {
    const position = new google.maps.LatLng(listing.lat, listing.long);
    const marker = new google.maps.Marker({
      position,
      map: this.map,
      listingId: listing.id
    });

    // marker.addListener("click", () => this.handleClick(bench));
    this.markers[marker.listingId] = marker;
  }

  removeMarker(marker) {
    this.markers[marker.listingId].setMap(null);
    delete this.markers[marker.listingId];
  }
}
