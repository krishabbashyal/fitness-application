import React from 'react'
import { useState, useEffect } from 'react';
import { supabase } from '../library/supabase';

const GreetingBar = () => {
  const [email, setEmail] = useState(null);

  const getCurrentUser = async () => {
    const {
      data: { user },
    } = await supabase.auth.getUser();
    setEmail(user.email);
  };

  useEffect(() => {
    getCurrentUser();
  }, []);
  return (
    <div>
      <h1 className='text-[30px] font-semibold my-3'>Hi, {email}.</h1>
    </div>
  )
}

export default GreetingBar