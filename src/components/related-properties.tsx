"use client";

import { PropertyCard } from "@/components/property-card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

// Mock related properties data
const mockRelatedProperties = [
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
    title: "فيلا راقية بمنظر البحر",
    location: "بنغازي، ليبيا",
    price: "LYD 2,200,000",
    type: "villa",
    status: "for-sale",
    bedrooms: 6,
    bathrooms: 4,
    area: 450,
    image: "/public/currentImgContext/ai-generated-preview.png",
    featured: true
  },
  {
    id: 5,
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

interface RelatedPropertiesProps {
  currentPropertyId: number;
}

export function RelatedProperties({ currentPropertyId }: RelatedPropertiesProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 3;

  // Filter out current property
  const relatedProperties = mockRelatedProperties.filter(
    property => property.id !== currentPropertyId
  );

  const totalPages = Math.ceil(relatedProperties.length / itemsPerPage);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % totalPages);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + totalPages) % totalPages);
  };

  const visibleProperties = relatedProperties.slice(
    currentIndex * itemsPerPage,
    (currentIndex + 1) * itemsPerPage
  );

  if (relatedProperties.length === 0) {
    return null;
  }

  return (
    <section className="py-8 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-900">عقارات مشابهة</h2>

          {totalPages > 1 && (
            <div className="flex space-x-2 rtl:space-x-reverse">
              <Button
                variant="outline"
                size="sm"
                onClick={prevSlide}
                disabled={currentIndex === 0}
              >
                <ChevronRight className="w-4 h-4" />
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={nextSlide}
                disabled={currentIndex === totalPages - 1}
              >
                <ChevronLeft className="w-4 h-4" />
              </Button>
            </div>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {visibleProperties.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>

        {/* Pagination Dots */}
        {totalPages > 1 && (
          <div className="flex justify-center mt-6 space-x-2 rtl:space-x-reverse">
            {Array.from({ length: totalPages }, (_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentIndex
                    ? 'bg-blue-600'
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
                onClick={() => setCurrentIndex(index)}
              />
            ))}
          </div>
        )}

        {/* View More Button */}
        <div className="text-center mt-8">
          <Button variant="outline" className="px-8">
            عرض المزيد من العقارات المشابهة
          </Button>
        </div>
      </div>
    </section>
  );
}