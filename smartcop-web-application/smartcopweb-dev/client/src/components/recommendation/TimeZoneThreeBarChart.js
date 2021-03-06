import React, { Component } from "react";
import axios from "axios";
import { Bar } from "react-chartjs-2";

class BarOne extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Data: {},
    };
  }

  componentDidMount() {
    axios.get("get_accident_prediction").then((response) => {
      console.log(response.data[0]);
      const data_arr = [];
      data_arr.push(response.data[0].careless_driving[2]);
      data_arr.push(response.data[0].drunk[2]);
      data_arr.push(response.data[0].overtake[2]);
      data_arr.push(response.data[0].rule_violation[2]);
      data_arr.push(response.data[0].speed[1]);
      data_arr.push(response.data[0].turning[2]);
      data_arr.push(response.data[0].other[2]);

      console.log(data_arr);
      this.setState({
        Data: {
          labels: [
            "careless_driving",
            "drunk",
            "overtake",
            "rule_violation",
            "speed",
            "turning",
            "other",
          ],
          datasets: [
            {
              label:
                "Accidet Percentage For Time Zone [ 12.00 p.m. to 6.00 p.m. ]",
              data: data_arr,
              backgroundColor: "#FFA500",
            },
          ],
        },
      });
    });
  }

  render() {
    return (
      <div>
        <div>
          <Bar
            data={this.state.Data}
            options={{ maintainAspectRatio: false }}
          ></Bar>
        </div>
        <div className="row">
          <br />
        </div>
        <div className="row">
          <div className="col-lg-1"></div>
          <div className="col-lg-3">
            <button type="button" id="btn33">
              overtake
              <span class="badge">90%</span>
            </button>
          </div>
          <div className="col-lg-4">
            <button type="button" id="btn33">
              rule_violating <span class="badge">76%</span>
            </button>
          </div>
          <div className="col-lg-4">
            <button type="button" id="btn33">
              careless_driving <span class="badge">74%</span>
            </button>
          </div>
        </div>
      </div>
    );
  }
}
export default BarOne;
