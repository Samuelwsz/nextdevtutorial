import IntroSection from "./_components/intro-section"
import AboutSection from "./_components/about-section"
import FeatureSection from "./_components/feature-section"
import FaqSection from "./_components/faq-section"
import InvestmentSection from "./_components/investiment-section"

export default function Home() {
  return (
    <main>
      <IntroSection />
      <AboutSection />
      <FeatureSection />
      <InvestmentSection />
      <FaqSection />
    </main>
  )
}
