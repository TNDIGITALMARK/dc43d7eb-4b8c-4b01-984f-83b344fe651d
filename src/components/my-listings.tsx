"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import {
  Search,
  Filter,
  Eye,
  Edit,
  Trash2,
  MoreHorizontal,
  MapPin,
  Calendar,
  TrendingUp,
  PauseCircle,
  Play,
  Copy
} from "lucide-react";
import { useState } from "react";

// Mock user properties data
const mockUserProperties = [
  {
    id: 1,
    title: "فيلا عصرية في بنغازي",
    location: "بنغازي، الفويهات، ليبيا",
    price: "LYD 1,500,000",
    type: "villa",
    status: "for-sale",
    listingStatus: "active",
    views: 234,
    inquiries: 12,
    datePosted: "2024-01-15",
    lastUpdated: "2024-01-20",
    image: "/public/currentImgContext/ai-generated-preview.png"
  },
  {
    id: 2,
    title: "شقة حديثة وسط المدينة",
    location: "طرابلس، وسط المدينة، ليبيا",
    price: "LYD 800,000",
    type: "apartment",
    status: "for-sale",
    listingStatus: "active",
    views: 189,
    inquiries: 8,
    datePosted: "2024-01-10",
    lastUpdated: "2024-01-18",
    image: "/public/currentImgContext/ai-generated-preview.png"
  },
  {
    id: 3,
    title: "مكتب تجاري مميز",
    location: "بنغازي، المدينة، ليبيا",
    price: "LYD 2,500 / شهر",
    type: "commercial",
    status: "for-rent",
    listingStatus: "paused",
    views: 156,
    inquiries: 15,
    datePosted: "2024-01-05",
    lastUpdated: "2024-01-15",
    image: "/public/currentImgContext/ai-generated-preview.png"
  },
  {
    id: 4,
    title: "أرض سكنية في منطقة راقية",
    location: "الزاوية، المنطقة الشرقية، ليبيا",
    price: "LYD 300,000",
    type: "land",
    status: "for-sale",
    listingStatus: "sold",
    views: 298,
    inquiries: 22,
    datePosted: "2023-12-20",
    lastUpdated: "2024-01-12",
    image: "/public/currentImgContext/ai-generated-preview.png"
  },
  {
    id: 5,
    title: "شقة للإيجار بالقرب من الجامعة",
    location: "طرابلس، الحي الجامعي، ليبيا",
    price: "LYD 1,800 / شهر",
    type: "apartment",
    status: "for-rent",
    listingStatus: "expired",
    views: 167,
    inquiries: 6,
    datePosted: "2023-12-01",
    lastUpdated: "2023-12-30",
    image: "/public/currentImgContext/ai-generated-preview.png"
  }
];

export function MyListings() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterStatus, setFilterStatus] = useState("all");
  const [filterType, setFilterType] = useState("all");

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'active':
        return <Badge className="bg-green-600 hover:bg-green-700">نشط</Badge>;
      case 'paused':
        return <Badge className="bg-yellow-600 hover:bg-yellow-700">متوقف</Badge>;
      case 'sold':
        return <Badge className="bg-blue-600 hover:bg-blue-700">مباع</Badge>;
      case 'expired':
        return <Badge className="bg-gray-600 hover:bg-gray-700">منتهي</Badge>;
      default:
        return <Badge variant="outline">{status}</Badge>;
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

  const getPropertyStatus = (status: string) => {
    switch (status) {
      case 'for-sale': return 'للبيع';
      case 'for-rent': return 'للإيجار';
      case 'for-exchange': return 'للمقايضة';
      default: return status;
    }
  };

  const filteredProperties = mockUserProperties.filter(property => {
    if (searchTerm && !property.title.toLowerCase().includes(searchTerm.toLowerCase())) return false;
    if (filterStatus !== 'all' && property.listingStatus !== filterStatus) return false;
    if (filterType !== 'all' && property.type !== filterType) return false;
    return true;
  });

  const activeProperties = filteredProperties.filter(p => p.listingStatus === 'active');
  const pausedProperties = filteredProperties.filter(p => p.listingStatus === 'paused');
  const soldProperties = filteredProperties.filter(p => p.listingStatus === 'sold');
  const expiredProperties = filteredProperties.filter(p => p.listingStatus === 'expired');

  const handleDeleteProperty = (id: number) => {
    // Handle delete logic
    console.log('Delete property:', id);
  };

  const handleToggleStatus = (id: number, currentStatus: string) => {
    // Handle status toggle logic
    console.log('Toggle status:', id, currentStatus);
  };

  const PropertyCard = ({ property }: { property: any }) => (
    <Card className="property-card">
      <CardContent className="p-0">
        <div className="flex">
          {/* Image */}
          <div className="relative w-48 h-36 flex-shrink-0">
            <div className="w-full h-full bg-gradient-to-br from-blue-200 to-blue-400 flex items-center justify-center text-white font-semibold">
              صورة العقار
            </div>
            <div className="absolute top-2 right-2 rtl:right-auto rtl:left-2">
              {getStatusBadge(property.listingStatus)}
            </div>
          </div>

          {/* Content */}
          <div className="flex-1 p-4">
            <div className="flex justify-between items-start mb-2">
              <div>
                <h3 className="font-semibold text-lg text-gray-900 line-clamp-1">
                  {property.title}
                </h3>
                <div className="flex items-center text-gray-600 text-sm mt-1">
                  <MapPin className="w-4 h-4 ml-1 rtl:ml-0 rtl:mr-1" />
                  {property.location}
                </div>
              </div>
              <div className="text-right rtl:text-left">
                <div className="text-xl font-bold text-blue-600">{property.price}</div>
                <div className="text-sm text-gray-600">{getPropertyStatus(property.status)}</div>
              </div>
            </div>

            <div className="flex items-center space-x-4 rtl:space-x-reverse text-sm text-gray-600 mb-3">
              <Badge variant="outline">{getTypeLabel(property.type)}</Badge>
              <div className="flex items-center">
                <Eye className="w-4 h-4 ml-1 rtl:ml-0 rtl:mr-1" />
                {property.views} مشاهدة
              </div>
              <div className="flex items-center">
                <TrendingUp className="w-4 h-4 ml-1 rtl:ml-0 rtl:mr-1" />
                {property.inquiries} استفسار
              </div>
            </div>

            <div className="flex justify-between items-center">
              <div className="text-sm text-gray-500">
                <div>نُشر: {new Date(property.datePosted).toLocaleDateString('ar-LY')}</div>
                <div>آخر تحديث: {new Date(property.lastUpdated).toLocaleDateString('ar-LY')}</div>
              </div>

              <div className="flex space-x-2 rtl:space-x-reverse">
                <Button size="sm" variant="outline">
                  <Eye className="w-4 h-4" />
                </Button>
                <Button size="sm" variant="outline">
                  <Edit className="w-4 h-4" />
                </Button>

                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button size="sm" variant="outline">
                      <MoreHorizontal className="w-4 h-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem onClick={() => handleToggleStatus(property.id, property.listingStatus)}>
                      {property.listingStatus === 'active' ? (
                        <>
                          <PauseCircle className="w-4 h-4 ml-2 rtl:ml-0 rtl:mr-2" />
                          إيقاف مؤقت
                        </>
                      ) : (
                        <>
                          <Play className="w-4 h-4 ml-2 rtl:ml-0 rtl:mr-2" />
                          تفعيل
                        </>
                      )}
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Copy className="w-4 h-4 ml-2 rtl:ml-0 rtl:mr-2" />
                      نسخ الرابط
                    </DropdownMenuItem>
                    <AlertDialog>
                      <AlertDialogTrigger asChild>
                        <DropdownMenuItem onSelect={(e) => e.preventDefault()}>
                          <Trash2 className="w-4 h-4 ml-2 rtl:ml-0 rtl:mr-2" />
                          حذف
                        </DropdownMenuItem>
                      </AlertDialogTrigger>
                      <AlertDialogContent>
                        <AlertDialogHeader>
                          <AlertDialogTitle>تأكيد الحذف</AlertDialogTitle>
                          <AlertDialogDescription>
                            هل أنت متأكد من حذف هذا العقار؟ لا يمكن التراجع عن هذا الإجراء.
                          </AlertDialogDescription>
                        </AlertDialogHeader>
                        <AlertDialogFooter>
                          <AlertDialogCancel>إلغاء</AlertDialogCancel>
                          <AlertDialogAction onClick={() => handleDeleteProperty(property.id)}>
                            حذف
                          </AlertDialogAction>
                        </AlertDialogFooter>
                      </AlertDialogContent>
                    </AlertDialog>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );

  return (
    <div className="space-y-6">

      {/* Header and Filters */}
      <div className="flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">عقاراتي</h2>
          <p className="text-gray-600">إدارة وتتبع جميع عقاراتك المنشورة</p>
        </div>

        <Button className="shrink-0">
          + إضافة عقار جديد
        </Button>
      </div>

      {/* Search and Filters */}
      <Card>
        <CardContent className="p-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="relative">
              <Search className="w-4 h-4 absolute left-3 rtl:left-auto rtl:right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <Input
                placeholder="البحث في عقاراتي..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pr-10 rtl:pr-4 rtl:pl-10"
              />
            </div>

            <Select value={filterStatus} onValueChange={setFilterStatus}>
              <SelectTrigger>
                <SelectValue placeholder="حالة الإعلان" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">جميع الحالات</SelectItem>
                <SelectItem value="active">نشط</SelectItem>
                <SelectItem value="paused">متوقف</SelectItem>
                <SelectItem value="sold">مباع</SelectItem>
                <SelectItem value="expired">منتهي</SelectItem>
              </SelectContent>
            </Select>

            <Select value={filterType} onValueChange={setFilterType}>
              <SelectTrigger>
                <SelectValue placeholder="نوع العقار" />
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

            <Button variant="outline">
              <Filter className="w-4 h-4 ml-2 rtl:ml-0 rtl:mr-2" />
              فلاتر متقدمة
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Statistics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-4 text-center">
            <div className="text-2xl font-bold text-green-600">{activeProperties.length}</div>
            <div className="text-sm text-gray-600">عقارات نشطة</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 text-center">
            <div className="text-2xl font-bold text-yellow-600">{pausedProperties.length}</div>
            <div className="text-sm text-gray-600">متوقفة</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 text-center">
            <div className="text-2xl font-bold text-blue-600">{soldProperties.length}</div>
            <div className="text-sm text-gray-600">مباعة</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 text-center">
            <div className="text-2xl font-bold text-gray-600">{expiredProperties.length}</div>
            <div className="text-sm text-gray-600">منتهية</div>
          </CardContent>
        </Card>
      </div>

      {/* Properties Tabs */}
      <Tabs defaultValue="all">
        <TabsList className="grid w-full grid-cols-5">
          <TabsTrigger value="all">الكل ({filteredProperties.length})</TabsTrigger>
          <TabsTrigger value="active">نشط ({activeProperties.length})</TabsTrigger>
          <TabsTrigger value="paused">متوقف ({pausedProperties.length})</TabsTrigger>
          <TabsTrigger value="sold">مباع ({soldProperties.length})</TabsTrigger>
          <TabsTrigger value="expired">منتهي ({expiredProperties.length})</TabsTrigger>
        </TabsList>

        <TabsContent value="all" className="space-y-4 mt-6">
          {filteredProperties.length > 0 ? (
            filteredProperties.map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))
          ) : (
            <div className="text-center py-12">
              <div className="text-gray-400 mb-4">
                <Search className="w-16 h-16 mx-auto" />
              </div>
              <h3 className="text-xl font-semibold text-gray-700 mb-2">
                لم يتم العثور على عقارات
              </h3>
              <p className="text-gray-500">جرب تغيير معايير البحث</p>
            </div>
          )}
        </TabsContent>

        <TabsContent value="active" className="space-y-4 mt-6">
          {activeProperties.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </TabsContent>

        <TabsContent value="paused" className="space-y-4 mt-6">
          {pausedProperties.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </TabsContent>

        <TabsContent value="sold" className="space-y-4 mt-6">
          {soldProperties.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </TabsContent>

        <TabsContent value="expired" className="space-y-4 mt-6">
          {expiredProperties.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </TabsContent>
      </Tabs>
    </div>
  );
}