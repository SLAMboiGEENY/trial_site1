export interface NavLink {
  id: number,
  title: string,
  link: string,
}

export const navLinks: NavLink[] = [
  { id: 1, title: 'Home', link: '/' },
  { id: 2, title: 'About', link: '/about' },
  { id: 3, title: 'Contact', link: '/contact' },
  { id: 4, title: 'Blog', link: '/blog' },
];