import React from 'react';
import SocialIcons from './SocialIcons';

function Footer() {
  return (
    <div className="py-5 text-center">
      <SocialIcons />
      <p className="text-sm mt-2 opacity-50">
        &copy; {new Date().getFullYear()} Chris Sanders. All rights reserved.
      </p>
    </div>
  );
}

export default Footer;
