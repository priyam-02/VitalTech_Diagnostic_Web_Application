// import React from 'react';
// import Layout from '../Layout/Layout';

// function Home() {
//   return (
//     <Layout>
//       <div className="home-container">
//         <h2>Welcome to the Vital Tech Health Portal</h2>
//         <p>This is the central hub for connecting doctors with their patients efficiently.</p>
//         <div className="features">
//           <div className="feature-card">
//             <h3>Connect with a Doctor</h3>
//             <p>Instantly book appointments with your preferred medical specialists.</p>
//           </div>
//           <div className="feature-card">
//             <h3>Medical Records</h3>
//             <p>Access your entire medical history and lab results anytime, anywhere.</p>
//           </div>
//           <div className="feature-card">
//             <h3>24/7 Support</h3>
//             <p>Get medical advice and support from professionals round the clock.</p>
//           </div>
//         </div>
//         <button className="action-button">Learn More</button>
//       </div>
//     </Layout>
//   );
// }

// export default Home;
import React, { useState } from 'react';
import Layout from '../Layout/Layout';
import './Home.css';  // Make sure your CSS file path is correct

import doctorImage from './images/doctor.jpg';  // Sample image path
import recordsImage from './images/records.jpg';
import supportImage from './images/support.jpg';
import headerImage from './images/header.jpg';

function Modal({ isOpen, onClose, children }) {
  if (!isOpen) return null;

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close-button" onClick={onClose}>&times;</span>
        {children}
      </div>
    </div>
  );
}

function Home() {
  const [isModalOpen, setModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState("");

  const handleCardClick = (content) => {
    setModalContent(content);
    setModalOpen(true);
  };

  return (
    <Layout>
      <div className="home-container" style={{ background: '#f0f0f0' }}>
        <h2>Welcome to the Vital Tech Health Portal</h2>
        <p>This is the central hub for connecting doctors with their patients efficiently.</p>
        <div className="features">
          <div className="feature-card" onClick={() => handleCardClick("Detailed information about scheduling appointments with doctors.")}>
            <img src={doctorImage} alt="Doctor" className="card-image" />
            <h3>Connect with a Doctor</h3>
            <p>Instantly book appointments with your preferred medical specialists.</p>
          </div>
          <div className="feature-card" onClick={() => handleCardClick("View and manage your medical records securely online.")}>
            <img src={recordsImage} alt="Medical Records" className="card-image" />
            <h3>Medical Records</h3>
            <p>Access your entire medical history and lab results anytime, anywhere.</p>
          </div>
          <div className="feature-card" onClick={() => handleCardClick("Contact our 24/7 support team for any medical inquiries.")}>
            <img src={supportImage} alt="Support" className="card-image" />
            <h3>24/7 Support</h3>
            <p>Get medical advice and support from professionals round the clock.</p>
          </div>
        </div>
        <button className="action-button">Learn More</button>
      </div>
    </Layout>
  );
}

export default Home;

