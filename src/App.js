import React from 'react';
import logo from './media/logo_dark.png';
import illus from './media/illus.png';
import date from './media/date.svg';
import flag from './media/flag.svg';

import './App.scss';
import AttendanceForm from './components/AttendanceForm';

const MEET_UP_ID = 'reactmeetup2';

function App() {
  return (
    <div className="WR__app">
      <header className="WR__header">

        <div className="WP__intro">
          <div className="WR__logo">
            <img src={logo} alt="logo" />
            React: Penang
          </div>

          <h1>Penang React Meetup #2</h1>

          <div className="WR__intro_details">
            <div><img src={date} draggable="false" alt="Date" />21 December 2019</div>
            <div><img src={flag} draggable="false" alt="Date" />@CAT Penang</div>
          </div>
        </div>

        <div className="WR__illus">
          <img src={illus} alt="React: Penang" />
        </div>
      </header>

      <AttendanceForm meetupId={MEET_UP_ID} />
    </div>);
}

export default App;
