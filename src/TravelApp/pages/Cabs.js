import React from "react";
import "./pages.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import { BiChevronDown } from "react-icons/bi";
import { Button } from "react-bootstrap";
import Modal from "./Others/Modal";
import { CiLocationOn } from "react-icons/ci";
import DownloadApp from "../Section/DownloadApp";
import OrderNow from "../Section/OrderNow";
// import DateRangePicker from "react-bootstrap-daterangepicker";
// import "bootstrap/dist/css/bootstrap.css";
// import "bootstrap-daterangepicker/daterangepicker.css";
// import moment from "moment";
import Navbar3 from "../Navbar/Navbar3";

function Cabs() {
  //Serach (City) Data
  var city = require("../city.json");

  // DateRangePicker functionality
  // const [startDate, setStartDate] = useState(moment().subtract(7, "days"));
  // const [endDate, setEndDate] = useState(moment());
  // const handleDateChange = (event, picker) => {
  //   setStartDate(picker.startDate);
  //   setEndDate(picker.endDate);
  // };

  const [value, setValue] = useState("");

  // Traveller Modal functionalities
  const [showModal, setShowModal] = useState(false);
  const [visible, setVisible] = useState("");
  const [data, setdata] = useState({
    d1: "",
    d2: "",
  });
  const handleMouse = () => {
    setVisible(true);
  };
  const sendData = (data) => {
    setdata(data);
  };

  // Search Bar From and To

  const selectcity = (e) => {
    setValue(e.target.value);
  };

  const onSearch = (serachTerm) => {
    setValue(serachTerm);
  };

  return (
    <>
    <Navbar3/>
      <section className="backimg_banner py-5">
        <div className="container wrapper1 px-4 ">
          <div className="row">
            <div className="col-md-8">
              <input type="radio" name="radio" />
              <span className="mx-2">Outstation One-Way</span>
              <input type="radio" name="radio" className="mx-2" />
              <span className="mx-2">Outstation Round-Trip</span>
              <input type="radio" name="radio" className="mx-2" />
              <span className="mx-2">Airport Transfers</span>
              <input type="radio" name="radio" className="mx-2" />
              <span className="mx-2">Hourly Rentals</span>
            </div>
            <div className="col-md-4 d-flex justify-content-end text-center">
              <p>Online Cab Booking</p>
            </div>
          </div>
          <div className="row input_row">
            <div className="col-md-2 input_box d-flex align-items-center">
              <label className="px-3">
                <span className="text-center">From</span>
                <input
                  type="text"
                  className="input_field latoBlack pointer"
                  placeholder="Mumbai"
                  value={value}
                  onChange={selectcity}
                  onMouseEnter={handleMouse}
                  required
                />
                <p>India</p>
              </label>
            </div>
            {visible && value.length > 0 && value.length < 3 && (
              <div className="search_hotel_city">
                <div className="list_hotel">
                  <div className="hotel_name">
                    {city
                      .filter((item) => {
                        const serachTerm = value.toLowerCase();
                        const Name = item.firstName.toLowerCase();
                        return (
                          serachTerm &&
                          Name.startsWith(serachTerm) &&
                          Name !== serachTerm
                        );
                      })
                      .slice(0, 10)
                      .map((item, id) => (
                        <>
                          <div className="detail_propt3">
                            <div className="list_style3">
                              <li
                                onClick={() => onSearch(item.firstName)}
                                key={id}
                                className="py-2"
                              >
                                <span>
                                  <CiLocationOn />
                                </span>{" "}
                                {item.firstName}
                              </li>
                            </div>
                          </div>
                        </>
                      ))}
                  </div>
                </div>
              </div>
            )}
            <div className="col-md-2 input_box d-flex align-items-center">
              <label className="px-3">
                <span className="text-center">To</span>
                <input
                  type="text"
                  className="input_field latoBlack pointer"
                  placeholder="Pune"
                  value={value}
                  onChange={selectcity}
                  onMouseEnter={handleMouse}
                  required
                />
                <p>India</p>
              </label>
            </div>

            <div className="col-md-2 input_box">
              <label className="text-center pointer">
                Departure{" "}
                <span className="downarrow_icon ">
                  <BiChevronDown />
                </span>
                {/* <DateRangePicker
                  startDate={startDate}
                  onApply={handleDateChange}
                >
                  <input
                    className="home_input"
                    type="text"
                    value={`${startDate.format(" DD MMM YY ")}`}
                  />
                </DateRangePicker> */}
              </label>
            </div>
            <div className="col-md-2 input_box">
              <label className="text-center pointer">
                Return{" "}
                <span className="downarrow_icon ">
                  <BiChevronDown />
                </span>
                {/* <DateRangePicker endDate={endDate} onApply={handleDateChange}>
                  <input
                    className="home_input"
                    type="text"
                    value={`${endDate.format("DD MMM YY ")}`}
                  />
                </DateRangePicker> */}
              </label>
            </div>
            <div className="col-md-2 input_box">
              Pickup-Time
              <span className="down_icon">
                <BiChevronDown />
              </span>
              <p>10:00 AM</p>

            </div>
            <div className="col-md-2 input_box">
              Drop-Time
              <span className="down_icon">
                <BiChevronDown />
              </span>
              <p>10:00 PM</p>
            </div>


          </div>
          <div className="search_button_hotel">
            <Link to={`/${value}`}>
              <Button type="button">SEARCH</Button>
            </Link>
          </div>
        </div>
      </section>
      <section className="py-5">
        <OrderNow />
        <DownloadApp />
      </section>
    </>
  );
}

export default Cabs;
