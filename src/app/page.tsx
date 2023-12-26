import { cn } from "@/lib/utils"
import { ModeToggle } from "./_components/mode-toggle"
import { buttonVariants } from "@/components/ui/button"

export default function Home() {
  return (
    <main>
      <section id="intro" className="space-y-6 py-8 md:py-12 lg:py-32">
        <div className="container flex max-w-[64rem] flex-col items-center text-center gap-4">
          <span className="rounded-2xl bg-muted px-4 py-1.5 text-sm font-medium flex items-center">
            Lorem ipsum dolor
            <ModeToggle />
          </span>
          <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl">
            Lorem ipsum dolor
          </h1>
          <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus quasi
            perferendis corporis eum molestias quae? Sunt saepe reiciendis,
            culpa eligendi ipsum vel ea exercitationem, sequi cum deserunt quae,
            voluptatem voluptates!
          </p>
          <div className="space-x-4">
            <a
              href="#investiment"
              className="bg-primary py-2 px-4 text-md text-white rounded shadow-lg font-bold"
            >
              Quero fazer parte
            </a>
            <a
              href="#feature"
              className={cn(buttonVariants({ variant: "outline", size: "lg" }))}
            >
              Saiba mais
            </a>
          </div>
        </div>
        <h1 className="text-primary">
          <span>the nextdev tutorial</span>
        </h1>
      </section>
      <section id="about">
        <h1 className="text-primary">Sobre</h1>
      </section>
      <section id="feature">
        <h1 className="text-primary">Tech Stack</h1>
      </section>
      <section id="investiment">
        <h1 className="text-primary">Investiment</h1>
      </section>
      <section id="faq">
        <h1 className="text-primary">faq</h1>
      </section>
    </main>
  )
}
