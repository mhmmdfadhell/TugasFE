import React from 'react';
import Label from '../../atom/Label';

export default function Footer() {
  return (
    <nav className='bg-blue-500 items-center p-5 fixed bottom-0 w-full'>
      <Label text="Project Front End" />
      <p className="text-white font-bold text-xl">Punya Padel</p>
    </nav>
  );
}
