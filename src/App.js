// App.js
import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import LandingPage from './components/LandingPage';
import BookingPage from './components/BookingPage';
import ConfirmationPage from './components/ConfirmationPage';
import Footer from './components/Footer';

function App() {
  const [currentPage, setCurrentPage] = useState('landing');
  const [appointmentState, setAppointmentState] = useState({
    selectedService: '',
    selectedDate: null,
    selectedTime: '',
    currentMonth: new Date().getMonth(),
    currentYear: new Date().getFullYear(),
    patientDetails: { name: '', phone: '', email: '' }
  });

  const showPage = (pageId) => {
    setCurrentPage(pageId);
    window.scrollTo(0, 0);
  };

  const resetState = () => {
    setAppointmentState({
      selectedService: '',
      selectedDate: null,
      selectedTime: '',
      currentMonth: new Date().getMonth(),
      currentYear: new Date().getFullYear(),
      patientDetails: { name: '', phone: '', email: '' }
    });
  };

  const updateAppointmentState = (updates) => {
    setAppointmentState(prev => ({ ...prev, ...updates }));
  };

  return (
    <div className="relative flex size-full min-h-screen flex-col bg-white group/design-root overflow-x-hidden">
      <div className="layout-container flex h-full grow flex-col">
        <Header onBookAppointment={() => showPage('booking')} onNavigate={showPage} />
        
        <main>
          {currentPage === 'landing' && (
            <LandingPage onBookAppointment={() => showPage('booking')} />
          )}
          {currentPage === 'booking' && (
            <BookingPage 
              state={appointmentState}
              updateState={updateAppointmentState}
              onConfirm={() => showPage('confirmation')}
            />
          )}
          {currentPage === 'confirmation' && (
            <ConfirmationPage 
              state={appointmentState}
              onModify={() => showPage('booking')}
              onReturnHome={() => {
                resetState();
                showPage('landing');
              }}
            />
          )}
        </main>

        <Footer />
      </div>
    </div>
  );
}

export default App;