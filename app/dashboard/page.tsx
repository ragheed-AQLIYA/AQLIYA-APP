"use client";

import { useState } from "react";

export default function DashboardPage() {
  const [engineStatus] = useState({
    connected: true,
    lastSync: new Date().toLocaleString("ar-SA"),
    version: "1.0.0",
  });

  const [orchestrationStatus] = useState({
    connected: true,
    lastSync: new Date().toLocaleString("ar-SA"),
    version: "1.0.0",
  });

  return (
    <div className="space-y-6">
      {/* Welcome Section */}
      <div className="bg-gradient-to-r from-primary to-primary-light text-white rounded-lg p-6">
        <h1 className="text-3xl font-bold mb-2">مرحباً بك في لوحة التحكم</h1>
        <p className="text-white/90">
          إدارة قراراتك الاستراتيجية وتحليل بياناتك من مكان واحد
        </p>
      </div>

      {/* Stats Cards */}
      <div className="grid md:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-gray-600 text-sm">القرارات النشطة</h3>
            <span className="text-2xl">📊</span>
          </div>
          <p className="text-3xl font-bold text-primary">24</p>
          <p className="text-xs text-gray-500 mt-1">+3 هذا الأسبوع</p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-gray-600 text-sm">التقارير</h3>
            <span className="text-2xl">📈</span>
          </div>
          <p className="text-3xl font-bold text-secondary">12</p>
          <p className="text-xs text-gray-500 mt-1">+2 اليوم</p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-gray-600 text-sm">العمليات الجارية</h3>
            <span className="text-2xl">⚙️</span>
          </div>
          <p className="text-3xl font-bold text-accent">8</p>
          <p className="text-xs text-gray-500 mt-1">نشطة الآن</p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-gray-600 text-sm">الأداء</h3>
            <span className="text-2xl">⚡</span>
          </div>
          <p className="text-3xl font-bold text-green-600">98%</p>
          <p className="text-xs text-gray-500 mt-1">معدل النجاح</p>
        </div>
      </div>

      {/* Integration Status */}
      <div className="grid md:grid-cols-2 gap-6">
        {/* AQLIYA-ENGINE Status */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
            <span className="text-2xl">🧠</span>
            AQLIYA-ENGINE
          </h2>
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-gray-600">الحالة</span>
              <span
                className={`px-3 py-1 rounded-full text-sm font-semibold ${
                  engineStatus.connected
                    ? "bg-green-100 text-green-800"
                    : "bg-red-100 text-red-800"
                }`}
              >
                {engineStatus.connected ? "متصل" : "غير متصل"}
              </span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600">آخر مزامنة</span>
              <span className="text-sm text-gray-800">{engineStatus.lastSync}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600">الإصدار</span>
              <span className="text-sm text-gray-800">{engineStatus.version}</span>
            </div>
            <button className="w-full mt-4 bg-blue-50 text-primary py-2 rounded-lg hover:bg-blue-100 transition">
              عرض التفاصيل
            </button>
          </div>
        </div>

        {/* AQLIYA-ORCHESTRATION Status */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
            <span className="text-2xl">🔗</span>
            AQLIYA-ORCHESTRATION
          </h2>
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-gray-600">الحالة</span>
              <span
                className={`px-3 py-1 rounded-full text-sm font-semibold ${
                  orchestrationStatus.connected
                    ? "bg-green-100 text-green-800"
                    : "bg-red-100 text-red-800"
                }`}
              >
                {orchestrationStatus.connected ? "متصل" : "غير متصل"}
              </span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600">آخر مزامنة</span>
              <span className="text-sm text-gray-800">{orchestrationStatus.lastSync}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600">الإصدار</span>
              <span className="text-sm text-gray-800">{orchestrationStatus.version}</span>
            </div>
            <button className="w-full mt-4 bg-green-50 text-secondary py-2 rounded-lg hover:bg-green-100 transition">
              عرض التفاصيل
            </button>
          </div>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-xl font-bold mb-4">النشاط الأخير</h2>
        <div className="space-y-4">
          <div className="flex items-start gap-4 pb-4 border-b">
            <div className="text-2xl">✅</div>
            <div className="flex-grow">
              <h3 className="font-semibold">اكتمال تحليل القرار الاستراتيجي</h3>
              <p className="text-sm text-gray-600">تم تحليل البيانات وإنشاء التوصيات</p>
              <p className="text-xs text-gray-400 mt-1">منذ ساعة واحدة</p>
            </div>
          </div>
          <div className="flex items-start gap-4 pb-4 border-b">
            <div className="text-2xl">📊</div>
            <div className="flex-grow">
              <h3 className="font-semibold">تقرير جديد متاح</h3>
              <p className="text-sm text-gray-600">تقرير الأداء الشهري جاهز للمراجعة</p>
              <p className="text-xs text-gray-400 mt-1">منذ ساعتين</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="text-2xl">⚙️</div>
            <div className="flex-grow">
              <h3 className="font-semibold">بدء عملية جديدة</h3>
              <p className="text-sm text-gray-600">تم تشغيل سير عمل التحليل التلقائي</p>
              <p className="text-xs text-gray-400 mt-1">منذ 3 ساعات</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
