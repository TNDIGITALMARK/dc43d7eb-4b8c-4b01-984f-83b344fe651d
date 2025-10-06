"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Heart,
  Share2,
  MapPin,
  Bed,
  Bath,
  Square,
  Car,
  Calendar,
  Phone,
  MessageCircle,
  Mail,
  Star,
  ChevronLeft,
  ChevronRight,
  Maximize,
  MapPinIcon,
  GraduationCap,
  Stethoscope,
  ShoppingBag,
  Church,
  TreePine
} from "lucide-react";
import { useState } from "react";

interface PropertyDetailProps {
  property: {
    id: number;
    title: string;
    location: string;
    price: string;
    type: string;
    status: string;
    bedrooms: number;
    bathrooms: number;
    area: number;
    lotSize?: number;
    yearBuilt?: number;
    parkingSpaces?: number;
    featured: boolean;
    description: string;
    images: string[];
    features: string[];
    nearbyPlaces: Array<{
      name: string;
      distance: string;
      type: string;
    }>;
    agent: {
      name: string;
      phone: string;
      email: string;
      image: string;
      experience: string;
      properties: number;
      rating: number;
    };
  };
}

export function PropertyDetail({ property }: PropertyDetailProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isLiked, setIsLiked] = useState(false);
  const [showContactDialog, setShowContactDialog] = useState(false);
  const [showScheduleDialog, setShowScheduleDialog] = useState(false);

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'for-sale':
        return <Badge className="bg-green-600 hover:bg-green-700 text-lg px-4 py-2">للبيع</Badge>;
      case 'for-rent':
        return <Badge className="bg-blue-600 hover:bg-blue-700 text-lg px-4 py-2">للإيجار</Badge>;
      case 'for-exchange':
        return <Badge className="bg-orange-600 hover:bg-orange-700 text-lg px-4 py-2">للمقايضة</Badge>;
      default:
        return <Badge variant="secondary" className="text-lg px-4 py-2">{status}</Badge>;
    }
  };

  const getTypeLabel = (type: string) => {
    switch (type) {
      case 'apartment': return 'شقة';
      case 'villa': return 'فيلا';
      case 'house': return 'بيت';
      case 'land': return 'أرض';
      case 'commercial': return 'تجاري';
      default: return type;
    }
  };

  const getPlaceIcon = (type: string) => {
    switch (type) {
      case 'education': return <GraduationCap className="w-4 h-4" />;
      case 'healthcare': return <Stethoscope className="w-4 h-4" />;
      case 'shopping': return <ShoppingBag className="w-4 h-4" />;
      case 'worship': return <Church className="w-4 h-4" />;
      case 'recreation': return <TreePine className="w-4 h-4" />;
      default: return <MapPinIcon className="w-4 h-4" />;
    }
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % property.images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + property.images.length) % property.images.length);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header Section */}
      <div className="mb-6">
        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-4">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">{property.title}</h1>
            <div className="flex items-center text-gray-600 mb-3">
              <MapPin className="w-5 h-5 ml-2 rtl:ml-0 rtl:mr-2" />
              {property.location}
            </div>
            <div className="flex items-center space-x-3 rtl:space-x-reverse">
              {getStatusBadge(property.status)}
              <Badge variant="outline" className="text-lg px-3 py-1">
                {getTypeLabel(property.type)}
              </Badge>
              {property.featured && (
                <Badge className="bg-yellow-500 hover:bg-yellow-600">
                  <Star className="w-4 h-4 mr-1 rtl:mr-0 rtl:ml-1" />
                  مميز
                </Badge>
              )}
            </div>
          </div>

          <div className="flex flex-col items-end space-y-3">
            <div className="text-3xl font-bold text-blue-600">{property.price}</div>
            <div className="flex space-x-2 rtl:space-x-reverse">
              <Button
                variant="outline"
                size="sm"
                onClick={() => setIsLiked(!isLiked)}
              >
                <Heart className={`w-4 h-4 ml-2 rtl:ml-0 rtl:mr-2 ${isLiked ? 'fill-red-500 text-red-500' : ''}`} />
                حفظ
              </Button>
              <Button variant="outline" size="sm">
                <Share2 className="w-4 h-4 ml-2 rtl:ml-0 rtl:mr-2" />
                مشاركة
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

        {/* Main Content */}
        <div className="lg:col-span-2 space-y-8">

          {/* Image Gallery */}
          <Card>
            <CardContent className="p-0">
              <div className="relative h-96 bg-gray-200 rounded-t-lg overflow-hidden">
                {/* Main Image */}
                <div className="w-full h-full bg-gradient-to-br from-blue-200 to-blue-400 flex items-center justify-center">
                  <span className="text-white text-2xl font-semibold">
                    صورة العقار {currentImageIndex + 1}
                  </span>
                </div>

                {/* Navigation Buttons */}
                <Button
                  variant="secondary"
                  size="sm"
                  className="absolute left-4 rtl:left-auto rtl:right-4 top-1/2 transform -translate-y-1/2 w-10 h-10 p-0"
                  onClick={prevImage}
                >
                  <ChevronLeft className="w-4 h-4" />
                </Button>
                <Button
                  variant="secondary"
                  size="sm"
                  className="absolute right-4 rtl:right-auto rtl:left-4 top-1/2 transform -translate-y-1/2 w-10 h-10 p-0"
                  onClick={nextImage}
                >
                  <ChevronRight className="w-4 h-4" />
                </Button>

                {/* Full Screen Button */}
                <Button
                  variant="secondary"
                  size="sm"
                  className="absolute top-4 left-4 rtl:left-auto rtl:right-4 w-10 h-10 p-0"
                >
                  <Maximize className="w-4 h-4" />
                </Button>

                {/* Image Counter */}
                <div className="absolute bottom-4 right-4 rtl:right-auto rtl:left-4 bg-black bg-opacity-60 text-white px-3 py-1 rounded">
                  {currentImageIndex + 1} / {property.images.length}
                </div>
              </div>

              {/* Thumbnail Gallery */}
              <div className="p-4 flex space-x-2 rtl:space-x-reverse overflow-x-auto">
                {property.images.map((_, index) => (
                  <button
                    key={index}
                    className={`w-16 h-16 bg-gray-200 rounded flex-shrink-0 border-2 ${
                      index === currentImageIndex ? 'border-blue-600' : 'border-transparent'
                    } hover:border-blue-400 transition-colors`}
                    onClick={() => setCurrentImageIndex(index)}
                  >
                    <div className="w-full h-full bg-gradient-to-br from-blue-200 to-blue-400 rounded flex items-center justify-center text-white text-xs">
                      {index + 1}
                    </div>
                  </button>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Property Details */}
          <Card>
            <CardHeader>
              <CardTitle>تفاصيل العقار</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-6">
                {property.bedrooms > 0 && (
                  <div className="text-center">
                    <div className="flex justify-center mb-2">
                      <Bed className="w-8 h-8 text-blue-600" />
                    </div>
                    <div className="font-semibold">{property.bedrooms}</div>
                    <div className="text-sm text-gray-600">غرف نوم</div>
                  </div>
                )}
                {property.bathrooms > 0 && (
                  <div className="text-center">
                    <div className="flex justify-center mb-2">
                      <Bath className="w-8 h-8 text-blue-600" />
                    </div>
                    <div className="font-semibold">{property.bathrooms}</div>
                    <div className="text-sm text-gray-600">حمامات</div>
                  </div>
                )}
                <div className="text-center">
                  <div className="flex justify-center mb-2">
                    <Square className="w-8 h-8 text-blue-600" />
                  </div>
                  <div className="font-semibold">{property.area}</div>
                  <div className="text-sm text-gray-600">متر مربع</div>
                </div>
                {property.parkingSpaces && (
                  <div className="text-center">
                    <div className="flex justify-center mb-2">
                      <Car className="w-8 h-8 text-blue-600" />
                    </div>
                    <div className="font-semibold">{property.parkingSpaces}</div>
                    <div className="text-sm text-gray-600">مواقف</div>
                  </div>
                )}
              </div>

              {/* Additional Details */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-6 border-t">
                {property.lotSize && (
                  <div>
                    <span className="font-medium">مساحة الأرض:</span>
                    <span className="mr-2 rtl:mr-0 rtl:ml-2">{property.lotSize} متر²</span>
                  </div>
                )}
                {property.yearBuilt && (
                  <div>
                    <span className="font-medium">سنة البناء:</span>
                    <span className="mr-2 rtl:mr-0 rtl:ml-2">{property.yearBuilt}</span>
                  </div>
                )}
                <div>
                  <span className="font-medium">رقم العقار:</span>
                  <span className="mr-2 rtl:mr-0 rtl:ml-2">#{property.id.toString().padStart(6, '0')}</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Description and Features */}
          <Card>
            <CardContent className="p-0">
              <Tabs defaultValue="description">
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="description">الوصف</TabsTrigger>
                  <TabsTrigger value="features">المميزات</TabsTrigger>
                  <TabsTrigger value="location">الموقع</TabsTrigger>
                </TabsList>

                <TabsContent value="description" className="p-6">
                  <div className="prose max-w-none">
                    <div className="whitespace-pre-line text-gray-700 leading-relaxed">
                      {property.description}
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="features" className="p-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {property.features.map((feature, index) => (
                      <div key={index} className="flex items-center space-x-2 rtl:space-x-reverse">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </TabsContent>

                <TabsContent value="location" className="p-6">
                  <div className="space-y-4">
                    <h4 className="font-semibold mb-4">الأماكن القريبة</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {property.nearbyPlaces.map((place, index) => (
                        <div key={index} className="flex items-center space-x-3 rtl:space-x-reverse p-3 bg-gray-50 rounded-lg">
                          <div className="text-blue-600">
                            {getPlaceIcon(place.type)}
                          </div>
                          <div className="flex-1">
                            <div className="font-medium">{place.name}</div>
                            <div className="text-sm text-gray-600">{place.distance}</div>
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Map Placeholder */}
                    <div className="mt-6 h-64 bg-blue-100 rounded-lg flex items-center justify-center">
                      <div className="text-center text-blue-600">
                        <MapPin className="w-16 h-16 mx-auto mb-4" />
                        <p>خريطة الموقع</p>
                        <p className="text-sm">سيتم تطوير الخريطة قريباً</p>
                      </div>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">

          {/* Agent Card */}
          <Card>
            <CardHeader>
              <CardTitle>تواصل مع الوكيل</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center space-x-3 rtl:space-x-reverse mb-4">
                <Avatar className="w-16 h-16">
                  <AvatarImage src={property.agent.image} />
                  <AvatarFallback>{property.agent.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <div>
                  <h4 className="font-semibold">{property.agent.name}</h4>
                  <div className="flex items-center space-x-1 rtl:space-x-reverse">
                    <Star className="w-4 h-4 text-yellow-500 fill-current" />
                    <span className="text-sm">{property.agent.rating}</span>
                  </div>
                  <p className="text-sm text-gray-600">{property.agent.experience}</p>
                  <p className="text-sm text-gray-600">{property.agent.properties} عقار</p>
                </div>
              </div>

              <div className="space-y-2">
                <Button className="w-full" onClick={() => setShowContactDialog(true)}>
                  <Phone className="w-4 h-4 ml-2 rtl:ml-0 rtl:mr-2" />
                  اتصال مباشر
                </Button>
                <Button variant="outline" className="w-full">
                  <MessageCircle className="w-4 h-4 ml-2 rtl:ml-0 rtl:mr-2" />
                  إرسال رسالة
                </Button>
                <Button variant="outline" className="w-full" onClick={() => setShowScheduleDialog(true)}>
                  <Calendar className="w-4 h-4 ml-2 rtl:ml-0 rtl:mr-2" />
                  حجز موعد
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Mortgage Calculator */}
          <Card>
            <CardHeader>
              <CardTitle>حاسبة التمويل</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <Label htmlFor="loan-amount">مبلغ القرض</Label>
                  <Input id="loan-amount" placeholder="1,000,000 د.ل" />
                </div>
                <div>
                  <Label htmlFor="interest-rate">معدل الفائدة (%)</Label>
                  <Input id="interest-rate" placeholder="5.5%" />
                </div>
                <div>
                  <Label htmlFor="loan-term">مدة القرض (سنة)</Label>
                  <Input id="loan-term" placeholder="15" />
                </div>
                <Button className="w-full" variant="outline">
                  احسب القسط الشهري
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Quick Actions */}
          <Card>
            <CardHeader>
              <CardTitle>إجراءات سريعة</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <Button variant="outline" className="w-full justify-start">
                <Mail className="w-4 h-4 ml-2 rtl:ml-0 rtl:mr-2" />
                إرسال لصديق
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <Calendar className="w-4 h-4 ml-2 rtl:ml-0 rtl:mr-2" />
                طباعة التفاصيل
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <Share2 className="w-4 h-4 ml-2 rtl:ml-0 rtl:mr-2" />
                تبليغ عن مشكلة
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Contact Dialog */}
      <Dialog open={showContactDialog} onOpenChange={setShowContactDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>تواصل مع الوكيل</DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            <div className="flex items-center space-x-3 rtl:space-x-reverse p-3 bg-gray-50 rounded">
              <Phone className="w-5 h-5 text-blue-600" />
              <div>
                <div className="font-medium">{property.agent.phone}</div>
                <div className="text-sm text-gray-600">اتصال مباشر</div>
              </div>
            </div>
            <div className="flex items-center space-x-3 rtl:space-x-reverse p-3 bg-gray-50 rounded">
              <Mail className="w-5 h-5 text-blue-600" />
              <div>
                <div className="font-medium">{property.agent.email}</div>
                <div className="text-sm text-gray-600">البريد الإلكتروني</div>
              </div>
            </div>
            <div className="space-y-3">
              <Label htmlFor="contact-message">اكتب رسالتك</Label>
              <Textarea
                id="contact-message"
                placeholder="مرحباً، أريد معرفة المزيد عن هذا العقار..."
                rows={4}
              />
              <Button className="w-full">إرسال الرسالة</Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* Schedule Dialog */}
      <Dialog open={showScheduleDialog} onOpenChange={setShowScheduleDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>حجز موعد للمعاينة</DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            <div>
              <Label htmlFor="visit-date">تاريخ المعاينة</Label>
              <Input id="visit-date" type="date" />
            </div>
            <div>
              <Label htmlFor="visit-time">وقت المعاينة</Label>
              <Input id="visit-time" type="time" />
            </div>
            <div>
              <Label htmlFor="visitor-name">الاسم</Label>
              <Input id="visitor-name" placeholder="اسمك الكامل" />
            </div>
            <div>
              <Label htmlFor="visitor-phone">رقم الهاتف</Label>
              <Input id="visitor-phone" placeholder="+218 91 xxx xxxx" />
            </div>
            <div>
              <Label htmlFor="visit-notes">ملاحظات إضافية</Label>
              <Textarea
                id="visit-notes"
                placeholder="أي طلبات خاصة أو أسئلة..."
                rows={3}
              />
            </div>
            <Button className="w-full">تأكيد الموعد</Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}