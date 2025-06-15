import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import Input from '../../components/Input/Input';
import starIcon from '../../assets/Vector 10.svg';
import blueShape from '../../assets/v1027-027a 2.svg';
import flowerShape from '../../assets/v1027-027a 2.png';
import profileImg from "../../assets/Confident Fashion Statement.png";
import avatar1 from '../../assets/avaterh.png';

const loginSchema = z.object({
  email: z.string().email('Invalid email address'),
  password: z.string().min(8, 'Password must be at least 8 characters'),
});

type LoginFormValues = z.infer<typeof loginSchema>;

const Login: React.FC = () => {
  const [isLogin, setIsLogin] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = (data: LoginFormValues) => {
    if (isLogin) {
      // Handle login
      console.log('Login:', data);
    } else {
      // Handle sign up (add first/last name handling as needed)
      console.log('Sign up:', data);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#fefcfb] p-4">
      <div className="md:h-[724px] flex rounded-[24px] shadow-[0_0_0_1.5px_#e6e0d6,0_2px_5px_0_rgba(39,34,27,0.2)] bg-[#fefcfb] overflow-hidden">
        {/* Left: Form - Increased width */}
        <div className="flex flex-col justify-center w-full md:w-[500px] px-10 md:px-12 py-8 gap-3 md:gap-10">
          <div className="flex flex-col gap-1 md:gap-2">
            <span className="text-[16px] text-[#868c98]">{isLogin ? 'Login to your account' : 'Sign up as a creator'}</span>
            <span className="text-[20px] md:text-[28px] text-black font-normal">{isLogin ? 'Welcome back!' : `Let's get your account set up`}</span>
          </div>
          <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-10">
            {/* Name fields (only for sign up) */}
            {!isLogin && (
              <div className="flex flex-col sm:flex-row gap-[24px]">
                {/* First Name */}
                <div className="flex-1 flex flex-col gap-2">
                  <label className="text-[#31344a] text-base text-left">First name</label>
                  <div className="flex flex-col gap-2">
                    <input
                      type="text"
                      name="firstName"
                      placeholder="Samuel"
                      className="w-full px-3 py-2 rounded-[6px] border border-[#d0d1d4] text-[#9297a2] focus:outline-none focus:border-[#034d28] focus:ring-1 focus:ring-[#034d28] bg-white"
                    />
                  </div>
                </div>
                {/* Last Name */}
                <div className="flex-1 flex flex-col gap-2">
                  <label className="text-[#31344a] text-base text-left">Last name</label>
                  <div className="flex flex-col gap-2">
                    <input
                      type="text"
                      name="lastName"
                      placeholder="mensah"
                      className="w-full px-3 py-2 rounded-[6px] border border-[#d0d1d4] text-[#9297a2] focus:outline-none focus:border-[#034d28] focus:ring-1 focus:ring-[#034d28] bg-white"
                    />
                  </div>
                </div>
              </div>
            )}
            {/* Email */}
            <Input
              label="Email"
              type="email"
              name="email"
              register={register('email')}
              placeholder="Samuel@fanslink.com"
              error={errors.email}
            />
            {/* Password */}
            <Input
              label="Password"
              type="password"
              name="password"
              register={register('password')}
              placeholder="••••••••••••••••"
              error={errors.password}
              helperText={
                !isLogin
                  ? 'Password must be at least 8 characters long and include uppercase, lowercase, numbers, and special characters.'
                  : undefined
              }
            />
            {/* Button */}
            <button
              type="submit"
              className="w-full bg-[#034d28] text-[#fceecb] font-medium py-3 rounded-full hover:bg-[#056c3a] transition-colors text-lg mt-2 shadow-none"
              style={{ borderRadius: 555 }}
            >
              {isLogin ? 'Login' : 'Sign me up'}
            </button>
            {/* Toggle link */}
            <div className="text-center mt-2">
              {isLogin ? (
                <span className="text-sm text-[#868c98]">Don't have an account?{' '}
                  <button type="button" className="text-[#034d28] font-medium underline" onClick={() => setIsLogin(false)}>
                    Sign up
                  </button>
                </span>
              ) : (
                <span className="text-sm text-[#868c98]">Already have an account?{' '}
                  <button type="button" className="text-[#034d28] font-medium underline" onClick={() => setIsLogin(true)}>
                    Login
                  </button>
                </span>
              )}
            </div>
          </form>
        </div>
        {/* Right: Image/Info Panel - Adjusted width to maintain balance */}
        <div className="hidden md:flex flex-col justify-between w-[360px] p-10 relative h-full">
          {/* Gradient BG */}
          <div className="absolute inset-0 rounded-[16px] z-0" style={{background: 'linear-gradient(90deg, rgba(212,237,199,0.95) 0%, rgba(169,225,118,0.9) 70%)'}}></div>
          {/* Decorative SVGs */}
          <img src={starIcon} alt="star" className="absolute top-[144px] right-[6px] w-[47px] h-[47px] z-10" />
          <img src={blueShape} alt="blue shape" className="absolute left-[137px] top-[312px] w-[158px] h-[158px] z-10" />
          <img src={flowerShape} alt="flower" className="absolute left-[173px] top-[223px] w-[118px] h-[60px] z-10 rotate-[16deg]" />
          <img src={profileImg} alt="profile" className="absolute left-[24px] top-[426px] w-[272px] h-[200px] rounded-[10px] object-cover z-10" />
          <img src={starIcon} alt="star2" className="absolute left-[10px] top-[377px] w-[70px] h-[70px] z-10" />
          {/* Info Card */}
          <div className="relative z-20 flex flex-col gap-3 mt-6 ml-6">
            <div className="flex flex-col gap-1">
              <span className="text-[40px] font-bold text-[#0a4538] leading-none">Amarae</span>
              <span className="text-lg text-[#0a4538]">Musician, songwriter & producer</span>
            </div>
            {/* Avatar group and followers */}
            <div className="flex items-center gap-4 mt-2">
              <div className="flex -space-x-3">
                <img src={avatar1} alt="avatar1" className="w-8 h-8 rounded-full border-2 border-white z-10" />
                <img src={avatar1} alt="avatar2" className="w-8 h-8 rounded-full border-2 border-white z-10" />
                <img src={avatar1} alt="avatar3" className="w-8 h-8 rounded-full border-2 border-white z-10" />
                <img src={avatar1} alt="avatar4" className="w-8 h-8 rounded-full border-2 border-white z-10" />
                {/* +9 badge */}
                <div className="w-8 h-8 rounded-full bg-[#f6f8fa] border-2 border-white flex items-center justify-center text-[#0a0d14] text-sm font-semibold z-10">+9</div>
              </div>
              <span className="text-[#3e6d62] text-base font-medium">+200,000 <span className="italic text-[#3e6d62] font-normal">followers</span></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login; 