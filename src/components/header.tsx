"use client";

import { Button } from "@/components/ui/button";
import { Search, Menu, User, Phone, MessageCircle } from "lucide-react";
import { useState } from "react";
import Link from "next/link";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-slate-800 text-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo and Brand */}
          <div className="flex items-center space-x-4 rtl:space-x-reverse">
            <Link href="/" className="flex items-center space-x-2 rtl:space-x-reverse">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">ع</span>
              </div>
              <span className="text-xl font-bold">عقار الأردن</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8 rtl:space-x-reverse">
            <Link href="/" className="hover:text-blue-300 transition-colors">الرئيسية</Link>
            <Link href="/properties" className="hover:text-blue-300 transition-colors">العقارات</Link>
            <Link href="/projects" className="hover:text-blue-300 transition-colors">المشاريع</Link>
            <Link href="/agencies" className="hover:text-blue-300 transition-colors">الوكالات</Link>
            <Link href="/news" className="hover:text-blue-300 transition-colors">الأخبار</Link>
            <Link href="/about" className="hover:text-blue-300 transition-colors">من نحن</Link>
          </nav>

          {/* Action Buttons */}
          <div className="flex items-center space-x-4 rtl:space-x-reverse">
            {/* Contact Buttons */}
            <div className="hidden sm:flex items-center space-x-2 rtl:space-x-reverse">
              <Button variant="ghost" size="sm" className="text-white hover:bg-slate-700">
                <Phone className="w-4 h-4 ml-2 rtl:ml-0 rtl:mr-2" />
                اتصل
              </Button>
              <Button variant="ghost" size="sm" className="text-white hover:bg-slate-700">
                <MessageCircle className="w-4 h-4 ml-2 rtl:ml-0 rtl:mr-2" />
                محادثة
              </Button>
            </div>

            {/* User Account */}
            <Button variant="ghost" size="sm" className="text-white hover:bg-slate-700">
              <User className="w-4 h-4 ml-2 rtl:ml-0 rtl:mr-2" />
              <span className="hidden sm:inline">حسابي</span>
            </Button>

            {/* Add Property Button */}
            <Button className="bg-blue-600 hover:bg-blue-700 text-white">
              + أضف عقار
            </Button>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="sm"
              className="md:hidden text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Menu className="w-5 h-5" />
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-slate-700 py-4 px-2 rounded-b-lg">
            <nav className="flex flex-col space-y-2">
              <Link href="/" className="py-2 px-4 hover:bg-slate-600 rounded transition-colors">الرئيسية</Link>
              <Link href="/properties" className="py-2 px-4 hover:bg-slate-600 rounded transition-colors">العقارات</Link>
              <Link href="/projects" className="py-2 px-4 hover:bg-slate-600 rounded transition-colors">المشاريع</Link>
              <Link href="/agencies" className="py-2 px-4 hover:bg-slate-600 rounded transition-colors">الوكالات</Link>
              <Link href="/news" className="py-2 px-4 hover:bg-slate-600 rounded transition-colors">الأخبار</Link>
              <Link href="/about" className="py-2 px-4 hover:bg-slate-600 rounded transition-colors">من نحن</Link>
              <div className="border-t border-slate-600 mt-2 pt-2">
                <div className="flex space-x-2 rtl:space-x-reverse px-4">
                  <Button variant="ghost" size="sm" className="text-white flex-1">
                    <Phone className="w-4 h-4 ml-2 rtl:ml-0 rtl:mr-2" />
                    اتصل
                  </Button>
                  <Button variant="ghost" size="sm" className="text-white flex-1">
                    <MessageCircle className="w-4 h-4 ml-2 rtl:ml-0 rtl:mr-2" />
                    محادثة
                  </Button>
                </div>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}