import { Footer as FooterFDS } from "@urbit/fdn-design-system";

const data = [
  [
    {
      title: "Urbit",
      links: [
        {
          title: "Home",
          href: "/",
        },
        { title: "Get Started", href: "https://urbit.org/getting-started" },
        {
          title: "Overview",
          href: "https://developer.urbit.org/overview",
        },
        {
          title: "Ecosystem",
          href: "https://urbit.org/ecosystem",
        },
        {
          title: "Events",
          href: "https://urbit.org/events",
        },
        {
          title: "Blog",
          href: "https://urbit.org//blog",
        }
      ],
    },
    {
      title: " ",
      links: [
        { title: "GitHub", href: "https://github.com/urbit" },
        {
          title: "Airlock APIs",
          href: "https://github.com/urbit/awesome-urbit#http-apis-airlock",
        },
        {
          title: "Urbit Binaries",
          href: "https://github.com/urbit/urbit/releases",
        },
        {
          title: "Developer Mailing List",
          href: "https://groups.google.com/a/urbit.org/g/dev",
        },
        {
          title: "Issue Tracker",
          href: "https://github.com/urbit/urbit/issues",
        },
        { title: "Whitepaper", href: "https://media.urbit.org/whitepaper.pdf" },
      ],
    },
  ],
  [
    { title: "Privacy Policy", href: "/privacy" },
    { title: "Terms of Service", href: "/terms-of-service" },
    { title: "support@urbit.org", href: "mailto:support@urbit.org" },
  ],
];

export default function Footer() {
  return <FooterFDS data={data} />
}
