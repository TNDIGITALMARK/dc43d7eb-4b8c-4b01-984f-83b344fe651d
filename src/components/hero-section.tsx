"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, MapPin } from "lucide-react";
import { useState } from "react";

export function HeroSection() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <section className="hero-gradient py-12 px-4 relative overflow-hidden">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">

          {/* Text Content */}
          <div className="text-center lg:text-right text-white space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              <span className="block">منصة الحلول الشاملة في مجال العقارات الليبية</span>
            </h1>

            <p className="text-xl text-blue-100 max-w-2xl">
              منصة عقارية شاملة تضم أكثر من 40 مدينة ليبية لخدمات البيع والشراء والإيجار والمقايضة
            </p>

            {/* Search Bar */}
            <div className="search-container max-w-lg mx-auto lg:mx-0 p-4 rounded-lg">
              <div className="flex items-center space-x-2 rtl:space-x-reverse">
                <div className="flex-1 relative">
                  <Input
                    placeholder="ابحث عن العقار المناسب لك..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pr-10 rtl:pr-4 rtl:pl-10 text-right"
                  />
                  <MapPin className="w-5 h-5 absolute left-3 rtl:left-auto rtl:right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                </div>
                <Button className="bg-blue-600 hover:bg-blue-700 shrink-0">
                  <Search className="w-4 h-4 ml-2 rtl:ml-0 rtl:mr-2" />
                  ابحث
                </Button>
              </div>

              {/* Quick Filter Tags */}
              <div className="flex flex-wrap gap-2 mt-3 justify-center lg:justify-start">
                <Button variant="outline" size="sm" className="text-xs">شقق للبيع</Button>
                <Button variant="outline" size="sm" className="text-xs">فلل للإيجار</Button>
                <Button variant="outline" size="sm" className="text-xs">أراضي للبيع</Button>
                <Button variant="outline" size="sm" className="text-xs">مكاتب تجارية</Button>
              </div>
            </div>
          </div>

          {/* Mobile Mockups - Based on Design Reference */}
          <div className="flex justify-center lg:justify-end">
            <div className="mobile-mockup relative">
              <div className="flex items-end space-x-4 rtl:space-x-reverse">

                {/* Left Mobile */}
                <div className="relative">
                  <div className="w-48 h-96 bg-white rounded-2xl shadow-2xl p-4 transform rotate-3 hover:rotate-0 transition-transform duration-300">
                    <div className="h-full bg-gradient-to-b from-gray-100 to-gray-50 rounded-xl p-3">
                      {/* Status Bar */}
                      <div className="h-6 bg-gray-300 rounded-t-lg mb-2"></div>

                      {/* Map Area */}
                      <div className="h-32 bg-blue-200 rounded-lg mb-2 relative">
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-300 to-blue-500 rounded-lg opacity-60"></div>
                        <div className="absolute top-2 right-2 w-6 h-6 bg-red-500 rounded-full flex items-center justify-center">
                          <div className="w-2 h-2 bg-white rounded-full"></div>
                        </div>
                      </div>

                      {/* Property List */}
                      <div className="space-y-2">
                        <div className="h-16 bg-white rounded-lg shadow-sm p-2 flex">
                          <div className="w-12 h-12 bg-gray-300 rounded mr-2 rtl:mr-0 rtl:ml-2"></div>
                          <div className="flex-1">
                            <div className="h-2 bg-gray-400 rounded mb-1"></div>
                            <div className="h-2 bg-gray-300 rounded w-3/4"></div>
                          </div>
                        </div>
                        <div className="h-16 bg-white rounded-lg shadow-sm p-2 flex">
                          <div className="w-12 h-12 bg-gray-300 rounded mr-2 rtl:mr-0 rtl:ml-2"></div>
                          <div className="flex-1">
                            <div className="h-2 bg-gray-400 rounded mb-1"></div>
                            <div className="h-2 bg-gray-300 rounded w-2/3"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Center Mobile (Main) */}
                <div className="relative z-10">
                  <div className="w-56 h-[400px] bg-white rounded-2xl shadow-2xl p-4">
                    <div className="h-full bg-gradient-to-b from-gray-50 to-white rounded-xl p-3">
                      {/* Header */}
                      <div className="h-8 bg-blue-600 rounded-lg mb-2 flex items-center justify-center">
                        <div className="text-xs text-white font-semibold">سوق عقارات ليبيا</div>
                      </div>

                      {/* Featured Property */}
                      <div className="h-32 bg-gray-200 rounded-lg mb-3 relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-br from-amber-100 to-amber-200"></div>
                        <div className="absolute bottom-2 right-2 bg-blue-600 text-white text-xs px-2 py-1 rounded">
                          للبيع
                        </div>
                      </div>

                      {/* Property Info */}
                      <div className="space-y-2">
                        <div className="h-3 bg-gray-800 rounded w-3/4"></div>
                        <div className="h-2 bg-gray-400 rounded w-1/2"></div>
                        <div className="flex justify-between items-center">
                          <div className="h-2 bg-gray-300 rounded w-1/3"></div>
                          <div className="text-xs text-blue-600 font-semibold">$250,000</div>
                        </div>
                      </div>

                      {/* Action Buttons */}
                      <div className="flex space-x-2 rtl:space-x-reverse mt-4">
                        <div className="flex-1 h-6 bg-blue-600 rounded"></div>
                        <div className="flex-1 h-6 bg-green-500 rounded"></div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right Mobile */}
                <div className="relative">
                  <div className="w-48 h-96 bg-white rounded-2xl shadow-2xl p-4 transform -rotate-3 hover:rotate-0 transition-transform duration-300">
                    <div className="h-full bg-gradient-to-b from-gray-100 to-gray-50 rounded-xl p-3">
                      {/* Status Bar */}
                      <div className="h-6 bg-gray-300 rounded-t-lg mb-2"></div>

                      {/* User Profile */}
                      <div className="flex items-center mb-3">
                        <div className="w-8 h-8 bg-blue-500 rounded-full mr-2 rtl:mr-0 rtl:ml-2"></div>
                        <div className="flex-1">
                          <div className="h-2 bg-gray-400 rounded mb-1 w-3/4"></div>
                          <div className="h-1 bg-gray-300 rounded w-1/2"></div>
                        </div>
                      </div>

                      {/* My Properties */}
                      <div className="space-y-2">
                        <div className="h-20 bg-white rounded-lg shadow-sm p-2">
                          <div className="h-2 bg-green-500 rounded mb-2 w-1/4"></div>
                          <div className="h-1 bg-gray-300 rounded mb-1"></div>
                          <div className="h-1 bg-gray-300 rounded w-2/3"></div>
                        </div>
                        <div className="h-20 bg-white rounded-lg shadow-sm p-2">
                          <div className="h-2 bg-blue-500 rounded mb-2 w-1/3"></div>
                          <div className="h-1 bg-gray-300 rounded mb-1"></div>
                          <div className="h-1 bg-gray-300 rounded w-3/4"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Background Decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-white opacity-5 rounded-full"></div>
        <div className="absolute -bottom-32 -left-32 w-64 h-64 bg-white opacity-5 rounded-full"></div>
      </div>
    </section>
  );
}