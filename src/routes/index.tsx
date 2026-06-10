import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import heroBg from "@/assets/hero-bg.jpg";
import billyAsset from "@/assets/billy.asset.json";
import alexAsset from "@/assets/alex.asset.json";
import ivanAsset from "@/assets/ivan.asset.json";
import kagarama1 from "@/assets/kagarama-1.jpg.asset.json";
import kagarama2 from "@/assets/kagarama-2.jpg.asset.json";
import kagarama3 from "@/assets/kagarama-3.jpg.asset.json";
import kagarama4 from "@/assets/kagarama-4.jpg.asset.json";

const volunteering = [
  { src: kagarama2.url, caption: "Leading a Figma session at Kagarama Secondary School" },
  { src: kagarama1.url, caption: "Students learning design fundamentals hands-on" },
  { src: kagarama4.url, caption: "Live walkthrough of Canva and Google tools" },
  { src: kagarama3.url, caption: "Mixed cohort exploring digital design together" },
];

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Elevate Tech Solutions — Building Rwanda's Digital Future" },
      { name: "description", content: "We design websites, school & business management systems, mobile apps, and database solutions — and train Rwanda's next generation of digital professionals." },
      { property: "og:title", content: "Elevate Tech Solutions" },
      { property: "og:description", content: "Building Rwanda's Digital Future, One Solution at a Time." },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

const services = [
  { icon: "🌐", title: "Website Development", desc: "Modern, responsive, user-friendly websites that grow your brand and convert visitors into customers." },
  { icon: "🎓", title: "School & University Systems", desc: "End-to-end platforms for admissions, student records, attendance, exams, fees, and communication." },
  { icon: "🏢", title: "Business Management Systems", desc: "Automate operations, manage employees, track inventory, finances, and decisions with custom software." },
  { icon: "📱", title: "Mobile App Development", desc: "Powerful Android and iOS apps that bring your services to customers anywhere, anytime." },
  { icon: "🗄️", title: "Database Solutions", desc: "Secure, scalable, efficient database systems built to protect and grow with your organization." },
  { icon: "🎯", title: "UI/UX Design", desc: "Intuitive, beautiful interfaces designed to delight users and elevate your brand experience." },
];

const trainings = ["Figma", "Canva", "Git & GitHub", "GitHub Actions", "Web Development", "UI/UX Design", "AI Tools & Productivity", "Modern Workplace Tech", "Digital Collaboration"];

const reasons = [
  "Solutions tailored to the Rwandan market",
  "Affordable and scalable technology services",
  "Quality, security, and user experience first",
  "Strong commitment to youth empowerment",
  "Local support and long-term partnership",
  "Aligned with Rwanda's digital transformation goals",
];

const team = [
  { name: "Alex Tuyisenge", role: "Chief Technical Operations", img: alexAsset.url, initials: "AT" },
  { name: "Arsene Kundwa", role: "Full-Stack Developer", img: null, initials: "AK" },
  { name: "Edmond Magaju", role: "Designer & Communications", img: null, initials: "EM" },
  { name: "Ivan Captain", role: "Network Security & Marketing", img: ivanAsset.url, initials: "IC" },
  { name: "Billy", role: "Full-Stack Developer & Consultant in Charge", img: billyAsset.url, initials: "B" },
];

function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <Hero />
      <About />
      <Services />
      <Training />
      <WhyUs />
      <Team />
      <Contact />
      <Footer />
    </div>
  );
}

function Header() {
  const [open, setOpen] = useState(false);
  const links = [
    { href: "#about", label: "About" },
    { href: "#services", label: "Services" },
    { href: "#training", label: "Training" },
    { href: "#team", label: "Team" },
    { href: "#contact", label: "Contact" },
  ];
  return (
    <header className="fixed top-0 z-50 w-full glass">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a href="#top" className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gold-gradient font-bold text-accent-foreground">E</div>
          <span className="font-display text-lg font-bold tracking-tight">Elevate <span className="text-gradient-gold">Tech</span></span>
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          {links.map(l => <a key={l.href} href={l.href} className="text-muted-foreground hover:text-foreground transition-colors">{l.label}</a>)}
        </nav>
        <a href="#contact" className="hidden md:inline-flex rounded-full bg-gold-gradient px-5 py-2 text-sm font-semibold text-accent-foreground shadow-gold hover:scale-105 transition-transform">Get in touch</a>
        <button onClick={() => setOpen(!open)} className="md:hidden text-2xl" aria-label="Menu">{open ? "✕" : "☰"}</button>
      </div>
      {open && (
        <div className="md:hidden border-t border-border/50 px-6 py-4 flex flex-col gap-3">
          {links.map(l => <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="text-sm text-muted-foreground">{l.label}</a>)}
        </div>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative min-h-screen flex items-center overflow-hidden bg-hero pt-24">
      <img src={heroBg} alt="" className="absolute inset-0 h-full w-full object-cover opacity-30 mix-blend-screen" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/40 to-background" />
      <div className="relative mx-auto max-w-7xl px-6 py-20 grid md:grid-cols-12 gap-12 items-center">
        <div className="md:col-span-7 animate-fade-up">
          <div className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs font-medium text-gold">
            <span className="h-2 w-2 rounded-full bg-gold animate-pulse" /> Based in Kigali, Rwanda
          </div>
          <h1 className="mt-6 font-display text-5xl md:text-7xl font-bold leading-[1.05]">
            Empowering Rwanda through <span className="text-gradient-gold">digital innovation</span>.
          </h1>
          <p className="mt-6 max-w-xl text-lg text-muted-foreground leading-relaxed">
            We build reliable, affordable, and scalable software for businesses, schools, and organizations — while training Rwanda's next generation of digital professionals.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <a href="#services" className="rounded-full bg-gold-gradient px-7 py-3.5 text-sm font-semibold text-accent-foreground shadow-gold hover:scale-105 transition-transform">Explore our services</a>
            <a href="#contact" className="rounded-full glass px-7 py-3.5 text-sm font-semibold border border-gold/30 hover:border-gold transition-colors">Start a project →</a>
          </div>
          <div className="mt-16 grid grid-cols-3 gap-6 max-w-md">
            {[{n:"5+",l:"Co-founders"},{n:"9+",l:"Training tracks"},{n:"100%",l:"Local support"}].map(s => (
              <div key={s.l}>
                <div className="font-display text-3xl font-bold text-gradient-gold">{s.n}</div>
                <div className="text-xs text-muted-foreground mt-1">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="md:col-span-5 relative hidden md:block">
          <div className="relative animate-float">
            <div className="absolute -inset-8 bg-gold-gradient opacity-20 blur-3xl rounded-full" />
            <div className="relative glass rounded-3xl p-8 shadow-elegant">
              <div className="font-mono text-xs text-muted-foreground mb-4">// elevate.tech / rwanda</div>
              <div className="space-y-3">
                {["🌐 Web Platforms","🎓 EdTech Systems","🏢 Business Software","📱 Mobile Apps","🗄️ Databases"].map((s,i) => (
                  <div key={s} className="flex items-center gap-3 rounded-xl bg-card/50 border border-border/50 px-4 py-3 hover:border-gold/50 transition-colors" style={{animationDelay:`${i*0.1}s`}}>
                    <span className="text-xl">{s.split(" ")[0]}</span>
                    <span className="text-sm font-medium">{s.substring(s.indexOf(" ")+1)}</span>
                    <span className="ml-auto text-xs text-gold">→</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function SectionHeader({ tag, title, desc }: { tag: string; title: React.ReactNode; desc?: string }) {
  return (
    <div className="max-w-3xl">
      <div className="text-xs font-semibold tracking-[0.2em] text-gold uppercase">{tag}</div>
      <h2 className="mt-3 font-display text-4xl md:text-5xl font-bold leading-tight">{title}</h2>
      {desc && <p className="mt-4 text-lg text-muted-foreground">{desc}</p>}
    </div>
  );
}

function About() {
  return (
    <section id="about" className="py-28 px-6">
      <div className="mx-auto max-w-7xl grid md:grid-cols-2 gap-16 items-start">
        <SectionHeader tag="About us" title={<>Bridging the gap between <span className="text-gradient-emerald">technology and growth</span>.</>} />
        <div className="space-y-5 text-muted-foreground text-lg leading-relaxed">
          <p>Elevate Tech Solutions is a Kigali-based startup helping businesses, schools, universities, organizations, and entrepreneurs transform their operations through innovative digital solutions.</p>
          <p>As Rwanda becomes a leading digital economy, we partner with institutions to improve efficiency, productivity, and customer experience through modern technology — tailored to the Rwandan market.</p>
        </div>
      </div>
      <div className="mx-auto max-w-7xl mt-20 grid md:grid-cols-2 gap-6">
        {[
          {tag:"Our Vision",text:"To become one of Rwanda's leading technology companies — driving digital transformation and empowering businesses, institutions, and young professionals through innovative solutions."},
          {tag:"Our Mission",text:"To deliver high-quality digital solutions that improve efficiency, foster innovation, create opportunities, and contribute to Rwanda's vision of a knowledge-based economy."},
        ].map(c => (
          <div key={c.tag} className="bg-card-gradient border border-border/60 rounded-3xl p-8 hover:border-gold/40 transition-colors">
            <div className="text-xs font-semibold tracking-[0.2em] text-gold uppercase">{c.tag}</div>
            <p className="mt-4 text-lg leading-relaxed">{c.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function Services() {
  return (
    <section id="services" className="py-28 px-6 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-secondary/20 to-transparent pointer-events-none" />
      <div className="relative mx-auto max-w-7xl">
        <SectionHeader tag="What we do" title={<>Software solutions <span className="text-gradient-gold">built for impact</span>.</>} desc="From custom platforms to mobile experiences — we deliver technology that scales with your ambitions." />
        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <div key={s.title} className="group relative bg-card-gradient border border-border/60 rounded-2xl p-7 hover:border-gold/60 hover:-translate-y-1 transition-all duration-500" style={{animationDelay:`${i*0.05}s`}}>
              <div className="text-4xl mb-5">{s.icon}</div>
              <h3 className="font-display text-xl font-semibold">{s.title}</h3>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              <div className="mt-6 text-sm font-medium text-gold opacity-0 group-hover:opacity-100 transition-opacity">Learn more →</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Training() {
  return (
    <section id="training" className="py-28 px-6">
      <div className="mx-auto max-w-7xl">
        <SectionHeader tag="Skills & Community" title={<>Training Rwanda's <span className="text-gradient-emerald">next generation</span> of digital professionals.</>} desc="Hands-on learning, mentorship, and volunteering programs designed to equip students, graduates, and young professionals with industry-relevant skills." />
        <div className="mt-14 flex flex-wrap gap-3">
          {trainings.map(t => (
            <div key={t} className="glass rounded-full px-5 py-3 text-sm font-medium hover:border-gold hover:text-gold transition-colors cursor-default">
              {t}
            </div>
          ))}
        </div>
        <div className="mt-14 grid md:grid-cols-3 gap-6">
          {[
            {n:"01",t:"Practical Training",d:"Hands-on, real-world projects from day one."},
            {n:"02",t:"Mentorship",d:"Guidance from working professionals across the stack."},
            {n:"03",t:"Volunteering",d:"Contribute to real impact while growing your craft."},
          ].map(c => (
            <div key={c.n} className="border border-border/60 rounded-2xl p-7 bg-card/40">
              <div className="font-display text-5xl font-bold text-gradient-gold">{c.n}</div>
              <div className="mt-3 font-semibold text-lg">{c.t}</div>
              <div className="mt-2 text-sm text-muted-foreground">{c.d}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhyUs() {
  return (
    <section className="py-28 px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-emerald-gradient opacity-[0.08]" />
      <div className="relative mx-auto max-w-7xl">
        <SectionHeader tag="Why choose us" title={<>Reasons partners <span className="text-gradient-gold">trust Elevate</span>.</>} />
        <div className="mt-14 grid sm:grid-cols-2 gap-4">
          {reasons.map(r => (
            <div key={r} className="flex items-start gap-4 glass rounded-xl p-5">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gold-gradient flex items-center justify-center text-accent-foreground font-bold">✓</div>
              <p className="text-base font-medium pt-1">{r}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Team() {
  return (
    <section id="team" className="py-28 px-6">
      <div className="mx-auto max-w-7xl">
        <SectionHeader tag="Our team" title={<>The minds behind <span className="text-gradient-emerald">Elevate Tech</span>.</>} desc="A passionate team of co-founders building Rwanda's digital future." />
        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {team.map(m => (
            <div key={m.name} className="group">
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden bg-card-gradient border border-border/60 group-hover:border-gold/60 transition-all duration-500">
                {m.img ? (
                  <img src={m.img} alt={m.name} className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-700" />
                ) : (
                  <div className="absolute inset-0 flex flex-col items-center justify-center bg-card-gradient">
                    <div className="w-24 h-24 rounded-full bg-gold-gradient flex items-center justify-center font-display font-bold text-3xl text-accent-foreground">{m.initials}</div>
                    <div className="mt-4 text-xs text-muted-foreground">Photo coming soon</div>
                  </div>
                )}
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-background via-background/80 to-transparent p-5 pt-16">
                  <div className="font-display font-semibold text-lg">{m.name}</div>
                  <div className="text-xs text-gold mt-1">{m.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="py-28 px-6">
      <div className="mx-auto max-w-5xl relative">
        <div className="absolute -inset-10 bg-gold-gradient opacity-10 blur-3xl rounded-full" />
        <div className="relative glass rounded-3xl p-12 md:p-16 text-center border-gold/30 shadow-elegant">
          <div className="text-xs font-semibold tracking-[0.2em] text-gold uppercase">Get in touch</div>
          <h2 className="mt-4 font-display text-4xl md:text-6xl font-bold leading-tight">
            Let's build your <span className="text-gradient-gold">next solution</span>.
          </h2>
          <p className="mt-5 text-lg text-muted-foreground max-w-2xl mx-auto">
            Have a project in mind, or want to join our training programs? Reach out — we'd love to hear from you.
          </p>
          <div className="mt-10 flex flex-wrap gap-4 justify-center">
            <a href="mailto:tuyisengealex071@gmail.com" className="rounded-full bg-gold-gradient px-8 py-4 text-sm font-semibold text-accent-foreground shadow-gold hover:scale-105 transition-transform">
              tuyisengealex071@gmail.com
            </a>
            <a href="tel:+250790566926" className="rounded-full glass px-8 py-4 text-sm font-semibold border border-gold/30 hover:border-gold transition-colors">
              +250 790 566 926
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border/50 py-12 px-6">
      <div className="mx-auto max-w-7xl flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gold-gradient font-bold text-accent-foreground">E</div>
          <span className="font-display font-bold">Elevate Tech Solutions</span>
        </div>
        <p className="text-sm text-muted-foreground text-center">Building Rwanda's Digital Future, One Solution at a Time.</p>
        <p className="text-xs text-muted-foreground">© {new Date().getFullYear()} Elevate Tech</p>
      </div>
    </footer>
  );
}
