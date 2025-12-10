import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <h3 className="text-xl font-bold mb-4">عن عقلية</h3>
            <p className="text-gray-400">
              منصة سعودية رائدة في مجال الذكاء القراري، نساعد المؤسسات على اتخاذ قرارات استراتيجية مدروسة
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">روابط سريعة</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-400 hover:text-white transition">
                  الرئيسية
                </Link>
              </li>
              <li>
                <Link href="/dashboard" className="text-gray-400 hover:text-white transition">
                  لوحة التحكم
                </Link>
              </li>
              <li>
                <Link href="/auth/login" className="text-gray-400 hover:text-white transition">
                  تسجيل الدخول
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-bold mb-4">الخدمات</h3>
            <ul className="space-y-2">
              <li className="text-gray-400">محرك القرارات الذكي</li>
              <li className="text-gray-400">التقارير التفاعلية</li>
              <li className="text-gray-400">إدارة العمليات</li>
              <li className="text-gray-400">التكامل مع الأنظمة</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-bold mb-4">تواصل معنا</h3>
            <ul className="space-y-2 text-gray-400">
              <li>البريد الإلكتروني: info@aqliya.sa</li>
              <li>الهاتف: +966 XX XXX XXXX</li>
              <li>المملكة العربية السعودية</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} AQLIYA - عقلية. جميع الحقوق محفوظة.</p>
        </div>
      </div>
    </footer>
  );
}
