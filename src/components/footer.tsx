"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import {
  Facebook,
  Instagram,
  Twitter,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  Globe
} from "lucide-react";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-slate-800 text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2 rtl:space-x-reverse">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">ع</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">عقار الأردن</h3>
                <p className="text-sm text-gray-400">منصة عقارية موثوقة</p>
              </div>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              منصة عقارية شاملة تخدم جميع أنحاء ليبيا مع أكثر من 40 مدينة ليبية.
              نقدم خدمات البيع والشراء والإيجار والمقايضة بأعلى معايير الجودة والثقة.
            </p>
            <div className="flex space-x-3 rtl:space-x-reverse">
              <Button size="sm" variant="ghost" className="text-gray-300 hover:text-white hover:bg-slate-700 p-2">
                <Facebook className="w-4 h-4" />
              </Button>
              <Button size="sm" variant="ghost" className="text-gray-300 hover:text-white hover:bg-slate-700 p-2">
                <Instagram className="w-4 h-4" />
              </Button>
              <Button size="sm" variant="ghost" className="text-gray-300 hover:text-white hover:bg-slate-700 p-2">
                <Twitter className="w-4 h-4" />
              </Button>
              <Button size="sm" variant="ghost" className="text-gray-300 hover:text-white hover:bg-slate-700 p-2">
                <Linkedin className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">روابط سريعة</h4>
            <nav className="flex flex-col space-y-2">
              <Link href="/properties" className="text-gray-300 hover:text-white transition-colors">
                تصفح العقارات
              </Link>
              <Link href="/agencies" className="text-gray-300 hover:text-white transition-colors">
                الوكالات العقارية
              </Link>
              <Link href="/projects" className="text-gray-300 hover:text-white transition-colors">
                المشاريع الجديدة
              </Link>
              <Link href="/news" className="text-gray-300 hover:text-white transition-colors">
                أخبار العقارات
              </Link>
              <Link href="/mortgage" className="text-gray-300 hover:text-white transition-colors">
                التمويل العقاري
              </Link>
              <Link href="/guides" className="text-gray-300 hover:text-white transition-colors">
                دليل المشتري
              </Link>
            </nav>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">خدماتنا</h4>
            <nav className="flex flex-col space-y-2">
              <Link href="/sell" className="text-gray-300 hover:text-white transition-colors">
                بيع عقارك
              </Link>
              <Link href="/rent" className="text-gray-300 hover:text-white transition-colors">
                تأجير العقارات
              </Link>
              <Link href="/valuation" className="text-gray-300 hover:text-white transition-colors">
                تقييم العقارات
              </Link>
              <Link href="/consultation" className="text-gray-300 hover:text-white transition-colors">
                استشارات عقارية
              </Link>
              <Link href="/management" className="text-gray-300 hover:text-white transition-colors">
                إدارة العقارات
              </Link>
              <Link href="/investment" className="text-gray-300 hover:text-white transition-colors">
                الاستثمار العقاري
              </Link>
            </nav>
          </div>

          {/* Contact & Newsletter */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">تواصل معنا</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-2 rtl:space-x-reverse text-gray-300">
                <Phone className="w-4 h-4 flex-shrink-0" />
                <span className="text-sm">+218 21 123 4567</span>
              </div>
              <div className="flex items-center space-x-2 rtl:space-x-reverse text-gray-300">
                <Mail className="w-4 h-4 flex-shrink-0" />
                <span className="text-sm">info@aqar-jordan.ly</span>
              </div>
              <div className="flex items-start space-x-2 rtl:space-x-reverse text-gray-300">
                <MapPin className="w-4 h-4 flex-shrink-0 mt-0.5" />
                <span className="text-sm">شارع الجمهورية، طرابلس، ليبيا</span>
              </div>
              <div className="flex items-center space-x-2 rtl:space-x-reverse text-gray-300">
                <Globe className="w-4 h-4 flex-shrink-0" />
                <span className="text-sm">www.aqar-jordan.ly</span>
              </div>
            </div>

            <div className="space-y-2">
              <h5 className="font-medium">النشرة الإخبارية</h5>
              <p className="text-sm text-gray-400">
                اشترك للحصول على أحدث العروض والأخبار العقارية
              </p>
              <div className="flex space-x-2 rtl:space-x-reverse">
                <Input
                  placeholder="بريدك الإلكتروني"
                  className="bg-slate-700 border-slate-600 text-white placeholder:text-gray-400"
                />
                <Button className="bg-blue-600 hover:bg-blue-700 shrink-0">
                  اشتراك
                </Button>
              </div>
            </div>
          </div>
        </div>

        <Separator className="my-8 bg-slate-600" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-sm text-gray-400 text-center md:text-right">
            © 2024 عقار الأردن. جميع الحقوق محفوظة.
          </div>

          <div className="flex items-center space-x-6 rtl:space-x-reverse text-sm">
            <Link href="/privacy" className="text-gray-400 hover:text-white transition-colors">
              سياسة الخصوصية
            </Link>
            <Link href="/terms" className="text-gray-400 hover:text-white transition-colors">
              شروط الاستخدام
            </Link>
            <Link href="/sitemap" className="text-gray-400 hover:text-white transition-colors">
              خريطة الموقع
            </Link>
            <Link href="/support" className="text-gray-400 hover:text-white transition-colors">
              الدعم الفني
            </Link>
          </div>
        </div>

        {/* Mobile App Links */}
        <div className="mt-6 pt-6 border-t border-slate-600 text-center">
          <p className="text-gray-400 text-sm mb-3">حمل التطبيق على هاتفك المحمول</p>
          <div className="flex justify-center space-x-4 rtl:space-x-reverse">
            <Button variant="outline" className="border-slate-600 text-gray-300 hover:bg-slate-700">
              <div className="flex items-center space-x-2 rtl:space-x-reverse">
                <div className="w-6 h-6 bg-gray-400 rounded"></div>
                <div className="text-left rtl:text-right">
                  <div className="text-xs">متوفر على</div>
                  <div className="font-semibold">App Store</div>
                </div>
              </div>
            </Button>
            <Button variant="outline" className="border-slate-600 text-gray-300 hover:bg-slate-700">
              <div className="flex items-center space-x-2 rtl:space-x-reverse">
                <div className="w-6 h-6 bg-gray-400 rounded"></div>
                <div className="text-left rtl:text-right">
                  <div className="text-xs">احصل عليه من</div>
                  <div className="font-semibold">Google Play</div>
                </div>
              </div>
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
}