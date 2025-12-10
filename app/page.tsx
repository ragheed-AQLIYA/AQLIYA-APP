import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="gradient-primary text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              منصة عقلية للذكاء القراري
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              حلول ذكية لدعم اتخاذ القرارات الاستراتيجية في المؤسسات السعودية
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Link
                href="/auth/register"
                className="bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
              >
                ابدأ الآن
              </Link>
              <Link
                href="/dashboard"
                className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition"
              >
                لوحة التحكم
              </Link>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-12">المزايا الرئيسية</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-lg card-hover">
                <div className="text-4xl mb-4">🧠</div>
                <h3 className="text-2xl font-bold mb-4">محرك القرارات الذكي</h3>
                <p className="text-gray-600">
                  تحليل متقدم للبيانات باستخدام الذكاء الاصطناعي لتقديم توصيات دقيقة
                </p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-lg card-hover">
                <div className="text-4xl mb-4">📊</div>
                <h3 className="text-2xl font-bold mb-4">تقارير تفاعلية</h3>
                <p className="text-gray-600">
                  لوحات معلومات ديناميكية ورؤى بصرية لفهم أفضل للبيانات
                </p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-lg card-hover">
                <div className="text-4xl mb-4">🔗</div>
                <h3 className="text-2xl font-bold mb-4">تكامل سلس</h3>
                <p className="text-gray-600">
                  اتصال مباشر مع أنظمة AQLIYA-ENGINE و AQLIYA-ORCHESTRATION
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Integration Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-12">التكامل مع النظام البيئي</h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-lg border-2 border-blue-200">
                <h3 className="text-2xl font-bold mb-4 text-blue-900">AQLIYA-ENGINE</h3>
                <p className="text-blue-800 mb-4">
                  محرك القرارات الذكي الذي يعتمد على الذكاء الاصطناعي لمعالجة البيانات وتقديم التوصيات
                </p>
                <div className="text-sm text-blue-700">
                  <strong>الحالة:</strong> جاهز للتكامل
                </div>
              </div>
              <div className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-lg border-2 border-green-200">
                <h3 className="text-2xl font-bold mb-4 text-green-900">AQLIYA-ORCHESTRATION</h3>
                <p className="text-green-800 mb-4">
                  نظام إدارة وتنسيق العمليات والتدفقات المعقدة بين مكونات المنصة
                </p>
                <div className="text-sm text-green-700">
                  <strong>الحالة:</strong> جاهز للتكامل
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="gradient-secondary text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              ابدأ رحلتك مع عقلية اليوم
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              انضم إلى المؤسسات الرائدة التي تستخدم AQLIYA لتحسين قراراتها الاستراتيجية
            </p>
            <Link
              href="/auth/register"
              className="bg-white text-secondary px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition inline-block"
            >
              سجل مجاناً
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
