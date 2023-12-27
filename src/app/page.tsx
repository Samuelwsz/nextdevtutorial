import IntroSection from "./_components/intro-section"
import AboutSection from "./_components/about-section"
import FeatureSection from "./_components/feature-section"
import FaqSection from "./_components/faq-section"

export default function Home() {
  return (
    <main>
      <IntroSection />
      <AboutSection />
      <FeatureSection />
      <section id="investiment">
        <h1 className="text-primary">Investiment</h1>
      </section>
      <FaqSection />
    </main>
  )
}
