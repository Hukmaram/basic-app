import React from 'react';

export default function SolarSystem() {
  return (
    <div className="solar-system">
      <div className="sun"></div>
      <div className="orbit orbit-1">
        <div className="planet planet-1"></div>
      </div>
      <div className="orbit orbit-2">
        <div className="planet planet-2"></div>
      </div>
      <style jsx>{`
        .solar-system {
          position: relative;
          width: 300px;
          height: 300px;
          margin: 50px auto;
          background-color: black;
          border-radius: 50%;
        }
        .sun {
          position: absolute;
          top: 50%;
          left: 50%;
          width: 50px;
          height: 50px;
          background-color: yellow;
          border-radius: 50%;
          transform: translate(-50%, -50%);
          box-shadow: 0 0 20px yellow;
        }
        .orbit {
          position: absolute;
          top: 50%;
          left: 50%;
          border: 1px solid rgba(255, 255, 255, 0.2);
          border-radius: 50%;
          transform: translate(-50%, -50%);
        }
        .orbit-1 {
          width: 150px;
          height: 150px;
          animation: orbit 10s linear infinite;
        }
        .orbit-2 {
          width: 250px;
          height: 250px;
          animation: orbit 20s linear infinite;
        }
        .planet {
          position: absolute;
          top: -5px;
          left: 50%;
          width: 10px;
          height: 10px;
          border-radius: 50%;
          transform: translateX(-50%);
        }
        .planet-1 {
          background-color: #00ffff;
        }
        .planet-2 {
          background-color: #cccccc;
        }
        @keyframes orbit {
          from {
            transform: translate(-50%, -50%) rotate(0deg);
          }
          to {
            transform: translate(-50%, -50%) rotate(360deg);
          }
        }
      `}</style>
    </div>
  )
}