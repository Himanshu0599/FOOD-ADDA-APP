import React, { useState } from 'react';

function SnackBarAlert(props) {
  return (
   <div className={`flex justify-center inline-block fixed bottom-0 right-0 z-20 p-4 mb-4 mr-4 bg-[#1AC84B] border-t border-b border-green-400 text-white px-4 py-3 rounded-md ${props.showSnackbar ? 'block' : 'hidden'}`}>
      <p className="font-bold">{props.message}</p>
    </div>
  );
}

export default SnackBarAlert;
