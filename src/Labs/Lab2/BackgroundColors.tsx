// src/Labs/Lab2/BackgroundColors.tsx
import React from 'react';
import './index.css';

const BackgroundColors = () => {
  return (
    <div id="wd-css-background-colors">
      <h3 className="wd-bg-color-blue wd-fg-color-white">Background color</h3>
      <p className="wd-bg-color-red wd-fg-color-black">
        The background of this paragraph is red but
        <span className="wd-bg-color-green wd-fg-color-white">
          the background of this text is green and the foreground white
        </span>
      </p>
    </div>
  );
};

export default BackgroundColors;