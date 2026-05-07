import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "@tanstack/react-router";

const KEY = "lang-chosen";

export function LanguagePopup() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (!localStorage.getItem(KEY)) setOpen(true);
  }, []);

  const choose = (lang: "tr" | "en") => {
    localStorage.setItem(KEY, lang);
    setOpen(false);
    if (lang === "en" && !location.pathname.startsWith("/en")) {
      navigate({ to: "/en" });
    } else if (lang === "tr" && location.pathname.startsWith("/en")) {
      navigate({ to: "/" });
    }
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-foreground/40 backdrop-blur-sm px-4 animate-fade-up">
      <div className="bg-card rounded-3xl shadow-warm max-w-md w-full p-8 text-center border border-border">
        <div className="text-5xl mb-3">🌿</div>
        <h2 className="text-2xl mb-2">Dil Seçimi / Choose Language</h2>
        <p className="text-muted-foreground text-sm mb-6">
          Lütfen tercih ettiğiniz dili seçin · Please select your language
        </p>
        <div className="grid grid-cols-2 gap-3">
          <button
            onClick={() => choose("tr")}
            className="group flex flex-col items-center gap-2 rounded-2xl border border-border bg-secondary p-5 transition-all hover:border-primary hover:shadow-soft"
          >
            <span className="text-4xl">🇹🇷</span>
            <span className="font-medium">Türkçe</span>
          </button>
          <button
            onClick={() => choose("en")}
            className="group flex flex-col items-center gap-2 rounded-2xl border border-border bg-secondary p-5 transition-all hover:border-primary hover:shadow-soft"
          >
            <span className="text-4xl">🇬🇧</span>
            <span className="font-medium">English</span>
          </button>
        </div>
      </div>
    </div>
  );
}
