import React, { useRef, useEffect } from 'react';

const VideoPlayer = ({ videoFile }) => {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoFile && videoRef.current) {
      // Set the video source to the selected video file
      videoRef.current.src = URL.createObjectURL(videoFile);

      // Add an event listener to handle when the video is loaded and ready to play
      videoRef.current.onloadedmetadata = () => {
        videoRef.current.play().catch((error) => {
          console.error('Error playing video:', error);
        });
      };
    }
  }, [videoFile]);

  return (
    <div className="video-player">
      <video ref={videoRef} controls width="300" height="300">
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default VideoPlayer;
