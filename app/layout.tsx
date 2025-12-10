import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AQLIYA - منصة عقلية للذكاء القراري",
  description: "منصة سعودية للذكاء القراري تساعد المؤسسات على اتخاذ قرارات استراتيجية مدروسة",
  keywords: ["AQLIYA", "Decision Intelligence", "Saudi Arabia", "عقلية"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar" dir="rtl">
      <body className="antialiased">{children}</body>
    </html>
  );
}
