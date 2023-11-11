import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from './Navbar';
import UploadVideo from './UploadVideo';
import axios from 'axios';

const RealtimeTest = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  const { detectionOption } = useParams();
  const [detectionMessage, setDetectionMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const buttonStyle = {
    backgroundColor: isHovered ? '#27aa8a' : 'var(--color-green)',
    fontWeight: 'bold',
    padding: '10px 20px',
    borderRadius: '8px',
    maxWidth: '350px',
    width: '100%',
    transition: 'background-color 0.3s',
  };

  const handleFileSelect = (file) => {
    setSelectedFile(file);
  };

  const handleDetect = async () => {
    if (selectedFile) {
      const formData = new FormData();
      formData.append('file', selectedFile);
  
      setIsLoading(true);
  
      try {
        const response = await axios.post(`http://localhost:5000/feature/${detectionOption}/test`, formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });
  
        console.log(response.data);
        setDetectionMessage(response.data.detection_message);
      } catch (error) {
        console.error(error);
        setDetectionMessage("Error Occurred!!");
      } finally {
        setIsLoading(false);
      }
    }
  };
  

  return (
    <>
      <Navbar />
      <div className="text-center">
        <h2 className="text-4xl md:text-6xl text-white font-bold mt-10 mb-7">
          Test your Video
        </h2>
        <UploadVideo onFileSelect={handleFileSelect} />
        <div>
          <div className='mb-6'>
          <button
            className="mt-10 text-white-900 font-semibold py-2 px-4 rounded w-full max-w-[350px]"
            style={buttonStyle}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onClick={handleDetect}
            disabled={isLoading}
          >
            Detect
          </button>
          {detectionMessage && (
          <div className='mt-4 text-white font-semibold text-xl'>
            Detection Message: {detectionMessage}
          </div>
        )}
          </div>
          
          {isLoading && (
            <div
              style={{
                position: 'fixed',
                top: '0',
                left: '0',
                width: '100%',
                height: '100%',
                background: 'rgba(0, 0, 0, 0.5)',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                zIndex: '9999', 
              }}
            >
              <div
                style={{
                  color: '#4AF3CB',
                  fontSize: '24px',
                }}
              >
                Loading...
              </div>
            </div>
          )}
        </div>
        
      </div>
    </>
  );
};

export default RealtimeTest;
