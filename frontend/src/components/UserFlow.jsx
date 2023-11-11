import React from 'react';

const UserFlowPoint = ({ index, label, text }) => (
  <div className="point">
    <div className="point-index">{index}</div>
    <div className="point-label font-black" style={{color:"var(--color-green)"}}>{label}</div>
    <div className="point-text">{text}</div>
  </div>
);

const UserFlow = () => {
  const userFlowData = [
    {
      index: 1,
      label: 'Step 1',
      text: "Login/SignUp to our Platform.",
    },
    {
      index: 2,
      label: 'Step 2',
      text: "Go to features section and select one option out of 3 i.e Violence Detection,Weapon Detection, and Crime Detection.After that click on Realtime testing button.",
    },
    {
      index: 3,
      label: 'Step 3',
      text: "Upload the video that you want to check and wait while it's getting processed.",
    },
    {
      index: 4,
      label: 'Step 4',
      text: "If there is any anomolous activity in the video it will got detected and Output will be shown on Screen as well as the video that you uploaded.",
    },
    {
      index: 5,
      label: 'Step 5',
      text: "You will also be notified as an sms on the phone number that you gave during registration.",
    },
    {
      index: 6,
      label: 'Step 6',
      text: "Repeat the above steps to check other videos.",
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="mb-15 font-bold text-main mt-10 text-4xl md:text-6xl text-white">
        User Flow
      </div>
      <div className="roadmap text-white max-w-lg">
        {userFlowData.map((item) => (
          <UserFlowPoint
            key={item.index}
            index={item.index}
            label={item.label}
            text={item.text}
          />
        ))}
      </div>
    </div>
  );
};

export default UserFlow;
