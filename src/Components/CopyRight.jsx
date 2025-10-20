import React from 'react';

const CopyRight = () => {
  return (
    <footer className="border-t border-gray-600 mt-8 pt-4 text-center text-sm text-gray-400 transition-colors duration-300 hover:text-gray-300">
      © {new Date().getFullYear()} Digital Er. All rights reserved.
    </footer>
  );
};

export default CopyRight;
