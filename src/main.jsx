import React from "react";
import { createRoot } from "react-dom/client";
import "./style.css";

const services = [
  {
    title: "Cinema Camera Rentals",
    text: "Professional camera packages for film, commercial, documentary, and branded content productions."
  },
  {
    title: "Production Accessories",
    text: "Lenses, monitoring systems, wireless video, support gear, and production-ready technical accessories."
  },
  {
    title: "Technical Coordination",
    text: "Equipment guidance, package preparation, and technical support to help productions operate efficiently."
  }
];

const equipment = [
  "ARRI ALEXA Mini LF Production Set",
  "MVF-2 Viewfinder and professional camera accessories",
  "Cinema lenses and lens support systems",
  "Wireless monitoring and video transmission systems",
  "Lighting, grip, and production support packages",
  "Custom rental packages for commercial productions"
];

function App() {
  return (
    <main className="min-h-screen bg-neutral-950 text-white">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-neutral-950/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <div>
            <p className="text-xl font-bold tracking-wide">LIGHT SPEAR LLC</p>
            <p className="text-xs uppercase tracking-[0.35em] text-neutral-400">Cinema Equipment Rental</p>
          </div>
          <nav className="hidden gap-8 text-sm text-neutral-300 md:flex">
            <a href="#services" className="hover:text-white">Services</a>
            <a href="#equipment" className="hover:text-white">Equipment</a>
            <a href="#about" className="hover:text-white">About</a>
            <a href="#contact" className="hover:text-white">Contact</a>
          </nav>
        </div>
      </header>

      <section className="relative overflow-hidden px-6 py-24 md:py-32">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(250,204,21,0.18),transparent_35%),radial-gradient(circle_at_bottom_left,rgba(59,130,246,0.16),transparent_35%)]" />
        <div className="relative mx-auto grid max-w-7xl gap-12 md:grid-cols-[1.2fr_0.8fr] md:items-center">
          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.35em] text-yellow-400">United States Based Rental Company</p>
            <h1 className="max-w-4xl text-5xl font-bold leading-tight md:text-7xl">
              Professional cinema equipment for productions that demand precision.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-neutral-300">
              Light Spear LLC provides high-end cinema equipment rental solutions for film productions, commercial shoots, digital content creators, and media companies across the United States.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a href="#contact" className="rounded-full bg-yellow-400 px-8 py-4 text-center font-semibold text-black hover:bg-yellow-300">Request a Quote</a>
              <a href="#equipment" className="rounded-full border border-white/20 px-8 py-4 text-center font-semibold hover:bg-white/10">View Equipment</a>
            </div>
          </div>
          <div className="rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-2xl">
            <div className="rounded-[1.5rem] bg-neutral-900 p-8">
              <p className="text-sm uppercase tracking-[0.25em] text-neutral-400">Featured Package</p>
              <h2 className="mt-4 text-3xl font-bold">ARRI ALEXA Mini LF</h2>
              <p className="mt-4 text-neutral-300">
                Cinema-grade image quality, professional workflow compatibility, and reliable performance for demanding productions.
              </p>
              <div className="mt-8 grid gap-3 text-sm text-neutral-300">
                <span>• Production-ready camera systems</span>
                <span>• Professional accessories</span>
                <span>• Flexible rental packages</span>
                <span>• Technical preparation support</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-yellow-400">Services</p>
          <h2 className="mt-4 text-4xl font-bold">Rental solutions for professional productions</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {services.map((service) => (
              <article key={service.title} className="rounded-3xl border border-white/10 bg-white/[0.04] p-8">
                <h3 className="text-2xl font-semibold">{service.title}</h3>
                <p className="mt-4 leading-7 text-neutral-300">{service.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="equipment" className="bg-white px-6 py-20 text-neutral-950">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-neutral-500">Equipment</p>
          <h2 className="mt-4 text-4xl font-bold">Professional gear available for rental</h2>
          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {equipment.map((item) => (
              <div key={item} className="rounded-2xl border border-neutral-200 bg-neutral-50 p-6 font-medium">
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="px-6 py-20">
        <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-2 md:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-yellow-400">About Light Spear LLC</p>
            <h2 className="mt-4 text-4xl font-bold">Built to support modern visual production.</h2>
          </div>
          <p className="text-lg leading-8 text-neutral-300">
            Light Spear LLC was established to serve the growing demand for reliable, high-quality cinema equipment rental services in the United States. The company focuses on professional-grade technology, organized rental processes, and responsive service for production teams that require dependable equipment and clear communication.
          </p>
        </div>
      </section>

      <section className="px-6 py-20">
        <div className="mx-auto max-w-7xl rounded-[2rem] bg-yellow-400 p-10 text-black md:p-16">
          <div className="grid gap-10 md:grid-cols-3">
            <div><p className="text-5xl font-bold">01</p><h3 className="mt-4 text-xl font-bold">Request</h3><p className="mt-2">Share your production dates, location, and equipment needs.</p></div>
            <div><p className="text-5xl font-bold">02</p><h3 className="mt-4 text-xl font-bold">Confirm</h3><p className="mt-2">We prepare availability, package details, and rental terms.</p></div>
            <div><p className="text-5xl font-bold">03</p><h3 className="mt-4 text-xl font-bold">Produce</h3><p className="mt-2">Your production receives professional equipment ready for use.</p></div>
          </div>
        </div>
      </section>

      <section id="contact" className="px-6 py-24">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-yellow-400">Contact</p>
          <h2 className="mt-4 text-4xl font-bold">Request availability and pricing</h2>
          <p className="mt-6 text-neutral-300">
            Contact Light Spear LLC to discuss your production needs and receive a customized rental quote.
          </p>
          <div className="mt-10 rounded-3xl border border-white/10 bg-white/[0.04] p-8">
            <p className="text-lg font-semibold">Email: info@lightspearllc.com</p>
            <p className="mt-2 text-neutral-300">Phone: +1 (000) 000-0000</p>
            <p className="mt-2 text-neutral-300">United States</p>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 px-6 py-8 text-center text-sm text-neutral-400">
        © 2026 Light Spear LLC. All rights reserved.
      </footer>
    </main>
  );
}

createRoot(document.getElementById("root")).render(<App />);
