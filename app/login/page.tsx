'use client';

import Image from 'next/image';
import { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  return (
    <div className="flex h-screen">
      {/* Left Side - Illustration */}
      <div className="hidden lg:flex w-1/2 bg-[#CF0000] items-center justify-center p-8">
        <div className="relative w-full max-w-[500px] aspect-square">
          <Image
            src="/images/login-illustration.png"
            alt="LRT Illustration"
            fill
            className="object-contain"
          />
        </div>
      </div>

      {/* Right Side - Login Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8 bg-[#F5F5F5]">
        <div className="w-full max-w-[400px] bg-white rounded-2xl p-10 shadow-sm">
          {/* Logo */}
          <div className="mb-8">
            <Image
              src="/images/LOGO LRT SUMSEL.png"
              alt="LRT Logo"
              width={170}
              height={40}
              className="mx-auto"
            />
            <h1 className="text-center text-[#CF0000] text-xl font-bold mt-2">
              Dashboard Admin
            </h1>
          </div>

          {/* Title */}
          <h2 className="text-[18px] font-bold text-[#080808] text-center mb-8 leading-[150%] tracking-[0.5px]">
            Masuk ke akun Anda
          </h2>

          {/* Form */}
          <form className="space-y-6">
            {/* Username */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-[#080808] tracking-[0.5px]">
                Username
              </label>
              <input
                type="text"
                placeholder="Masukan username"
                className="w-full h-[46px] px-5 rounded-lg border border-[#EAEAEA] focus:outline-none focus:ring-2 focus:ring-[#CF0000] text-sm"
              />
            </div>

            {/* Password */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-[#080808] tracking-[0.5px]">
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Masukan password"
                  className="w-full h-[46px] px-5 rounded-lg border border-[#EAEAEA] focus:outline-none focus:ring-2 focus:ring-[#CF0000] text-sm"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500"
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
            </div>

            {/* Remember Me */}
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                id="remember"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
                className="w-4 h-4 rounded border-gray-300 text-[#CF0000] focus:ring-[#CF0000]"
              />
              <label htmlFor="remember" className="text-sm text-gray-600">
                Ingat preferensi saya
              </label>
            </div>

            {/* Login Button */}
            <button
              type="submit"
              className="w-full h-[46px] bg-[#CF0000] text-white rounded-lg font-medium hover:bg-[#B00000] transition-colors"
            >
              Masuk
            </button>

            {/* Forgot Password */}
            <div className="text-center">
              <a href="#" className="text-sm text-gray-600 hover:text-[#CF0000]">
                Lupa Password?
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}