"use client";

import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { PropertyDetail } from "@/components/property-detail";
import { RelatedProperties } from "@/components/related-properties";
import { useState, useEffect } from "react";
import { useParams } from "next/navigation";

// Mock property data
const mockProperty = {
  id: 1,
  title: "فيلا عصرية في بنغازي - منطقة راقية",
  location: "بنغازي، الفويهات، ليبيا",
  price: "LYD 1,500,000",
  type: "villa",
  status: "for-sale",
  bedrooms: 4,
  bathrooms: 3,
  area: 350,
  lotSize: 500,
  yearBuilt: 2020,
  parkingSpaces: 2,
  featured: true,
  description: `فيلا عصرية مميزة في منطقة الفويهات الراقية ببنغازي. تتميز الفيلا بتصميم معماري حديث وموقع استراتيجي قريب من جميع الخدمات والمرافق الأساسية.

التصميم الداخلي يجمع بين الأناقة والعملية، مع مساحات واسعة ومضيئة، وتشطيبات عالية الجودة. الفيلا محاطة بحديقة جميلة وتحتوي على مواقف خاصة للسيارات.

الموقع مثالي للعائلات حيث يقع بالقرب من المدارس الممتازة، المستشفيات، مراكز التسوق، والمطاعم. كما أن المنطقة آمنة وهادئة مع توفر جميع الخدمات البلدية.`,
  images: [
    "/public/currentImgContext/ai-generated-preview.png",
    "/public/currentImgContext/ai-generated-preview.png",
    "/public/currentImgContext/ai-generated-preview.png",
    "/public/currentImgContext/ai-generated-preview.png",
  ],
  features: [
    "مكيفات في جميع الغرف",
    "نظام أمان متطور",
    "حديقة خاصة",
    "مطبخ مجهز بالكامل",
    "غرفة خادمة",
    "مدخل سيارتين",
    "إنترنت عالي السرعة",
    "نظام طاقة شمسية"
  ],
  nearbyPlaces: [
    { name: "مدرسة الفويهات الأساسية", distance: "0.5 كم", type: "education" },
    { name: "مستشفى بنغازي الطبي", distance: "2.1 كم", type: "healthcare" },
    { name: "مركز السوق التجاري", distance: "1.8 كم", type: "shopping" },
    { name: "مسجد النور", distance: "0.3 كم", type: "worship" },
    { name: "حديقة الأطفال", distance: "0.7 كم", type: "recreation" }
  ],
  agent: {
    name: "أحمد محمد الليبي",
    phone: "+218 91 234 5678",
    email: "ahmed@aqar-jordan.ly",
    image: "/public/currentImgContext/ai-generated-preview.png",
    experience: "8 سنوات خبرة",
    properties: 45,
    rating: 4.8
  }
};

export default function PropertyDetailPage() {
  const params = useParams();
  const [property, setProperty] = useState(mockProperty);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading property data
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, [params.id]);

  if (loading) {
    return (
      <div className="min-h-screen">
        <Header />
        <div className="container mx-auto px-4 py-8">
          <div className="animate-pulse space-y-4">
            <div className="h-8 bg-gray-200 rounded w-1/2"></div>
            <div className="h-64 bg-gray-200 rounded"></div>
            <div className="h-4 bg-gray-200 rounded w-3/4"></div>
            <div className="h-4 bg-gray-200 rounded w-1/2"></div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Header />
      <PropertyDetail property={property} />
      <RelatedProperties currentPropertyId={property.id} />
      <Footer />
    </div>
  );
}