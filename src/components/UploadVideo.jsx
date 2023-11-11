import React, { useState } from 'react';
import { MdVideoCameraBack } from 'react-icons/md';
import VideoPlayer from './VideoPlayer'; // Import your VideoPlayer component here

const UploadVideo = ({ onFileSelect }) => {
  const [isDragging, setIsDragging] = useState(false);
  const [isUploaded, setIsUploaded] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState(null); // State to hold the selected video

  const handleDragEnter = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleFileSelect = (e) => {
    e.preventDefault();
    setIsDragging(false);
    const file = e.target.files[0];
    onFileSelect(file);
    setSelectedVideo(file);
    setIsUploaded(true);
  };

  const handleClearVideo = () => {
    setSelectedVideo(null); // Clear the selected video
    setIsUploaded(false); // Reset the upload status
  };

  return (
    <div
      className={`upload-video-container ${isDragging ? 'dragging' : ''}`}
      onDragEnter={handleDragEnter}
      onDragOver={handleDragEnter}
      onDragLeave={handleDragLeave}
    >
      <MdVideoCameraBack className={`video-icon ${isUploaded ? 'uploaded' : ''}`} />
      <p className='text-white'>
        {isUploaded ? (
          <>
            <VideoPlayer videoFile={selectedVideo} />
            <button onClick={handleClearVideo} className='mt-4' style={{color:"var(--color-green)"}}>Reset Video</button>
          </>
        ) : (
          <>
            Drag your video here or{' '}
            <label className="file-input-label cursor-pointer">
              <span style={{ color: "var(--color-green)" }}>click</span> to select{' '}
              <input
                type="file"
                accept="video/*"
                onChange={handleFileSelect}
                style={{ display: 'none' }}
              />
            </label>
          </>
        )}
      </p>
    </div>
  );
};

export default UploadVideo;
