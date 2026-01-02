import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import CoursesSection from "@/components/CoursesSection";
import ScholarshipSection from "@/components/ScholarshipSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import ImpactSection from "@/components/ImpactSection";
import FAQSection from "@/components/FAQSection";
import ApplicationProcess from "@/components/ApplicationProcess";
import CTASection from "@/components/CTASection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import SmoothScroll from "@/components/SmoothScroll";

export default function Home() {
  return (
    <SmoothScroll>
      <main className="min-h-screen selection:bg-[#D6000D] selection:text-white font-sans">
        <Navbar />

        <HeroSection />

        <section id="scholarships">
          <ScholarshipSection />
        </section>

        <section id="courses">
          <CoursesSection />
        </section>

        <section id="why-us">
          <WhyChooseUs />
        </section>

        {/* <section id="testimonials"> */}
        {/*   <TestimonialsSection /> */}
        {/* </section> */}

        <ImpactSection />

        <section id="process">
          <ApplicationProcess />
        </section>

        <FAQSection />

        <CTASection />

        <section id="contact">
          <ContactSection />
        </section>

        <Footer />
      </main>
    </SmoothScroll>
  );
}
