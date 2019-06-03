export default class MarkerManager {
  constructor(map) {
    this.map = map;
    this.markers = {};
    this.bounds = new google.maps.LatLngBounds();
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
    this.map.setZoom(this.map.getZoom() - 1);
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
    this.bounds.extend(position);
    this.map.fitBounds(this.bounds);
  }

  removeMarker(marker) {
    this.markers[marker.listingId].setMap(null);
    delete this.markers[marker.listingId];
  }
}
