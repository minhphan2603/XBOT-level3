import React, { Component } from "react";
import Search from "../Search/Search";
import { data } from "../../data/data";
import ListView from "../ListView/ListView";
import MainView from "../MainView/MainView";

export default class Home extends Component {
  constructor() {
    super();
    this.state = {
      videoList: data,
      currentVideo: {}
    };
  }
  render() {
    return (
      <div className="container">
        <Search onChange={this.onChangeSearchField} />
        <div className="row">
          <div className="col-8">
            <MainView video={this.state.currentVideo} />
          </div>
          <div className="col-4">
            <ListView
              videoList={this.state.videoList}
              changeCurrentVideo={this.changeCurrentVideo}
            />
          </div>
        </div>
      </div>
    );
  }

  changeCurrentVideo = video => {
    this.setState({ currentVideo: video });
  };

  onChangeSearchField = event => {
    const searchField = event.target.value;
    const filterData = data.filter(video =>
      video.name.toLowerCase().includes(searchField.toLowerCase())
    );
    this.setState({ videoList: filterData });
  };
}
