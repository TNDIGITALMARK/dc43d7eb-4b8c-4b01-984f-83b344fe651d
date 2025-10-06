"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import {
  Heart,
  Share2,
  MapPin,
  Bed,
  Bath,
  Square,
  Phone,
  MessageCircle,
  Calendar,
  Star
} from "lucide-react";
import { useState } from "react";
import Link from "next/link";

interface Property {
  id: number;
  title: string;
  location: string;
  price: string;
  type: string;
  status: string;
  bedrooms: number;
  bathrooms: number;
  area: number;
  image: string;
  featured: boolean;
}

interface PropertyCardProps {
  property: Property;
  layout?: 'vertical' | 'horizontal';
}

export function PropertyCard({ property, layout = 'vertical' }: PropertyCardProps) {
  const [isLiked, setIsLiked] = useState(false);

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'for-sale':
        return <Badge className="bg-green-600 hover:bg-green-700">للبيع</Badge>;
      case 'for-rent':
        return <Badge className="bg-blue-600 hover:bg-blue-700">للإيجار</Badge>;
      case 'for-exchange':
        return <Badge className="bg-orange-600 hover:bg-orange-700">للمقايضة</Badge>;
      default:
        return <Badge variant="secondary">{status}</Badge>;
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

  if (layout === 'horizontal') {
    return (
      <Card className="property-card overflow-hidden">
        <div className="flex">
          {/* Image Section */}
          <div className="relative w-64 h-48 flex-shrink-0">
            <div className="w-full h-full bg-gradient-to-br from-blue-200 to-blue-400 relative">
              {/* Placeholder for property image */}
              <div className="absolute inset-0 flex items-center justify-center text-white text-lg font-semibold">
                صورة العقار
              </div>

              {/* Status Badge */}
              <div className="absolute top-3 right-3 rtl:right-auto rtl:left-3">
                {getStatusBadge(property.status)}
              </div>

              {/* Featured Badge */}
              {property.featured && (
                <div className="absolute top-3 left-3 rtl:left-auto rtl:right-3">
                  <Badge className="bg-yellow-500 hover:bg-yellow-600">
                    <Star className="w-3 h-3 mr-1 rtl:mr-0 rtl:ml-1" />
                    مميز
                  </Badge>
                </div>
              )}

              {/* Action Buttons */}
              <div className="absolute bottom-3 right-3 rtl:right-auto rtl:left-3 flex space-x-2 rtl:space-x-reverse">
                <Button
                  size="sm"
                  variant="secondary"
                  className="w-8 h-8 p-0"
                  onClick={() => setIsLiked(!isLiked)}
                >
                  <Heart className={`w-4 h-4 ${isLiked ? 'fill-red-500 text-red-500' : ''}`} />
                </Button>
                <Button size="sm" variant="secondary" className="w-8 h-8 p-0">
                  <Share2 className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>

          {/* Content Section */}
          <CardContent className="flex-1 p-6">
            <div className="flex justify-between items-start mb-3">
              <div>
                <Link href={`/properties/${property.id}`}>
                  <h3 className="text-lg font-semibold text-gray-900 hover:text-blue-600 transition-colors line-clamp-1">
                    {property.title}
                  </h3>
                </Link>
                <div className="flex items-center text-gray-500 text-sm mt-1">
                  <MapPin className="w-4 h-4 ml-1 rtl:ml-0 rtl:mr-1" />
                  {property.location}
                </div>
              </div>
              <div className="text-left rtl:text-right">
                <span className="text-xl font-bold text-blue-600">{property.price}</span>
                <div className="text-xs text-gray-500">{getTypeLabel(property.type)}</div>
              </div>
            </div>

            {/* Property Details */}
            {(property.bedrooms > 0 || property.bathrooms > 0 || property.area > 0) && (
              <div className="flex items-center space-x-4 rtl:space-x-reverse text-sm text-gray-600 mb-4">
                {property.bedrooms > 0 && (
                  <div className="flex items-center">
                    <Bed className="w-4 h-4 ml-1 rtl:ml-0 rtl:mr-1" />
                    {property.bedrooms} غرف
                  </div>
                )}
                {property.bathrooms > 0 && (
                  <div className="flex items-center">
                    <Bath className="w-4 h-4 ml-1 rtl:ml-0 rtl:mr-1" />
                    {property.bathrooms} حمامات
                  </div>
                )}
                {property.area > 0 && (
                  <div className="flex items-center">
                    <Square className="w-4 h-4 ml-1 rtl:ml-0 rtl:mr-1" />
                    {property.area} متر²
                  </div>
                )}
              </div>
            )}

            {/* Action Buttons */}
            <div className="flex space-x-2 rtl:space-x-reverse">
              <Button size="sm" className="flex-1">
                <Phone className="w-4 h-4 ml-2 rtl:ml-0 rtl:mr-2" />
                اتصال
              </Button>
              <Button size="sm" variant="outline" className="flex-1">
                <MessageCircle className="w-4 h-4 ml-2 rtl:ml-0 rtl:mr-2" />
                محادثة
              </Button>
              <Button size="sm" variant="outline">
                <Calendar className="w-4 h-4" />
              </Button>
            </div>
          </CardContent>
        </div>
      </Card>
    );
  }

  // Vertical Layout (Default)
  return (
    <Card className="property-card overflow-hidden">
      {/* Image Section */}
      <div className="relative h-56">
        <div className="w-full h-full bg-gradient-to-br from-blue-200 to-blue-400 relative">
          {/* Placeholder for property image */}
          <div className="absolute inset-0 flex items-center justify-center text-white text-lg font-semibold">
            صورة العقار
          </div>

          {/* Status Badge */}
          <div className="absolute top-3 right-3 rtl:right-auto rtl:left-3">
            {getStatusBadge(property.status)}
          </div>

          {/* Featured Badge */}
          {property.featured && (
            <div className="absolute top-3 left-3 rtl:left-auto rtl:right-3">
              <Badge className="bg-yellow-500 hover:bg-yellow-600">
                <Star className="w-3 h-3 mr-1 rtl:mr-0 rtl:ml-1" />
                مميز
              </Badge>
            </div>
          )}

          {/* Action Buttons */}
          <div className="absolute bottom-3 right-3 rtl:right-auto rtl:left-3 flex space-x-2 rtl:space-x-reverse">
            <Button
              size="sm"
              variant="secondary"
              className="w-8 h-8 p-0"
              onClick={() => setIsLiked(!isLiked)}
            >
              <Heart className={`w-4 h-4 ${isLiked ? 'fill-red-500 text-red-500' : ''}`} />
            </Button>
            <Button size="sm" variant="secondary" className="w-8 h-8 p-0">
              <Share2 className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <CardContent className="p-4">
        <div className="flex justify-between items-start mb-3">
          <div className="flex-1">
            <Link href={`/properties/${property.id}`}>
              <h3 className="text-lg font-semibold text-gray-900 hover:text-blue-600 transition-colors line-clamp-2 mb-1">
                {property.title}
              </h3>
            </Link>
            <div className="flex items-center text-gray-500 text-sm">
              <MapPin className="w-4 h-4 ml-1 rtl:ml-0 rtl:mr-1 flex-shrink-0" />
              <span className="line-clamp-1">{property.location}</span>
            </div>
          </div>
        </div>

        {/* Price and Type */}
        <div className="flex justify-between items-center mb-3">
          <span className="text-xl font-bold text-blue-600">{property.price}</span>
          <Badge variant="outline">{getTypeLabel(property.type)}</Badge>
        </div>

        {/* Property Details */}
        {(property.bedrooms > 0 || property.bathrooms > 0 || property.area > 0) && (
          <div className="flex items-center justify-between text-sm text-gray-600 mb-4 pb-3 border-b">
            {property.bedrooms > 0 && (
              <div className="flex items-center">
                <Bed className="w-4 h-4 ml-1 rtl:ml-0 rtl:mr-1" />
                {property.bedrooms}
              </div>
            )}
            {property.bathrooms > 0 && (
              <div className="flex items-center">
                <Bath className="w-4 h-4 ml-1 rtl:ml-0 rtl:mr-1" />
                {property.bathrooms}
              </div>
            )}
            {property.area > 0 && (
              <div className="flex items-center">
                <Square className="w-4 h-4 ml-1 rtl:ml-0 rtl:mr-1" />
                {property.area}م²
              </div>
            )}
          </div>
        )}

        {/* Action Buttons */}
        <div className="flex space-x-2 rtl:space-x-reverse">
          <Button size="sm" className="flex-1">
            <Phone className="w-4 h-4 ml-2 rtl:ml-0 rtl:mr-2" />
            اتصال
          </Button>
          <Button size="sm" variant="outline" className="flex-1">
            <MessageCircle className="w-4 h-4 ml-2 rtl:ml-0 rtl:mr-2" />
            محادثة
          </Button>
          <Button size="sm" variant="outline">
            <Calendar className="w-4 h-4" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}