"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import {
  User,
  Phone,
  Mail,
  MapPin,
  Camera,
  Shield,
  Star,
  Eye,
  MessageCircle,
  Calendar,
  Award
} from "lucide-react";
import { useState } from "react";

// Mock user data
const mockUser = {
  id: 1,
  name: "أحمد محمد الليبي",
  email: "ahmed@example.com",
  phone: "+218 91 234 5678",
  location: "طرابلس، ليبيا",
  joinDate: "2022-03-15",
  verified: true,
  rating: 4.8,
  totalRatings: 124,
  totalListings: 15,
  activeListings: 8,
  views: 2340,
  bio: "وكيل عقاري معتمد مع خبرة أكثر من 8 سنوات في السوق الليبي. متخصص في العقارات السكنية والتجارية في منطقة طرابلس وضواحيها.",
  avatar: "/public/currentImgContext/ai-generated-preview.png",
  specializations: ["شقق", "فلل", "عقارات تجارية"],
  languages: ["العربية", "الإنجليزية"],
  stats: {
    propertiesSold: 45,
    propertiesRented: 28,
    averageResponseTime: "2 ساعة",
    clientSatisfaction: "98%"
  }
};

export function UserProfile() {
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    name: mockUser.name,
    email: mockUser.email,
    phone: mockUser.phone,
    location: mockUser.location,
    bio: mockUser.bio
  });

  const handleSave = () => {
    // Handle save logic here
    setIsEditing(false);
  };

  const handleCancel = () => {
    setFormData({
      name: mockUser.name,
      email: mockUser.email,
      phone: mockUser.phone,
      location: mockUser.location,
      bio: mockUser.bio
    });
    setIsEditing(false);
  };

  return (
    <div className="space-y-6">

      {/* Profile Header */}
      <Card>
        <CardContent className="p-6">
          <div className="flex flex-col md:flex-row gap-6">

            {/* Avatar Section */}
            <div className="text-center md:text-right">
              <div className="relative inline-block">
                <Avatar className="w-32 h-32">
                  <AvatarImage src={mockUser.avatar} />
                  <AvatarFallback className="text-2xl">{mockUser.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <Button
                  size="sm"
                  className="absolute bottom-0 right-0 rtl:right-auto rtl:left-0 w-10 h-10 rounded-full p-0"
                >
                  <Camera className="w-4 h-4" />
                </Button>
              </div>
              <div className="mt-4 space-y-2">
                <div className="flex items-center justify-center space-x-2 rtl:space-x-reverse">
                  <Star className="w-4 h-4 text-yellow-500 fill-current" />
                  <span className="font-semibold">{mockUser.rating}</span>
                  <span className="text-gray-600">({mockUser.totalRatings} تقييم)</span>
                </div>
                {mockUser.verified && (
                  <Badge className="bg-green-600 hover:bg-green-700">
                    <Shield className="w-3 h-3 mr-1 rtl:mr-0 rtl:ml-1" />
                    موثق
                  </Badge>
                )}
              </div>
            </div>

            {/* Profile Info */}
            <div className="flex-1">
              {!isEditing ? (
                <div className="space-y-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <h2 className="text-2xl font-bold text-gray-900">{mockUser.name}</h2>
                      <p className="text-gray-600">عضو منذ {new Date(mockUser.joinDate).toLocaleDateString('ar-LY')}</p>
                    </div>
                    <Button onClick={() => setIsEditing(true)}>تعديل الملف</Button>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex items-center space-x-2 rtl:space-x-reverse">
                      <Mail className="w-4 h-4 text-gray-500" />
                      <span>{mockUser.email}</span>
                    </div>
                    <div className="flex items-center space-x-2 rtl:space-x-reverse">
                      <Phone className="w-4 h-4 text-gray-500" />
                      <span>{mockUser.phone}</span>
                    </div>
                    <div className="flex items-center space-x-2 rtl:space-x-reverse">
                      <MapPin className="w-4 h-4 text-gray-500" />
                      <span>{mockUser.location}</span>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2">نبذة عني</h4>
                    <p className="text-gray-700 leading-relaxed">{mockUser.bio}</p>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    <span className="text-sm font-medium">التخصصات:</span>
                    {mockUser.specializations.map((spec, index) => (
                      <Badge key={index} variant="outline">{spec}</Badge>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-2">
                    <span className="text-sm font-medium">اللغات:</span>
                    {mockUser.languages.map((lang, index) => (
                      <Badge key={index} variant="outline">{lang}</Badge>
                    ))}
                  </div>
                </div>
              ) : (
                <div className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name">الاسم الكامل</Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                      />
                    </div>
                    <div>
                      <Label htmlFor="email">البريد الإلكتروني</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                      />
                    </div>
                    <div>
                      <Label htmlFor="phone">رقم الهاتف</Label>
                      <Input
                        id="phone"
                        value={formData.phone}
                        onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                      />
                    </div>
                    <div>
                      <Label htmlFor="location">الموقع</Label>
                      <Input
                        id="location"
                        value={formData.location}
                        onChange={(e) => setFormData(prev => ({ ...prev, location: e.target.value }))}
                      />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="bio">نبذة عني</Label>
                    <Textarea
                      id="bio"
                      rows={4}
                      value={formData.bio}
                      onChange={(e) => setFormData(prev => ({ ...prev, bio: e.target.value }))}
                    />
                  </div>
                  <div className="flex space-x-2 rtl:space-x-reverse">
                    <Button onClick={handleSave}>حفظ التغييرات</Button>
                    <Button variant="outline" onClick={handleCancel}>إلغاء</Button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card>
          <CardContent className="p-6 text-center">
            <div className="text-2xl font-bold text-blue-600 mb-1">{mockUser.totalListings}</div>
            <div className="text-sm text-gray-600">إجمالي العقارات</div>
            <div className="text-xs text-green-600 mt-1">{mockUser.activeListings} نشط</div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6 text-center">
            <div className="text-2xl font-bold text-blue-600 mb-1">{mockUser.views.toLocaleString()}</div>
            <div className="text-sm text-gray-600">مشاهدات الملف</div>
            <div className="text-xs text-gray-500 mt-1">هذا الشهر: 340</div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6 text-center">
            <div className="text-2xl font-bold text-blue-600 mb-1">{mockUser.stats.propertiesSold}</div>
            <div className="text-sm text-gray-600">عقارات مباعة</div>
            <div className="text-xs text-gray-500 mt-1">{mockUser.stats.propertiesRented} مؤجرة</div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6 text-center">
            <div className="text-2xl font-bold text-blue-600 mb-1">{mockUser.stats.clientSatisfaction}</div>
            <div className="text-sm text-gray-600">رضا العملاء</div>
            <div className="text-xs text-gray-500 mt-1">متوسط الرد: {mockUser.stats.averageResponseTime}</div>
          </CardContent>
        </Card>
      </div>

      {/* Settings */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

        {/* Account Settings */}
        <Card>
          <CardHeader>
            <CardTitle>إعدادات الحساب</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <div className="font-medium">الإشعارات بالبريد الإلكتروني</div>
                <div className="text-sm text-gray-600">تلقي تحديثات حول عقاراتك</div>
              </div>
              <Switch defaultChecked />
            </div>

            <Separator />

            <div className="flex items-center justify-between">
              <div>
                <div className="font-medium">إشعارات الرسائل</div>
                <div className="text-sm text-gray-600">تنبيهات عند وصول رسائل جديدة</div>
              </div>
              <Switch defaultChecked />
            </div>

            <Separator />

            <div className="flex items-center justify-between">
              <div>
                <div className="font-medium">إظهار رقم الهاتف</div>
                <div className="text-sm text-gray-600">عرض رقم هاتفك في الملف الشخصي</div>
              </div>
              <Switch defaultChecked />
            </div>

            <Separator />

            <div>
              <Label htmlFor="privacy">إعدادات الخصوصية</Label>
              <Select defaultValue="public">
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="public">ملف عام</SelectItem>
                  <SelectItem value="private">ملف خاص</SelectItem>
                  <SelectItem value="contacts">المتصلين فقط</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>

        {/* Security Settings */}
        <Card>
          <CardHeader>
            <CardTitle>الأمان والحماية</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <Button variant="outline" className="w-full justify-start">
              <Shield className="w-4 h-4 ml-2 rtl:ml-0 rtl:mr-2" />
              تغيير كلمة المرور
            </Button>

            <Button variant="outline" className="w-full justify-start">
              <Phone className="w-4 h-4 ml-2 rtl:ml-0 rtl:mr-2" />
              تفعيل المصادقة الثنائية
            </Button>

            <Separator />

            <div>
              <h4 className="font-medium mb-2">جلسات نشطة</h4>
              <div className="space-y-2">
                <div className="flex justify-between items-center p-3 bg-gray-50 rounded">
                  <div>
                    <div className="text-sm font-medium">هذا الجهاز</div>
                    <div className="text-xs text-gray-600">آخر نشاط: الآن</div>
                  </div>
                  <Badge variant="outline">نشط</Badge>
                </div>
              </div>
            </div>

            <Separator />

            <Button variant="destructive" className="w-full">
              حذف الحساب
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Achievement & Badges */}
      <Card>
        <CardHeader>
          <CardTitle>الإنجازات والشارات</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="flex items-center space-x-3 rtl:space-x-reverse p-4 bg-yellow-50 rounded-lg border border-yellow-200">
              <Award className="w-8 h-8 text-yellow-600" />
              <div>
                <div className="font-semibold text-yellow-800">وكيل متميز</div>
                <div className="text-sm text-yellow-600">تقييم 4.5+ نجوم</div>
              </div>
            </div>

            <div className="flex items-center space-x-3 rtl:space-x-reverse p-4 bg-blue-50 rounded-lg border border-blue-200">
              <Star className="w-8 h-8 text-blue-600" />
              <div>
                <div className="font-semibold text-blue-800">خبير مبيعات</div>
                <div className="text-sm text-blue-600">50+ عقار مباع</div>
              </div>
            </div>

            <div className="flex items-center space-x-3 rtl:space-x-reverse p-4 bg-green-50 rounded-lg border border-green-200">
              <MessageCircle className="w-8 h-8 text-green-600" />
              <div>
                <div className="font-semibold text-green-800">تفاعل سريع</div>
                <div className="text-sm text-green-600">رد سريع على الرسائل</div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}