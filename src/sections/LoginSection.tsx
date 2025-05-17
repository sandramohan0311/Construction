import React, { useState } from 'react';
import { fetchLogin } from '@/api/LoginApi';
import { useNavigate } from 'react-router-dom';

interface LoginResponse {
  token: string;
}

const LoginSection: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const data: LoginResponse = await fetchLogin({ email, password });

      // Assuming backend returns { token: '...' }
      localStorage.setItem('token', data.token);
      alert("Login successful!");
      navigate('/admin');  // or wherever you need to go
    } catch (error) {
      console.error("Login failed:", error);
      alert("Invalid email or password.");
    }
  };

  return (
    <div className='lg:h-[390px] lg:w-[800px] h-screen w-full flex flex-col justify-center items-center lg:gap-10 gap-3 bg-white px-5'>
      <p className='text-black text-4xl font-bold'>LOGIN</p>
      <div className="lg:h-[200px] lg:w-[515px] h-auto w-full flex flex-col justify-center items-center lg:gap-5 gap-3 ">
        <input
          className='lg:h-[65px] h-[50px] w-full border-2 rounded-3xl pl-5'
          type="text"
          placeholder='email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          className='lg:h-[65px] h-[50px] w-full border-2 rounded-3xl pl-5'
          type="password"
          placeholder='password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          className='lg:h-[65px] h-[50px] w-full border-2 rounded-3xl bg-black hover:bg-[#141414f0] text-amber-50 font-bold transition-all duration-300'
          onClick={handleLogin}
        >
          login
        </button>
      </div>
    </div>
  );
};

export default LoginSection;
