"use client";

import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold text-primary">
            عقلية AQLIYA
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            <Link href="/" className="text-gray-700 hover:text-primary transition">
              الرئيسية
            </Link>
            <Link href="/dashboard" className="text-gray-700 hover:text-primary transition">
              لوحة التحكم
            </Link>
            <Link href="/auth/login" className="text-gray-700 hover:text-primary transition">
              تسجيل الدخول
            </Link>
            <Link
              href="/auth/register"
              className="bg-primary text-white px-6 py-2 rounded-lg hover:bg-primary-dark transition"
            >
              التسجيل
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-700"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t pt-4">
            <div className="flex flex-col gap-4">
              <Link
                href="/"
                className="text-gray-700 hover:text-primary transition"
                onClick={() => setIsMenuOpen(false)}
              >
                الرئيسية
              </Link>
              <Link
                href="/dashboard"
                className="text-gray-700 hover:text-primary transition"
                onClick={() => setIsMenuOpen(false)}
              >
                لوحة التحكم
              </Link>
              <Link
                href="/auth/login"
                className="text-gray-700 hover:text-primary transition"
                onClick={() => setIsMenuOpen(false)}
              >
                تسجيل الدخول
              </Link>
              <Link
                href="/auth/register"
                className="bg-primary text-white px-6 py-2 rounded-lg hover:bg-primary-dark transition text-center"
                onClick={() => setIsMenuOpen(false)}
              >
                التسجيل
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
