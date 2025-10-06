"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { PropertyCard } from "@/components/property-card";
import { Search, Filter, MapPin, Grid3X3, List, Map } from "lucide-react";
import { useState } from "react";

// Mock property data
const mockProperties = [
  {
    id: 1,
    title: "فيلا عصرية في بنغازي",
    location: "بنغازي، ليبيا",
    price: "LYD 1,500,000",
    type: "villa",
    status: "for-sale",
    bedrooms: 4,
    bathrooms: 3,
    area: 350,
    image: "/public/currentImgContext/ai-generated-preview.png",
    featured: true
  },
  {
    id: 2,
    title: "شقة حديثة وسط المدينة",
    location: "طرابلس، ليبيا",
    price: "LYD 800,000",
    type: "apartment",
    status: "for-sale",
    bedrooms: 3,
    bathrooms: 2,
    area: 120,
    image: "/public/currentImgContext/ai-generated-preview.png",
    featured: false
  },
  {
    id: 3,
    title: "بيت شعبي أصيل",
    location: "مصراتة، ليبيا",
    price: "LYD 650,000",
    type: "house",
    status: "for-sale",
    bedrooms: 5,
    bathrooms: 3,
    area: 200,
    image: "/public/currentImgContext/ai-generated-preview.png",
    featured: true
  },
  {
    id: 4,
    title: "مكتب تجاري مميز",
    location: "بنغازي، ليبيا",
    price: "LYD 2,500 / شهر",
    type: "commercial",
    status: "for-rent",
    bedrooms: 0,
    bathrooms: 2,
    area: 80,
    image: "/public/currentImgContext/ai-generated-preview.png",
    featured: false
  },
  {
    id: 5,
    title: "أرض سكنية في منطقة راقية",
    location: "الزاوية، ليبيا",
    price: "LYD 300,000",
    type: "land",
    status: "for-sale",
    bedrooms: 0,
    bathrooms: 0,
    area: 500,
    image: "/public/currentImgContext/ai-generated-preview.png",
    featured: false
  },
  {
    id: 6,
    title: "شقة للإيجار بالقرب من الجامعة",
    location: "طرابلس، ليبيا",
    price: "LYD 1,800 / شهر",
    type: "apartment",
    status: "for-rent",
    bedrooms: 2,
    bathrooms: 1,
    area: 85,
    image: "/public/currentImgContext/ai-generated-preview.png",
    featured: false
  }
];

const libyanCities = [
  "طرابلس", "بنغازي", "مصراتة", "الزاوية", "صبراتة", "زليتن", "الخمس",
  "تاجوراء", "زوارة", "غريان", "يفرن", "ناصر", "ترهونة", "بني وليد",
  "سرت", "هون", "اجدابيا", "المرج", "القبة", "شحات", "درنة", "طبرق",
  "البيضاء", "رأس لانوف", "بريقة", "مرسى البريقة", "السدادة", "الكفرة",
  "تازربو", "ربيانة", "الجوف", "أوجلة", "جالو", "إجخرة", "الواحات",
  "سبها", "مرزق", "أوباري", "غدامس", "غات", "القطرون"
];

export function PropertyDiscovery() {
  const [viewMode, setViewMode] = useState<'grid' | 'list' | 'map'>('grid');
  const [filterType, setFilterType] = useState('all');
  const [filterStatus, setFilterStatus] = useState('all');
  const [filterCity, setFilterCity] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredProperties = mockProperties.filter(property => {
    if (filterType !== 'all' && property.type !== filterType) return false;
    if (filterStatus !== 'all' && property.status !== filterStatus) return false;
    if (filterCity !== 'all' && !property.location.includes(filterCity)) return false;
    if (searchTerm && !property.title.includes(searchTerm)) return false;
    return true;
  });

  return (
    <section className="py-8 bg-gray-50" id="تصفح-الاقار">
      <div className="container mx-auto px-4">

        {/* Section Header */}
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">تصفح الأراضي</h2>
          <p className="text-gray-600">اكتشف مجموعة واسعة من العقارات في جميع أنحاء ليبيا</p>
        </div>

        {/* Advanced Search and Filters */}
        <div className="bg-white rounded-lg shadow-sm border p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 gap-4 items-end">

            {/* Search Input */}
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-2">البحث</label>
              <div className="relative">
                <Input
                  placeholder="ابحث عن العقار..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pr-10 rtl:pr-4 rtl:pl-10"
                />
                <Search className="w-4 h-4 absolute left-3 rtl:left-auto rtl:right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              </div>
            </div>

            {/* Property Type Filter */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">نوع العقار</label>
              <Select value={filterType} onValueChange={setFilterType}>
                <SelectTrigger>
                  <SelectValue placeholder="جميع الأنواع" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">جميع الأنواع</SelectItem>
                  <SelectItem value="apartment">شقق</SelectItem>
                  <SelectItem value="villa">فلل</SelectItem>
                  <SelectItem value="house">بيوت</SelectItem>
                  <SelectItem value="land">أراضي</SelectItem>
                  <SelectItem value="commercial">تجاري</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Status Filter */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">حالة العقار</label>
              <Select value={filterStatus} onValueChange={setFilterStatus}>
                <SelectTrigger>
                  <SelectValue placeholder="جميع الحالات" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">جميع الحالات</SelectItem>
                  <SelectItem value="for-sale">للبيع</SelectItem>
                  <SelectItem value="for-rent">للإيجار</SelectItem>
                  <SelectItem value="for-exchange">للمقايضة</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* City Filter */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">المدينة</label>
              <Select value={filterCity} onValueChange={setFilterCity}>
                <SelectTrigger>
                  <SelectValue placeholder="جميع المدن" />
                </SelectTrigger>
                <SelectContent className="max-h-60">
                  <SelectItem value="all">جميع المدن</SelectItem>
                  {libyanCities.map((city) => (
                    <SelectItem key={city} value={city}>{city}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Search Button */}
            <div>
              <Button className="w-full bg-blue-600 hover:bg-blue-700">
                <Search className="w-4 h-4 ml-2 rtl:ml-0 rtl:mr-2" />
                ابحث
              </Button>
            </div>
          </div>

          {/* Quick Filters */}
          <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t">
            <span className="text-sm font-medium text-gray-700 ml-2 rtl:ml-0 rtl:mr-2">فلاتر سريعة:</span>
            <Button
              variant={filterType === 'villa' ? 'default' : 'outline'}
              size="sm"
              className="filter-button"
              onClick={() => setFilterType(filterType === 'villa' ? 'all' : 'villa')}
            >
              فلل فاخرة
            </Button>
            <Button
              variant={filterStatus === 'for-rent' ? 'default' : 'outline'}
              size="sm"
              className="filter-button"
              onClick={() => setFilterStatus(filterStatus === 'for-rent' ? 'all' : 'for-rent')}
            >
              للإيجار
            </Button>
            <Button
              variant={filterType === 'commercial' ? 'default' : 'outline'}
              size="sm"
              className="filter-button"
              onClick={() => setFilterType(filterType === 'commercial' ? 'all' : 'commercial')}
            >
              عقارات تجارية
            </Button>
          </div>
        </div>

        {/* View Mode Toggle & Results Count */}
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center space-x-2 rtl:space-x-reverse">
            <span className="text-gray-600">
              تم العثور على {filteredProperties.length} عقار
            </span>
            {filteredProperties.length > 0 && (
              <Badge variant="secondary">{filteredProperties.length} نتيجة</Badge>
            )}
          </div>

          <div className="flex items-center space-x-2 rtl:space-x-reverse">
            <span className="text-sm text-gray-600">طريقة العرض:</span>
            <div className="flex border rounded-lg overflow-hidden">
              <Button
                variant={viewMode === 'grid' ? 'default' : 'ghost'}
                size="sm"
                onClick={() => setViewMode('grid')}
                className="rounded-none"
              >
                <Grid3X3 className="w-4 h-4" />
              </Button>
              <Button
                variant={viewMode === 'list' ? 'default' : 'ghost'}
                size="sm"
                onClick={() => setViewMode('list')}
                className="rounded-none"
              >
                <List className="w-4 h-4" />
              </Button>
              <Button
                variant={viewMode === 'map' ? 'default' : 'ghost'}
                size="sm"
                onClick={() => setViewMode('map')}
                className="rounded-none"
              >
                <Map className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>

        {/* Properties Grid/List */}
        {viewMode === 'grid' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProperties.map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>
        )}

        {viewMode === 'list' && (
          <div className="space-y-4">
            {filteredProperties.map((property) => (
              <PropertyCard key={property.id} property={property} layout="horizontal" />
            ))}
          </div>
        )}

        {viewMode === 'map' && (
          <div className="bg-blue-100 h-96 rounded-lg flex items-center justify-center">
            <div className="text-center text-blue-600">
              <Map className="w-16 h-16 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">عرض الخريطة</h3>
              <p>سيتم تطوير عرض الخريطة قريباً</p>
            </div>
          </div>
        )}

        {/* Load More Button */}
        {filteredProperties.length > 0 && (
          <div className="text-center mt-8">
            <Button variant="outline" className="px-8">
              عرض المزيد من العقارات
            </Button>
          </div>
        )}

        {/* No Results */}
        {filteredProperties.length === 0 && (
          <div className="text-center py-12">
            <div className="text-gray-400 mb-4">
              <Filter className="w-16 h-16 mx-auto mb-4" />
            </div>
            <h3 className="text-xl font-semibold text-gray-700 mb-2">
              لم يتم العثور على عقارات
            </h3>
            <p className="text-gray-500 mb-4">
              جرب تعديل معايير البحث للحصول على نتائج أفضل
            </p>
            <Button
              variant="outline"
              onClick={() => {
                setFilterType('all');
                setFilterStatus('all');
                setFilterCity('all');
                setSearchTerm('');
              }}
            >
              إعادة تعيين الفلاتر
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}