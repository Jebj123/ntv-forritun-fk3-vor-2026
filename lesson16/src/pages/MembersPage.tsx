import React from 'react'
import celebrate from '../img/cover3.gif';

const MembersPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 rounded-2xl">
      <h1 className='text-3xl font-bold mb-6 text-center'>Velkomin/n í Klúbbinn</h1>
      <img src={celebrate} alt="Celebrate" />
    </div>
  )
}

export default MembersPage