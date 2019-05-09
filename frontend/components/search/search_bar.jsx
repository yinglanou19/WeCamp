import React from "react";

import { searchListings } from "../../actions/listing_actions";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import "./search_bar.css";
class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchValue: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.history.push(`/discover/${this.state.searchValue}`);
  }

  update(field) {
    return e =>
      this.setState({
        [field]: e.currentTarget.value
      });
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit} className="search-form">
        <div className="search-form-input-div">
          <input
            type="text"
            className="search-form-input"
            placeholder="Try Yosemite"
            onChange={this.update("searchValue")}
          />
        </div>
        <div className="search-form-submit-div">
          <button className="search-form-submit">Search</button>
        </div>
      </form>
    );
  }
}

// const mapDispatchToProps = dispatch => ({
//   searchListings: condition => dispatch(searchListings(condition))
// });

export default withRouter(connect()(SearchBar));
