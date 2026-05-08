import { useState } from "react";
import { LangSwitcher } from "./LangSwitcher";
import { LanguagePopup } from "./LanguagePopup";
import heroImg from "@/assets/hero-tutor.jpg";
import aboutImg from "@/assets/about-tutor.jpg";
import speakingImg from "@/assets/speaking-lesson.jpg";
import onlineImg from "@/assets/online-lesson.jpg";

type Lang = "tr" | "en";

const WHATSAPP = "https://wa.me/905050030612?text=";

const T = {
  tr: {
    nav: { about: "Hakkımda", lessons: "Dersler", why: "Neden Biz", contact: "İletişim" },
    brand: "Ms. Burcu · English Tutor",
    location: "Eskişehir",
    hero: {
      tag: "Anadili İngilizce Eğitmen · Eskişehir",
      title: "Çocuğunuza İngilizceyi konuşturan birebir özel dersler.",
      sub: "İlkokul ve ortaokul öğrencileri için sıcak, güven veren ve konuşma odaklı bir öğrenme deneyimi.",
      cta1: "WhatsApp ile İletişime Geç",
      cta2: "Derslere Göz At",
      msg: "Merhaba Burcu Hanım, çocuğum için speaking odaklı İngilizce dersleri hakkında bilgi almak istiyorum.",
    },
    about: {
      kicker: "Hakkımda",
      title: "Çocuğunuzun yanında bir anadili İngilizce arkadaş.",
      body: "Merhaba! Ben Burcu. Yıllardır Türkiye'de çocuklarla birebir İngilizce çalışıyorum. Derslerim ezbere değil; doğal konuşmaya, kendine güvene ve eğlenceli iletişime dayanır. Her çocuğun ritmini anlar, ona özel bir yol haritası hazırlarım.",
      points: ["Anadili İngilizce", "5+ yıl çocuk eğitmenliği deneyimi", "Cambridge sertifikalı"],
    },
    speaking: {
      kicker: "Konuşma Odaklı Dersler",
      title: "Konuşmadan İngilizce öğrenilmez.",
      body: "Derslerimiz baştan sona İngilizcedir. Çocuğunuz; oyun, hikâye, görsel ve gerçek hayat diyalogları ile İngilizceyi düşünmeden konuşmayı öğrenir. Telaffuz, akıcılık ve özgüven bizim önceliğimizdir.",
    },
    oneOnOne: {
      kicker: "Birebir Eğitim",
      title: "Sadece çocuğunuza odaklanan tek bir eğitmen.",
      body: "Kalabalık sınıflar yok. Sadece çocuğunuz ve eğitmen. Her ders onun seviyesine, ilgi alanlarına ve hedeflerine göre özel olarak hazırlanır.",
    },
    modes: {
      kicker: "Online & Yüz Yüze",
      title: "Eskişehir'de yüz yüze, Türkiye'nin her yerinden online.",
      body: "Evinizin konforunda yüz yüze ya da güvenli bir online ortamda. Her iki seçenek de aynı sıcaklık ve aynı kalitedeyle sunulur.",
      face: "Yüz Yüze",
      faceDesc: "Eskişehir merkezde özel ders mekânı veya evinizde.",
      online: "Online",
      onlineDesc: "Zoom üzerinden, etkileşimli materyaller ile.",
    },
    why: {
      kicker: "Neden Veliler Tercih Ediyor?",
      title: "Çocuğunuz için doğru karar.",
      items: [
        { t: "Anadili eğitmen", d: "Doğal aksan, doğal İngilizce." },
        { t: "Birebir ilgi", d: "Çocuğunuzun hızında ilerleme." },
        { t: "Konuşma güveni", d: "Çekingen çocuklar için bile." },
        { t: "Sıcak ortam", d: "Stressiz, oyun gibi öğrenme." },
        { t: "Veli iletişimi", d: "Düzenli geri bildirim ve raporlama." },
        { t: "Esnek program", d: "Okul ve aile rutininize uygun." },
      ],
    },
    contact: {
      kicker: "İletişim",
      title: "Çocuğunuz için ücretsiz tanışma dersi ayarlayalım.",
      body: "WhatsApp üzerinden bana ulaşın. Genellikle 1 saat içinde dönüş yapıyorum.",
      cta: "WhatsApp'tan Yaz",
      msg: "Merhaba, çocuğum için ücretsiz tanışma dersi rica ediyorum.",
    },
    footer: "© " + new Date().getFullYear() + " Ms. Burcu · Eskişehir İngilizce Özel Ders",
  },
  en: {
    nav: { about: "About", lessons: "Lessons", why: "Why Us", contact: "Contact" },
    brand: "Ms. Burcu · English Tutor",
    location: "Eskişehir",
    hero: {
      tag: "Native English Tutor · Eskişehir",
      title: "One-on-one English lessons that get your child speaking.",
      sub: "A warm, confident and speaking-focused learning experience for primary and middle school children.",
      cta1: "Message on WhatsApp",
      cta2: "Explore Lessons",
      msg: "Hi! I'd like more information about English lessons for my child.",
    },
    about: {
      kicker: "About Me",
      title: "A native English friend by your child's side.",
      body: "Hi, I'm Burcu. I've spent years working one-on-one with children in Türkiye. My lessons are never about memorisation — they're about natural conversation, confidence and fun. I learn each child's pace and design a personal roadmap for them.",
      points: ["Native English speaker", "5+ years teaching children", "Cambridge certified"],
    },
    speaking: {
      kicker: "Speaking-Focused Lessons",
      title: "You can't learn English without speaking it.",
      body: "Our lessons are fully in English. Through games, stories, visuals and real-life dialogues, your child learns to speak English without translating in their head. Pronunciation, fluency and confidence are our priorities.",
    },
    oneOnOne: {
      kicker: "One-on-One Education",
      title: "One tutor, focused entirely on your child.",
      body: "No crowded classrooms. Just your child and the tutor. Every lesson is shaped around their level, interests and goals.",
    },
    modes: {
      kicker: "Online & Face-to-Face",
      title: "In-person in Eskişehir, online from anywhere.",
      body: "From the comfort of your home or in a safe online setting. Both options carry the same warmth and the same quality.",
      face: "Face-to-Face",
      faceDesc: "In central Eskişehir or at your home.",
      online: "Online",
      onlineDesc: "Over Zoom with interactive materials.",
    },
    why: {
      kicker: "Why Parents Prefer These Lessons",
      title: "The right choice for your child.",
      items: [
        { t: "Native tutor", d: "Natural accent, natural English." },
        { t: "Personal attention", d: "Progress at your child's pace." },
        { t: "Speaking confidence", d: "Even for shy children." },
        { t: "Warm environment", d: "Stress-free, playful learning." },
        { t: "Parent updates", d: "Regular feedback and reports." },
        { t: "Flexible schedule", d: "Fits school and family routines." },
      ],
    },
    contact: {
      kicker: "Contact",
      title: "Let's arrange a free trial lesson for your child.",
      body: "Reach me on WhatsApp. I usually reply within an hour.",
      cta: "Message on WhatsApp",
      msg: "Hi! I'd like to book a free trial lesson for my child.",
    },
    footer: "© " + new Date().getFullYear() + " Ms. Burcu · English Tutoring in Eskişehir",
  },
} as const;

export function SitePage({ lang }: { lang: Lang }) {
  const t = T[lang];
  const wa = (msg: string) => `${WHATSAPP}${encodeURIComponent(msg)}`;
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <LanguagePopup />

      {/* Header */}
      <header className="sticky top-0 z-30 border-b border-border/60 bg-background/80 backdrop-blur-md">
        <div className="mx-auto max-w-6xl flex items-center justify-between px-5 py-4">
          <a
            href="#top"
            className="font-display text-sm sm:text-base md:text-lg tracking-tight leading-tight"
          >
            <span className="text-orange-soft">●</span> Ms. Burcu
            <span className="hidden sm:inline"> · English Tutor</span>
          </a>
          <nav className="hidden md:flex items-center gap-7 text-sm text-muted-foreground">
            <a href="#about" className="hover:text-foreground transition">
              {t.nav.about}
            </a>
            <a href="#lessons" className="hover:text-foreground transition">
              {t.nav.lessons}
            </a>
            <a href="#why" className="hover:text-foreground transition">
              {t.nav.why}
            </a>
            <a href="#contact" className="hover:text-foreground transition">
              {t.nav.contact}
            </a>
          </nav>
          <div className="flex items-center gap-3">
            <LangSwitcher current={lang} />
            <button
              className="md:hidden flex flex-col justify-center items-center gap-1.5 w-9 h-9 rounded-md hover:bg-secondary transition"
              aria-label="Toggle menu"
              onClick={() => setMenuOpen((v) => !v)}
            >
              <span
                className={`block h-0.5 w-5 bg-foreground transition-all duration-300 ${menuOpen ? "translate-y-2 rotate-45" : ""}`}
              />
              <span
                className={`block h-0.5 w-5 bg-foreground transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`}
              />
              <span
                className={`block h-0.5 w-5 bg-foreground transition-all duration-300 ${menuOpen ? "-translate-y-2 -rotate-45" : ""}`}
              />
            </button>
          </div>
        </div>
        {/* Mobile menu */}
        {menuOpen && (
          <nav className="md:hidden border-t border-border/60 bg-background/95 backdrop-blur-md px-5 py-4 flex flex-col gap-4 text-sm text-muted-foreground">
            <a
              href="#about"
              className="hover:text-foreground transition"
              onClick={() => setMenuOpen(false)}
            >
              {t.nav.about}
            </a>
            <a
              href="#lessons"
              className="hover:text-foreground transition"
              onClick={() => setMenuOpen(false)}
            >
              {t.nav.lessons}
            </a>
            <a
              href="#why"
              className="hover:text-foreground transition"
              onClick={() => setMenuOpen(false)}
            >
              {t.nav.why}
            </a>
            <a
              href="#contact"
              className="hover:text-foreground transition"
              onClick={() => setMenuOpen(false)}
            >
              {t.nav.contact}
            </a>
          </nav>
        )}
      </header>

      {/* Hero */}
      <section id="top" className="bg-gradient-hero">
        <div className="mx-auto max-w-6xl px-5 py-12 md:py-24 grid md:grid-cols-2 gap-10 md:gap-12 items-center">
          <div className="animate-fade-up">
            <span className="inline-block text-xs uppercase tracking-[0.2em] text-orange-soft font-medium mb-4 md:mb-5">
              {t.hero.tag}
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-[1.1] mb-5 md:mb-6">
              {t.hero.title}
            </h1>
            <p className="text-base sm:text-lg text-muted-foreground mb-5 max-w-lg">
              {t.hero.sub}
            </p>
            <p className="font-display italic text-xl sm:text-2xl text-foreground mb-7 md:mb-8 max-w-lg border-l-2 border-orange-soft pl-4">
              "If you don't use it, you lose it."
              <span className="block text-xs not-italic uppercase tracking-[0.2em] text-orange-soft mt-2 font-sans">
                — Ms. Burcu
              </span>
            </p>
            <div className="flex flex-col sm:flex-row flex-wrap gap-3">
              <a
                href={wa(t.hero.msg)}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-primary text-primary-foreground px-6 py-3.5 font-medium shadow-warm hover:opacity-90 transition"
              >
                <WhatsAppIcon /> {t.hero.cta1}
              </a>
              <a
                href="#lessons"
                className="inline-flex items-center justify-center rounded-full border border-border bg-card px-6 py-3.5 font-medium hover:bg-secondary transition"
              >
                {t.hero.cta2}
              </a>
            </div>
          </div>
          <div className="relative animate-fade-up">
            <div className="absolute -inset-4 bg-gradient-warm rounded-[2rem] blur-2xl opacity-60" />
            <img
              src={heroImg}
              alt={
                lang === "tr"
                  ? "Anadili İngilizce eğitmen ile birebir özel ders"
                  : "Native English tutor with one student"
              }
              width={1536}
              height={1024}
              className="relative rounded-[2rem] shadow-warm w-full object-cover aspect-[4/3]"
            />
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-14 md:py-28">
        <div className="mx-auto max-w-6xl px-5 grid md:grid-cols-5 gap-8 md:gap-12 items-center">
          <div className="md:col-span-2 max-w-xs mx-auto w-full md:max-w-none">
            <img
              src={aboutImg}
              alt={lang === "tr" ? "İngilizce eğitmen Burcu" : "English tutor Burcu"}
              loading="lazy"
              width={1024}
              height={1280}
              className="rounded-[2rem] shadow-soft w-full object-cover aspect-[4/5]"
            />
          </div>
          <div className="md:col-span-3">
            <Kicker>{t.about.kicker}</Kicker>
            <h2 className="text-2xl sm:text-3xl md:text-4xl mb-5 max-w-xl">{t.about.title}</h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-7">{t.about.body}</p>
            <ul className="space-y-3">
              {t.about.points.map((p) => (
                <li key={p} className="flex items-center gap-3">
                  <span className="h-2 w-2 rounded-full bg-orange-soft" />
                  <span>{p}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Lessons */}
      <section id="lessons" className="bg-cream py-14 md:py-28">
        <div className="mx-auto max-w-6xl px-5 space-y-20">
          <FeatureRow
            kicker={t.speaking.kicker}
            title={t.speaking.title}
            body={t.speaking.body}
            img={speakingImg}
            alt={
              lang === "tr"
                ? "Konuşma odaklı birebir İngilizce ders"
                : "Speaking-focused one-on-one English lesson"
            }
          />
          <FeatureRow
            kicker={t.oneOnOne.kicker}
            title={t.oneOnOne.title}
            body={t.oneOnOne.body}
            img={heroImg}
            alt={lang === "tr" ? "Birebir İngilizce eğitim" : "One-on-one English education"}
            reverse
          />
          <div>
            <div className="text-center max-w-2xl mx-auto mb-12">
              <Kicker center>{t.modes.kicker}</Kicker>
              <h2 className="text-3xl md:text-4xl mb-4">{t.modes.title}</h2>
              <p className="text-muted-foreground text-lg">{t.modes.body}</p>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <ModeCard title={t.modes.face} desc={t.modes.faceDesc} img={speakingImg} />
              <ModeCard title={t.modes.online} desc={t.modes.onlineDesc} img={onlineImg} />
            </div>
          </div>
        </div>
      </section>

      {/* Why */}
      <section id="why" className="py-14 md:py-28">
        <div className="mx-auto max-w-6xl px-5">
          <div className="text-center max-w-2xl mx-auto mb-10 md:mb-14">
            <Kicker center>{t.why.kicker}</Kicker>
            <h2 className="text-2xl sm:text-3xl md:text-4xl">{t.why.title}</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {t.why.items.map((it, i) => (
              <div
                key={it.t}
                className="rounded-2xl border border-border bg-card p-7 hover:shadow-soft transition"
              >
                <div className="font-display text-orange-soft text-xl mb-3">0{i + 1}</div>
                <h3 className="text-xl mb-2">{it.t}</h3>
                <p className="text-muted-foreground">{it.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="bg-gradient-warm py-14 md:py-28">
        <div className="mx-auto max-w-3xl px-5 text-center">
          <Kicker center>{t.contact.kicker}</Kicker>
          <h2 className="text-2xl sm:text-3xl md:text-5xl mb-4 md:mb-5">{t.contact.title}</h2>
          <p className="text-muted-foreground text-base sm:text-lg mb-7 md:mb-9 max-w-xl mx-auto">
            {t.contact.body}
          </p>
          <a
            href={wa(t.contact.msg)}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-foreground text-background px-7 py-4 text-base font-medium shadow-warm hover:opacity-90 transition"
          >
            <WhatsAppIcon /> {t.contact.cta}
          </a>
        </div>
      </section>

      <footer className="border-t border-border py-8 text-center text-sm text-muted-foreground">
        {t.footer}
      </footer>

      {/* Floating WhatsApp */}
      <a
        href={wa(t.hero.msg)}
        target="_blank"
        rel="noreferrer"
        aria-label="WhatsApp"
        className="fixed bottom-6 right-6 z-30 h-14 w-14 rounded-full bg-[oklch(0.72_0.16_150)] text-white grid place-items-center shadow-warm hover:scale-105 transition"
      >
        <WhatsAppIcon />
      </a>
    </div>
  );
}

function Kicker({ children, center }: { children: React.ReactNode; center?: boolean }) {
  return (
    <div
      className={`text-xs uppercase tracking-[0.2em] text-orange-soft font-medium mb-4 ${center ? "text-center" : ""}`}
    >
      {children}
    </div>
  );
}

function FeatureRow({
  kicker,
  title,
  body,
  img,
  alt,
  reverse,
}: {
  kicker: string;
  title: string;
  body: string;
  img: string;
  alt: string;
  reverse?: boolean;
}) {
  return (
    <div
      className={`grid md:grid-cols-2 gap-8 md:gap-12 items-center ${reverse ? "md:[&>div:first-child]:order-2" : ""}`}
    >
      <div>
        <Kicker>{kicker}</Kicker>
        <h2 className="text-2xl sm:text-3xl md:text-4xl mb-4 md:mb-5">{title}</h2>
        <p className="text-muted-foreground text-base sm:text-lg leading-relaxed">{body}</p>
      </div>
      <img
        src={img}
        alt={alt}
        loading="lazy"
        width={1280}
        height={1024}
        className="rounded-[2rem] shadow-soft w-full object-cover aspect-[5/4]"
      />
    </div>
  );
}

function ModeCard({ title, desc, img }: { title: string; desc: string; img: string }) {
  return (
    <div className="group rounded-3xl bg-card border border-border overflow-hidden hover:shadow-warm transition">
      <img
        src={img}
        alt={title}
        loading="lazy"
        width={1280}
        height={1024}
        className="w-full aspect-[16/10] object-cover group-hover:scale-[1.02] transition-transform duration-700"
      />
      <div className="p-6">
        <h3 className="text-2xl mb-1">{title}</h3>
        <p className="text-muted-foreground">{desc}</p>
      </div>
    </div>
  );
}

function WhatsAppIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M.057 24l1.687-6.163a11.867 11.867 0 0 1-1.587-5.946C.16 5.335 5.495 0 12.05 0a11.82 11.82 0 0 1 8.413 3.488 11.82 11.82 0 0 1 3.48 8.414c-.003 6.554-5.338 11.89-11.893 11.89a11.9 11.9 0 0 1-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884a9.86 9.86 0 0 0 1.51 5.26l-.999 3.648 3.978-1.607zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.149-.173.198-.297.298-.495.099-.198.05-.372-.025-.521-.074-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
    </svg>
  );
}
