import { useState, useEffect } from 'react';
import { Alert } from 'react-bootstrap';

const TimeDisplay = ({ lastAdded }) => {
  const [timeAgo, setTimeAgo] = useState("");
  
  useEffect(() => {
    if (!lastAdded) return;
    
    const updateTimeAgo = () => {
      const seconds = Math.floor((new Date() - lastAdded) / 1000);
      
      if (seconds < 60) {
        setTimeAgo(`${seconds} detik yang lalu`);
      } else if (seconds < 3600) {
        const minutes = Math.floor(seconds / 60);
        setTimeAgo(`${minutes} menit yang lalu`);
      } else {
        const hours = Math.floor(seconds / 3600);
        setTimeAgo(`${hours} jam yang lalu`);
      }
    };
    
    // Update setiap detik
    updateTimeAgo();
    const interval = setInterval(updateTimeAgo, 1000);
    
    return () => clearInterval(interval);
  }, [lastAdded]);
  
  if (!lastAdded) return null;
  
  return (
    <Alert variant="info" className="d-flex align-items-center">
      <div className="me-2">
        <i className="bi bi-clock-history"></i>
      </div>
      <div>
        Catatan terakhir ditambahkan: <strong>{timeAgo}</strong>
      </div>
    </Alert>
  );
};

export default TimeDisplay;