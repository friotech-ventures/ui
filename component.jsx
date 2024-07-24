/**
 * v0 by Vercel.
 * @see https://v0.dev/t/rAb57xvgREz
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link"
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion"

export default function Component() {
  return (
    <div className="flex flex-col min-h-[100dvh] bg-gradient-to-t from-[#000000] to-[#5e0d6b] text-foreground">
      <header className="fixed top-0 left-0 right-0 w-full bg-background/60 px-4 md:px-6 h-16 flex items-center z-50 backdrop-blur-lg">
        <Link href="#" className="flex items-center justify-center" prefetch={false}>
          <GamepadIcon className="h-6 w-6" />
          <span className="sr-only">PlayUnite</span>
        </Link>
        <nav className="ml-auto flex items-center gap-4 sm:gap-6">
          <Link
            href="#"
            className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
            prefetch={false}
          >
            Login
          </Link>
        </nav>
      </header>
      <main className="flex-1 pt-16">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container grid items-center justify-center gap-8 px-4 md:px-6 lg:grid-cols-2 lg:gap-16">
            <div className="space-y-4">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl text-white">
                Elevate Your Esports Experience
              </h1>
              <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Join our thriving esports community and compete in high-stakes tournaments, watch live streams, and
                connect with fellow gaming enthusiasts.
              </p>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link
                  href="#"
                  className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                  prefetch={false}
                >
                  Join Now
                </Link>
                <Link
                  href="#"
                  className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                  prefetch={false}
                >
                  Learn More
                </Link>
              </div>
            </div>
            <div className="grid gap-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-lg bg-background/60 p-4 backdrop-blur-lg">
                  <div className="flex items-center justify-between">
                    <div className="space-y-1">
                      <h3 className="text-lg font-bold bg-gradient-to-r from-purple-500 to-white bg-clip-text text-transparent">
                        $50,000
                      </h3>
                      <p className="text-sm text-muted-foreground">Prize Pool</p>
                    </div>
                    <TrophyIcon className="h-8 w-8 bg-gradient-to-r from-purple-500 to-white bg-clip-text text-transparent" />
                  </div>
                </div>
                <div className="rounded-lg bg-background/60 p-4 backdrop-blur-lg">
                  <div className="flex items-center justify-between">
                    <div className="space-y-1">
                      <h3 className="text-lg font-bold bg-gradient-to-r from-purple-500 to-white bg-clip-text text-transparent">
                        100+
                      </h3>
                      <p className="text-sm text-muted-foreground">Tournaments</p>
                    </div>
                    <TrophyIcon className="h-8 w-8 bg-gradient-to-r from-purple-500 to-white bg-clip-text text-transparent" />
                  </div>
                </div>
              </div>
              <div className="rounded-lg bg-background/60 p-4 backdrop-blur-lg">
                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <h3 className="text-lg font-bold bg-gradient-to-r from-purple-500 to-white bg-clip-text text-transparent">
                      1M+
                    </h3>
                    <p className="text-sm text-muted-foreground">Registered Players</p>
                  </div>
                  <UsersIcon className="h-8 w-8 bg-gradient-to-r from-purple-500 to-white bg-clip-text text-transparent" />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/10">
          <div className="container grid items-center justify-center gap-8 px-4 md:px-6 lg:grid-cols-2 lg:gap-16">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl bg-gradient-to-r from-purple-500 to-white bg-clip-text text-transparent">
                About Us
              </h2>
              <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                PlayUnite is a leading esports platform that brings together gaming enthusiasts from around the world.
                Our mission is to create a thriving community where players can compete in high-stakes tournaments,
                connect with like-minded individuals, and elevate their esports experience.
              </p>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/10">
          <div className="container grid items-center justify-center gap-8 px-4 md:px-6 lg:grid-cols-2 lg:gap-16">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl bg-gradient-to-r from-purple-500 to-white bg-clip-text text-transparent">
                Frequently Asked Questions
              </h2>
              <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Get answers to the most common questions about our esports platform.
              </p>
            </div>
            <div className="grid gap-4">
              <Accordion type="single" collapsible className="rounded-lg bg-background/60 p-4 backdrop-blur-lg">
                <AccordionItem value="item-1">
                  <AccordionTrigger className="flex justify-between">
                    <h3 className="text-lg font-bold">What games are supported on the platform?</h3>
                    <ChevronDownIcon className="h-5 w-5 transition-transform duration-300 [&[data-state=open]]:rotate-180" />
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="text-muted-foreground">
                      Our esports platform supports a wide range of popular games, including League of Legends, Dota 2,
                      Counter-Strike: Global Offensive, Overwatch, and more. We're constantly expanding our game library
                      to cater to the diverse interests of our community.
                    </p>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
              <Accordion type="single" collapsible className="rounded-lg bg-background/60 p-4 backdrop-blur-lg">
                <AccordionItem value="item-2">
                  <AccordionTrigger className="flex justify-between">
                    <h3 className="text-lg font-bold">How do I sign up for tournaments?</h3>
                    <ChevronDownIcon className="h-5 w-5 transition-transform duration-300 [&[data-state=open]]:rotate-180" />
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="text-muted-foreground">
                      Signing up for tournaments on our platform is easy. Simply create an account, navigate to the
                      tournaments section, and select the event you'd like to participate in. You'll need to form a team
                      or join an existing one, and then complete the registration process. Our team is here to guide you
                      through the entire process.
                    </p>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
              <Accordion type="single" collapsible className="rounded-lg bg-background/60 p-4 backdrop-blur-lg">
                <AccordionItem value="item-3">
                  <AccordionTrigger className="flex justify-between">
                    <h3 className="text-lg font-bold">What kind of support do you offer?</h3>
                    <ChevronDownIcon className="h-5 w-5 transition-transform duration-300 [&[data-state=open]]:rotate-180" />
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="text-muted-foreground">
                      We pride ourselves on our exceptional customer support. Our team of dedicated professionals is
                      available 24/7 to assist you with any questions or issues you may have. Whether you need help with
                      tournament registration, technical support, or just want to chat with fellow gamers, we're here to
                      help. You can reach us via email, live chat, or our community forums.
                    </p>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/10">
          <div className="container grid items-center justify-center gap-8 px-4 md:px-6 lg:grid-cols-2 lg:gap-16">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl bg-gradient-to-r from-purple-500 to-white bg-clip-text text-transparent">
                Our Clients
              </h2>
              <div className="grid grid-cols-3 gap-6">
                <img
                  src="/placeholder.svg"
                  width="140"
                  height="70"
                  alt="Logo"
                  className="aspect-[2/1] overflow-hidden rounded-lg object-contain object-center"
                />
                <img
                  src="/placeholder.svg"
                  width="140"
                  height="70"
                  alt="Logo"
                  className="aspect-[2/1] overflow-hidden rounded-lg object-contain object-center"
                />
                <img
                  src="/placeholder.svg"
                  width="140"
                  height="70"
                  alt="Logo"
                  className="aspect-[2/1] overflow-hidden rounded-lg object-contain object-center"
                />
                <img
                  src="/placeholder.svg"
                  width="140"
                  height="70"
                  alt="Logo"
                  className="aspect-[2/1] overflow-hidden rounded-lg object-contain object-center"
                />
                <img
                  src="/placeholder.svg"
                  width="140"
                  height="70"
                  alt="Logo"
                  className="aspect-[2/1] overflow-hidden rounded-lg object-contain object-center"
                />
                <img
                  src="/placeholder.svg"
                  width="140"
                  height="70"
                  alt="Logo"
                  className="aspect-[2/1] overflow-hidden rounded-lg object-contain object-center"
                />
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t bg-background text-foreground">
        <p className="text-xs">&copy; 2024 PlayUnite. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link href="#" className="text-xs hover:underline underline-offset-4" prefetch={false}>
            Terms of Service
          </Link>
          <Link href="#" className="text-xs hover:underline underline-offset-4" prefetch={false}>
            Privacy
          </Link>
          <Link href="#" className="text-xs hover:underline underline-offset-4" prefetch={false}>
            Contact
          </Link>
        </nav>
      </footer>
    </div>
  )
}

function ChevronDownIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m6 9 6 6 6-6" />
    </svg>
  )
}


function GamepadIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="6" x2="10" y1="12" y2="12" />
      <line x1="8" x2="8" y1="10" y2="14" />
      <line x1="15" x2="15.01" y1="13" y2="13" />
      <line x1="18" x2="18.01" y1="11" y2="11" />
      <rect width="20" height="12" x="2" y="6" rx="2" />
    </svg>
  )
}


function TrophyIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
      <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
      <path d="M4 22h16" />
      <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" />
      <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" />
      <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z" />
    </svg>
  )
}


function UsersIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  )
}


function XIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  )
}
