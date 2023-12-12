import React, { useState } from "react";
import "./CreatePostForm.css";

const CreatePostForm = ({ onCreatePost }) => {
  const [name, setName] = useState("");
  const [postBody, setPostBody] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    let timePosted = setTimePosted();
    const formData = {
      name,
      postBody,
      timePosted,
    };
    
    onCreatePost(formData);
  };

  function setTimePosted() {
    let date = new Date();
    let month = date.getMonth();
    let monthName;
    switch (month) {
      case 0:
        monthName = "January";
        break;
      case 1:
        monthName = "January";
        break;
      case 2:
        monthName = "January";
        break;
      case 3:
        monthName = "January";
        break;
      case 4:
        monthName = "January";
        break;
      case 5:
        monthName = "January";
        break;
      case 6:
        monthName = "January";
        break;
      case 7:
        monthName = "January";
        break;
      case 8:
        monthName = "January";
        break;
      case 9:
        monthName = "January";
        break;
      case 10:
        monthName = "November";
        break;
      case 11:
        monthName = "December";
        break;
    }
    let day = date.getDate();
    let hour = date.getHours();
    let meridiem;
    let standardHour;
    switch (hour) {
      case 0:
        standardHour = 12;
        meridiem = "AM";
        break;
      case 1:
      case 2:
      case 3:
      case 4:
      case 5:
      case 6:
      case 7:
      case 8:
      case 9:
      case 10:
      case 11:
        standardHour = hour;
        meridiem = "AM";
        break;
      case 12:
        standardHour = 12;
        meridiem = "PM";
        break;
      case 13:
        standardHour = 1;
        meridiem = "PM";
        break;
      case 14:
        standardHour = 2;
        meridiem = "PM";
        break;
      case 15:
        standardHour = 3;
        meridiem = "PM";
        break;
      case 16:
        standardHour = 4;
        meridiem = "PM";
        break;
      case 17:
        standardHour = 5;
        meridiem = "PM";
        break;
      case 18:
        standardHour = 6;
        meridiem = "PM";
        break;
      case 19:
        standardHour = 7;
        meridiem = "PM";
        break;
      case 20:
        standardHour = 8;
        meridiem = "PM";
        break;
      case 21:
        standardHour = 9;
        meridiem = "PM";
        break;
      case 22:
        standardHour = 10;
        meridiem = "PM";
        break;
      case 23:
        standardHour = 11;
        meridiem = "PM";
        break;
    }

    let minute = date.getMinutes();
    let standardMinutes;
    switch (minute) {
      case 0:
        standardMinutes = "00";
      case 1:
        standardMinutes = "01";
        break;
      case 2:
        standardMinutes = "02";
        break;
      case 3:
        standardMinutes = "03";
        break;
      case 4:
        standardMinutes = "04";
        break;
      case 5:
        standardMinutes = "05";
        break;
      case 6:
        standardMinutes = "06";
        break;
      case 7:
        standardMinutes = "07";
        break;
      case 8:
        standardMinutes = "08";
        break;
      case 9:
        standardMinutes = "09";
        break;
      default:
        standardMinutes = minute;
    }

    let timePosted = `${monthName} ${day} at ${standardHour}:${standardMinutes} ${meridiem}`;
    return timePosted;
  }

  return (
    <form className="form-class" onSubmit={handleSubmit}>
      <div className="input-contatiner">
        <div className="text-container">
          <label>Name</label>
          <input
            placeholder="Your name"
            className="input"
            type="text"
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="text-container">
          <label>Post</label>
          <textarea
            placeholder="Text"
            className="input"
            type="text"
            rows="10"
            onChange={(e) => setPostBody(e.target.value)}
          ></textarea>
        </div>
      </div>
      <button className="submit">Post</button>
    </form>
  );
};

export default CreatePostForm;
