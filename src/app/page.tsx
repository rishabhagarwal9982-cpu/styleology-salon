"use client";

import { motion } from "framer-motion";
import { CalendarDays, Sparkles, Star, Scissors, Heart, Palette } from "lucide-react";

const services = [
  "Bridal Makeup",
  "Engagement Makeup",
  "Hair Styling",
  "Skin Care",
  "Hair Coloring",
  "Groom Makeup"
];

const reviews = [
  {
    name: "Priya Sharma",
    text: "Amazing bridal makeup and super professional team. Highly recommended!"
  },
  {
    name: "Anjali Verma",
    text: "Best salon in Jaipur. Premium service and beautiful results."
  },
  {
    name: "Rahul Gupta",
    text: "Excellent grooming and haircut experience. Very clean and classy."
  }
];

export default function Home() {
  return (
    <main className="bg-black text-white">
      <section className="min-h-screen flex items-center justify-center px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/hero.jpg')] bg-cover bg-center opacity-30 scale-110" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black" />
        <div className="relative z-10 max-w-5xl mx-auto text-center">
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-gold uppercase tracking-[0.4em] mb-4">
            Styleology Unisex Salon
          </motion.p>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="font-playfair text-5xl md:text-7xl font-bold leading-tight">
            Luxury Beauty <span className="gold-text">Beyond Expectations</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className="mt-6 text-lg md:text-2xl text-gray-300">
            Premium Hair, Skin & Bridal Makeup Experience
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }} className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#booking" className="px-8 py-4 rounded-full bg-gradient-gold text-black font-semibold hover:opacity-90 transition">
              Book Appointment
            </a>
            <a href="#services" className="px-8 py-4 rounded-full border border-gold text-gold hover-gold">
              Explore Services
            </a>
          </motion.div>
        </div>
      </section>

      <section id="services" className="py-20 px-6 bg-[#111]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-center font-playfair text-4xl md:text-5xl mb-4">Featured Services</h2>
          <p className="text-center text-gray-400 mb-12">Premium beauty services for every occasion</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s) => (
              <div key={s} className="card-lift bg-black border border-white/10 rounded-2xl p-6">
                <div className="w-14 h-14 rounded-full bg-gold/10 flex items-center justify-center mb-4">
                  <Sparkles className="text-gold" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{s}</h3>
                <p className="text-gray-400">Luxury service crafted to enhance your natural beauty.</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="font-playfair text-4xl md:text-5xl mb-6">Why Choose Us</h2>
            <div className="space-y-4 text-gray-300">
              <p>4.8⭐ rating with 290+ reviews</p>
              <p>Luxury bridal & salon experience</p>
              <p>Premium products and expert artists</p>
              <p>Jaipur's trusted unisex salon</p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              { icon: Heart, label: "Bridal" },
              { icon: Scissors, label: "Hair" },
              { icon: Palette, label: "Skin" },
              { icon: Star, label: "Luxury" }
            ].map(({ icon: Icon, label }) => (
              <div key={label} className="bg-[#111] border border-white/10 rounded-2xl p-6 text-center">
                <Icon className="mx-auto text-gold mb-3" />
                <p>{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-[#111]">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-playfair text-4xl md:text-5xl text-center mb-12">Client Reviews</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {reviews.map((r) => (
              <div key={r.name} className="bg-black border border-gold/20 rounded-2xl p-6">
                <div className="flex gap-1 text-gold mb-4">
                  <Star className="fill-gold" />
                  <Star className="fill-gold" />
                  <Star className="fill-gold" />
                  <Star className="fill-gold" />
                  <Star className="fill-gold" />
                </div>
                <h3 className="font-semibold mb-2">{r.name}</h3>
                <p className="text-gray-400">{r.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="booking" className="py-24 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-playfair text-4xl md:text-6xl mb-6">Book Your Bridal Appointment Today</h2>
          <p className="text-gray-400 mb-8 text-lg">Call or WhatsApp us now for premium salon bookings in Jaipur.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:8440048001" className="px-8 py-4 rounded-full bg-gradient-gold text-black font-semibold">
              Call 8440048001
            </a>
            <a href="https://wa.me/918440048001" className="px-8 py-4 rounded-full border border-gold text-gold">
              WhatsApp Now
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
