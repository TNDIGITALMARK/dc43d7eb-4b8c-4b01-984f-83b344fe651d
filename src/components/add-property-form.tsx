"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  Upload,
  MapPin,
  Home,
  DollarSign,
  ImageIcon,
  X,
  Plus,
  Info
} from "lucide-react";
import { useState } from "react";

const libyanCities = [
  "طرابلس", "بنغازي", "مصراتة", "الزاوية", "صبراتة", "زليتن", "الخمس",
  "تاجوراء", "زوارة", "غريان", "يفرن", "ناصر", "ترهونة", "بني وليد",
  "سرت", "هون", "اجدابيا", "المرج", "القبة", "شحات", "درنة", "طبرق",
  "البيضاء", "رأس لانوف", "بريقة", "مرسى البريقة", "السدادة", "الكفرة",
  "تازربو", "ربيانة", "الجوف", "أوجلة", "جالو", "إجخرة", "الواحات",
  "سبها", "مرزق", "أوباري", "غدامس", "غات", "القطرون"
];

const propertyFeatures = [
  "مكيفات", "تدفئة مركزية", "حديقة", "مسبح", "جراج", "موقف سيارات",
  "مصعد", "شرفة", "تراس", "غرفة خادمة", "غرفة غسيل", "مخزن",
  "أنظمة أمان", "كاميرات مراقبة", "إنترنت", "كابل تلفزيوني",
  "نظام الطاقة الشمسية", "نظام الري", "مطبخ مجهز", "خزانات مياه"
];

export function AddPropertyForm() {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    type: "",
    status: "",
    city: "",
    district: "",
    address: "",
    price: "",
    bedrooms: "",
    bathrooms: "",
    area: "",
    lotSize: "",
    yearBuilt: "",
    parkingSpaces: "",
    features: [] as string[],
    images: [] as File[]
  });

  const [dragActive, setDragActive] = useState(false);

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleFeatureToggle = (feature: string) => {
    setFormData(prev => ({
      ...prev,
      features: prev.features.includes(feature)
        ? prev.features.filter(f => f !== feature)
        : [...prev.features, feature]
    }));
  };

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);

    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFiles(Array.from(e.dataTransfer.files));
    }
  };

  const handleFiles = (files: File[]) => {
    const imageFiles = files.filter(file => file.type.startsWith('image/'));
    setFormData(prev => ({
      ...prev,
      images: [...prev.images, ...imageFiles].slice(0, 10) // Max 10 images
    }));
  };

  const removeImage = (index: number) => {
    setFormData(prev => ({
      ...prev,
      images: prev.images.filter((_, i) => i !== index)
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form data:', formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-8">

      {/* Basic Information */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <Home className="w-5 h-5 ml-2 rtl:ml-0 rtl:mr-2" />
            معلومات أساسية
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <Label htmlFor="title">عنوان العقار *</Label>
            <Input
              id="title"
              placeholder="مثل: فيلا عصرية في منطقة راقية"
              value={formData.title}
              onChange={(e) => handleInputChange('title', e.target.value)}
              required
            />
          </div>

          <div>
            <Label htmlFor="description">وصف العقار *</Label>
            <Textarea
              id="description"
              rows={6}
              placeholder="اكتب وصفاً مفصلاً عن العقار، المميزات، الموقع، والخدمات المتاحة..."
              value={formData.description}
              onChange={(e) => handleInputChange('description', e.target.value)}
              required
            />
            <div className="text-sm text-gray-500 mt-1">
              الحد الأدنى: 50 كلمة للحصول على نتائج أفضل
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="type">نوع العقار *</Label>
              <Select value={formData.type} onValueChange={(value) => handleInputChange('type', value)}>
                <SelectTrigger>
                  <SelectValue placeholder="اختر نوع العقار" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="apartment">شقة</SelectItem>
                  <SelectItem value="villa">فيلا</SelectItem>
                  <SelectItem value="house">بيت</SelectItem>
                  <SelectItem value="land">أرض</SelectItem>
                  <SelectItem value="commercial">عقار تجاري</SelectItem>
                  <SelectItem value="office">مكتب</SelectItem>
                  <SelectItem value="warehouse">مخزن</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label htmlFor="status">حالة العقار *</Label>
              <Select value={formData.status} onValueChange={(value) => handleInputChange('status', value)}>
                <SelectTrigger>
                  <SelectValue placeholder="اختر حالة العقار" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="for-sale">للبيع</SelectItem>
                  <SelectItem value="for-rent">للإيجار</SelectItem>
                  <SelectItem value="for-exchange">للمقايضة</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Location */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <MapPin className="w-5 h-5 ml-2 rtl:ml-0 rtl:mr-2" />
            الموقع
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="city">المدينة *</Label>
              <Select value={formData.city} onValueChange={(value) => handleInputChange('city', value)}>
                <SelectTrigger>
                  <SelectValue placeholder="اختر المدينة" />
                </SelectTrigger>
                <SelectContent className="max-h-60">
                  {libyanCities.map((city) => (
                    <SelectItem key={city} value={city}>{city}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label htmlFor="district">المنطقة/الحي</Label>
              <Input
                id="district"
                placeholder="اسم المنطقة أو الحي"
                value={formData.district}
                onChange={(e) => handleInputChange('district', e.target.value)}
              />
            </div>
          </div>

          <div>
            <Label htmlFor="address">العنوان التفصيلي</Label>
            <Input
              id="address"
              placeholder="رقم الشارع، اسم الشارع، علامات مميزة..."
              value={formData.address}
              onChange={(e) => handleInputChange('address', e.target.value)}
            />
          </div>
        </CardContent>
      </Card>

      {/* Price and Details */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <DollarSign className="w-5 h-5 ml-2 rtl:ml-0 rtl:mr-2" />
            السعر والتفاصيل
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <Label htmlFor="price">السعر (دينار ليبي) *</Label>
            <Input
              id="price"
              placeholder="1500000"
              value={formData.price}
              onChange={(e) => handleInputChange('price', e.target.value)}
              required
            />
            <div className="text-sm text-gray-500 mt-1">
              {formData.status === 'for-rent' ? 'السعر شهرياً' : 'السعر الإجمالي'}
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div>
              <Label htmlFor="bedrooms">غرف النوم</Label>
              <Select value={formData.bedrooms} onValueChange={(value) => handleInputChange('bedrooms', value)}>
                <SelectTrigger>
                  <SelectValue placeholder="0" />
                </SelectTrigger>
                <SelectContent>
                  {[0, 1, 2, 3, 4, 5, 6, 7, 8].map(num => (
                    <SelectItem key={num} value={num.toString()}>{num}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label htmlFor="bathrooms">الحمامات</Label>
              <Select value={formData.bathrooms} onValueChange={(value) => handleInputChange('bathrooms', value)}>
                <SelectTrigger>
                  <SelectValue placeholder="0" />
                </SelectTrigger>
                <SelectContent>
                  {[0, 1, 2, 3, 4, 5, 6].map(num => (
                    <SelectItem key={num} value={num.toString()}>{num}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label htmlFor="area">المساحة (م²) *</Label>
              <Input
                id="area"
                placeholder="120"
                value={formData.area}
                onChange={(e) => handleInputChange('area', e.target.value)}
                required
              />
            </div>

            <div>
              <Label htmlFor="parking">مواقف السيارات</Label>
              <Select value={formData.parkingSpaces} onValueChange={(value) => handleInputChange('parkingSpaces', value)}>
                <SelectTrigger>
                  <SelectValue placeholder="0" />
                </SelectTrigger>
                <SelectContent>
                  {[0, 1, 2, 3, 4, 5].map(num => (
                    <SelectItem key={num} value={num.toString()}>{num}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="lotSize">مساحة الأرض (م²)</Label>
              <Input
                id="lotSize"
                placeholder="500"
                value={formData.lotSize}
                onChange={(e) => handleInputChange('lotSize', e.target.value)}
              />
              <div className="text-sm text-gray-500 mt-1">اتركه فارغاً إذا لم ينطبق</div>
            </div>

            <div>
              <Label htmlFor="yearBuilt">سنة البناء</Label>
              <Input
                id="yearBuilt"
                placeholder="2020"
                value={formData.yearBuilt}
                onChange={(e) => handleInputChange('yearBuilt', e.target.value)}
              />
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Features */}
      <Card>
        <CardHeader>
          <CardTitle>المميزات والخدمات</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {propertyFeatures.map((feature) => (
              <div key={feature} className="flex items-center space-x-2 rtl:space-x-reverse">
                <Checkbox
                  id={feature}
                  checked={formData.features.includes(feature)}
                  onCheckedChange={() => handleFeatureToggle(feature)}
                />
                <Label htmlFor={feature} className="text-sm cursor-pointer">
                  {feature}
                </Label>
              </div>
            ))}
          </div>

          {formData.features.length > 0 && (
            <div className="mt-4 pt-4 border-t">
              <div className="flex flex-wrap gap-2">
                {formData.features.map((feature) => (
                  <Badge
                    key={feature}
                    variant="secondary"
                    className="cursor-pointer"
                    onClick={() => handleFeatureToggle(feature)}
                  >
                    {feature}
                    <X className="w-3 h-3 mr-1 rtl:mr-0 rtl:ml-1" />
                  </Badge>
                ))}
              </div>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Images */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <ImageIcon className="w-5 h-5 ml-2 rtl:ml-0 rtl:mr-2" />
            صور العقار
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {/* Upload Area */}
          <div
            className={`border-2 border-dashed rounded-lg p-8 text-center transition-colors ${
              dragActive
                ? 'border-blue-400 bg-blue-50'
                : 'border-gray-300 hover:border-blue-400'
            }`}
            onDragEnter={handleDrag}
            onDragLeave={handleDrag}
            onDragOver={handleDrag}
            onDrop={handleDrop}
          >
            <Upload className="w-12 h-12 mx-auto text-gray-400 mb-4" />
            <div className="text-lg font-medium text-gray-700 mb-2">
              اسحب الصور هنا أو انقر لتحديدها
            </div>
            <div className="text-sm text-gray-500 mb-4">
              الحد الأقصى: 10 صور، حجم الصورة: 5MB لكل صورة
            </div>
            <input
              type="file"
              multiple
              accept="image/*"
              onChange={(e) => e.target.files && handleFiles(Array.from(e.target.files))}
              className="hidden"
              id="image-upload"
            />
            <Button type="button" variant="outline" onClick={() => document.getElementById('image-upload')?.click()}>
              اختيار الصور
            </Button>
          </div>

          {/* Image Preview */}
          {formData.images.length > 0 && (
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {formData.images.map((image, index) => (
                <div key={index} className="relative">
                  <div className="aspect-square bg-gray-200 rounded-lg overflow-hidden">
                    <img
                      src={URL.createObjectURL(image)}
                      alt={`صورة ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <button
                    type="button"
                    onClick={() => removeImage(index)}
                    className="absolute top-2 right-2 rtl:right-auto rtl:left-2 w-6 h-6 bg-red-500 text-white rounded-full flex items-center justify-center hover:bg-red-600 transition-colors"
                  >
                    <X className="w-3 h-3" />
                  </button>
                  {index === 0 && (
                    <div className="absolute bottom-2 left-2 rtl:left-auto rtl:right-2 bg-blue-600 text-white text-xs px-2 py-1 rounded">
                      الرئيسية
                    </div>
                  )}
                </div>
              ))}

              {formData.images.length < 10 && (
                <div
                  className="aspect-square border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center cursor-pointer hover:border-blue-400 transition-colors"
                  onClick={() => document.getElementById('image-upload')?.click()}
                >
                  <Plus className="w-8 h-8 text-gray-400" />
                </div>
              )}
            </div>
          )}

          <div className="flex items-start space-x-2 rtl:space-x-reverse p-3 bg-blue-50 rounded-lg">
            <Info className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
            <div className="text-sm text-blue-800">
              <div className="font-medium mb-1">نصائح لصور أفضل:</div>
              <ul className="space-y-1 text-sm">
                <li>• استخدم إضاءة طبيعية جيدة</li>
                <li>• اتكد من وضوح الصور</li>
                <li>• اعرض جميع الغرف المهمة</li>
                <li>• الصورة الأولى ستكون الصورة الرئيسية</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Submit Buttons */}
      <div className="flex space-x-4 rtl:space-x-reverse">
        <Button type="submit" className="flex-1">
          نشر العقار
        </Button>
        <Button type="button" variant="outline" className="flex-1">
          حفظ كمسودة
        </Button>
      </div>

      {/* Terms Notice */}
      <div className="text-sm text-gray-600 text-center p-4 bg-gray-50 rounded-lg">
        بنشر هذا العقار، أنت توافق على
        <a href="/terms" className="text-blue-600 hover:underline mx-1">شروط الاستخدام</a>
        و
        <a href="/privacy" className="text-blue-600 hover:underline mx-1">سياسة الخصوصية</a>
        الخاصة بنا.
      </div>
    </form>
  );
}