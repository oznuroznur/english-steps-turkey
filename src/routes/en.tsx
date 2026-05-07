import { createFileRoute } from "@tanstack/react-router";
import { SitePage } from "@/components/SitePage";

export const Route = createFileRoute("/en")({
  head: () => ({
    meta: [
      { title: "Native English Tutor in Eskişehir | One-on-One Lessons for Kids" },
      {
        name: "description",
        content:
          "Speaking-focused private English lessons in Eskişehir for primary and middle school children. Native tutor, online and face-to-face.",
      },
      { property: "og:title", content: "Native English Tutor in Eskişehir" },
      {
        property: "og:description",
        content: "One-on-one speaking-focused English lessons for children.",
      },
    ],
  }),
  component: () => <SitePage lang="en" />,
});
