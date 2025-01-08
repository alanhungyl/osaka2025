import { useState } from 'react';
import dates from './tripDates';

function App() {
  const [selectedDay, setSelectedDay] = useState('Day 1 - Arrival & Kyoto');

  return (
    <div className="min-h-screen text-white flex flex-col" style={{ background: 'linear-gradient(to bottom, #2F00FF, #7B00FF)' }}>
      {/* Header */}
      <h1 className="text-4xl md:text-5xl font-bold text-center">
        OSAKA 2025
      </h1>

      {/* Selector */}
      <div className="p-4 flex justify-center">
        <select 
          className="select select-bordered w-full max-w-xs"
          value={selectedDay}
          onChange={(e) => setSelectedDay(e.target.value)}
        >
          <option disabled selected>Select a day</option>
          {Object.keys(dates).map(day => (
            <option key={day} value={day}>{day}</option>
          ))}
        </select>
      </div>

      {/* Display selected date and schedule */}
      {selectedDay && dates[selectedDay] && (
        <div className="p-4 text-center">
          <p>{`${selectedDay} - ${dates[selectedDay].date}`}</p>
          <div className="space-y-4 flex flex-col items-center">
            {dates[selectedDay].schedule.map((item, index) => (
              <div key={index} className="p-4 bg-white text-black rounded shadow w-4/5">
                <p className="text-sm">{item.time}</p>
                <h3 className="text-xl font-bold">{item.title}</h3>
                {item.openingTime && <p><strong>開放時間:</strong> {item.openingTime}</p>}
                {item.fee && <p><strong>Fee:</strong> {item.fee === 'FREE' ? item.fee : `¥${item.fee}`}</p>}
                <p style={{ whiteSpace: 'pre-line' }}>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Main content area - takes up remaining space */}
      <div className="flex-grow">
        {/* Content can be added here */}
      </div>
    </div>
  );
}

export default App;