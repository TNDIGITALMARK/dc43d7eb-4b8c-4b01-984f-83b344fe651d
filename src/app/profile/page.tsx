"use client";

import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { UserProfile } from "@/components/user-profile";
import { MyListings } from "@/components/my-listings";
import { AddPropertyForm } from "@/components/add-property-form";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";

export default function ProfilePage() {
  return (
    <div className="min-h-screen">
      <Header />

      <div className="container mx-auto px-4 py-8">
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">حسابي</h1>
          <p className="text-gray-600">إدارة الملف الشخصي والعقارات</p>
        </div>

        <Card>
          <CardContent className="p-0">
            <Tabs defaultValue="profile" className="w-full">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="profile">الملف الشخصي</TabsTrigger>
                <TabsTrigger value="listings">عقاراتي</TabsTrigger>
                <TabsTrigger value="add-property">إضافة عقار</TabsTrigger>
                <TabsTrigger value="messages">الرسائل</TabsTrigger>
              </TabsList>

              <TabsContent value="profile" className="p-6">
                <UserProfile />
              </TabsContent>

              <TabsContent value="listings" className="p-6">
                <MyListings />
              </TabsContent>

              <TabsContent value="add-property" className="p-6">
                <AddPropertyForm />
              </TabsContent>

              <TabsContent value="messages" className="p-6">
                <div className="text-center py-12">
                  <div className="text-gray-400 mb-4">
                    <div className="w-16 h-16 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                      💬
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-700 mb-2">
                    لا توجد رسائل
                  </h3>
                  <p className="text-gray-500">
                    سيتم عرض رسائلك وتفاعلاتك مع العملاء هنا
                  </p>
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>

      <Footer />
    </div>
  );
}