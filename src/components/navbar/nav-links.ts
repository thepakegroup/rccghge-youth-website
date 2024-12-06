export const navLinks: navLinksProps[] = [
  {
    id: 1,
    label: "Galleria",
    path: "/galleria",
  },
  {
    id: 3,
    label: "Our leaders",
    path: "/our-leaders",
  },
  {
    id: 4,
    label: "Events",
    path: "/events",
  },
];

export interface navLinksProps {
  id: number;
  label: string;
  path: string;
}
