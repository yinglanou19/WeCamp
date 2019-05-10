import React from "react";
import "./listings_map.css";
import MarkerManager from "../../util/marker_manager";
import { connect } from "react-redux";
class ListingsMap extends React.Component {
  componentDidMount() {
    // set the map to show SF
    const mapOptions = {
      center: { lat: 37.301607, lng: -122.206088 }, // this is SF: lat: 37.7758, lng: -122.435
      zoom: 13
    };

    // wrap this.mapNode in a Google Map
    this.map = new google.maps.Map(this.mapNode, mapOptions);
    this.MarkerManager = new MarkerManager(this.map);

    this.MarkerManager.updateMarkers(this.props.listings);
  }

  componentDidUpdate() {
    this.MarkerManager.updateMarkers(this.props.listings);
  }
  render() {
    return <div id="map-container" ref={map => (this.mapNode = map)} />;
  }
}

const mapStateToProps = ({ entities }) => {
  return {
    listings: Object.values(entities.listings)
  };
};

export default connect(mapStateToProps)(ListingsMap);
