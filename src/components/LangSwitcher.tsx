import { Link } from "@tanstack/react-router";

export function LangSwitcher({ current }: { current: "tr" | "en" }) {
  return (
    <div className="inline-flex items-center gap-1 rounded-full border border-border bg-card/70 backdrop-blur p-1 text-sm">
      <Link
        to="/"
        onClick={() => typeof window !== "undefined" && localStorage.setItem("lang-chosen", "tr")}
        className={`px-3 py-1.5 rounded-full transition-colors flex items-center gap-1.5 ${
          current === "tr" ? "bg-primary text-primary-foreground" : "text-foreground hover:bg-secondary"
        }`}
      >
        🇹🇷 <span className="font-medium">TR</span>
      </Link>
      <Link
        to="/en"
        onClick={() => typeof window !== "undefined" && localStorage.setItem("lang-chosen", "en")}
        className={`px-3 py-1.5 rounded-full transition-colors flex items-center gap-1.5 ${
          current === "en" ? "bg-primary text-primary-foreground" : "text-foreground hover:bg-secondary"
        }`}
      >
        🇬🇧 <span className="font-medium">EN</span>
      </Link>
    </div>
  );
}
