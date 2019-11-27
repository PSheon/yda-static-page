import React from 'react';

const LogoCryptoIcon = ({ TYPE, hideText = false, ...props }) => {
  const typeTitle = TYPE.toUpperCase();
  const typeClass = TYPE.toLowerCase();

  return <b {...props}><span className={`icon icon-${typeClass}`}></span> {!hideText && typeTitle}</b>;
}

export default LogoCryptoIcon;
