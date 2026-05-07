import { createFileRoute } from "@tanstack/react-router";
import { SitePage } from "@/components/SitePage";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Eskişehir İngilizce Özel Ders | Anadili Eğitmen ile Birebir" },
      {
        name: "description",
        content:
          "Eskişehir'de ilkokul ve ortaokul çocukları için anadili İngilizce eğitmen ile birebir konuşma odaklı özel dersler. Online ve yüz yüze.",
      },
      { property: "og:title", content: "Eskişehir İngilizce Özel Ders" },
      {
        property: "og:description",
        content: "Anadili İngilizce eğitmen ile birebir konuşma odaklı dersler.",
      },
    ],
  }),
  component: () => <SitePage lang="tr" />,
});
