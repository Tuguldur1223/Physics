import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import PhoneHeader from '../components/Header/phoneHeader';

function SignUp() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle sign-up logic here
    console.log('Username:', username);
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <div className="w-full sm:min-h-screen h-full flex flex-col items-center sm:bg-gradient-to-b from-[#101214] from-20% to-[#1B1D20] to-80%">
      
      <div className='relative w-10/12 '>
        <button onClick={() => navigate(-1)} className="flex absolute left-0 top-10 w-2/12 items-center"> 
            <div className='w-10 h-10 rounded-full bg-[#08472B] flex items-center justify-center'>
                <img src="../../../public/leftArrow.svg" alt="leftArrow"/>
            </div>
        </button>
      </div>
      <form onSubmit={handleSubmit} className='flex flex-col gap-3 mt-64'>
        <input 
          type='text' 
          placeholder='Username' 
          value={username} 
          onChange={(e) => setUsername(e.target.value)} 
          className='w-64 h-10 text-white p-2 rounded-lg bg-[#021a09] border-2 border-solid border-green-700'
          required
        />
        <input 
          type='email' 
          placeholder='Email' 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
          className='w-64 h-10 text-white p-2 rounded-lg bg-[#021a09] border-2 border-solid border-green-700'
          required
        />
        <input 
          type='password' 
          placeholder='Password' 
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
          className='w-64 h-10 text-white p-2 rounded-lg bg-[#021a09] border-2 border-solid border-green-700'
          required
        />
        <button type='submit' className='bg-green-700 rounded-lg text-white p-2'>
          Sign Up
        </button>
      </form>
    </div>
  );
}

export default SignUp;
