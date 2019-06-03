import React from "react";
import Modal from "../components/modal/modal";
import HeaderContainer from "../components/greeting/greeting_container";
import "./home.css";
import { clearSessionErrors } from "../actions/session_actions";
import { connect } from "react-redux";
import ListingCollection from "./listing/listing_collection";
import SearchBar from "./search/search_bar";
import { fetchListings } from "../actions/listing_actions";
class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = { formtype: "", open: false };
  }
  render() {
    return (
      <div className="page-outline-container">
        <div className="page-container">
          <div className="home-page-dummy-header" />
          <div className="search-container">
            <div className="search-intro-text">
              <h2 className="search-intro-first">Find yourself outside.</h2>
              <div id="search-intro-second-div">
                <p className="search-intro-second">
                  Book unique camping experiences on over <b>300,000</b>{" "}
                  campsites, ranches, vineyards, public parks and more.
                </p>
              </div>
            </div>
            <div className="search-form-container">
              <SearchBar />
            </div>
          </div>
          <div className="listing-container-div">
            <p>
              <b>Recommend to you</b>
            </p>
            <ListingCollection home={true} />
          </div>
          <div className="home-discover-container">
            <p>
              <b>Discover Camping...</b>
            </p>
            <ul className="discover-imgs-ul">
              <li>
                <a href="/#/discover">
                  <img src="discover1.png" />
                </a>
              </li>
              <li>
                <a href="/#/discover">
                  <img src="discover2.png" />
                </a>
              </li>
              <li>
                <a href="/#/discover">
                  <img src="discover3.png" />
                </a>
              </li>
              <li>
                <a href="/#/discover">
                  <img src="discover4.png" />
                </a>
              </li>
              <li>
                <a href="/#/discover">
                  <img src="discover5.png" />
                </a>
              </li>
              <li>
                <a href="/#/discover">
                  <img src="discover6.png" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
const mapDispatchToProps = dispatch => ({
  clearSessionErrors: () => dispatch(clearSessionErrors()),
  fetchListings: () => dispatch(fetchListings())
});

export default connect(
  null,
  mapDispatchToProps
)(Home);
