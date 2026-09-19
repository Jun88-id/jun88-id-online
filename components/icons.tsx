import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;
const base = { fill: "none", stroke: "currentColor", strokeWidth: 1.8, strokeLinecap: "round" as const, strokeLinejoin: "round" as const };

export function IconHome(props: IconProps) { return <svg viewBox="0 0 24 24" {...base} {...props}><path d="m4 10.5 8-6.5 8 6.5V20H4Z" /><path d="M9.5 20v-5.5h5V20" /></svg>; }
export function IconStar(props: IconProps) { return <svg viewBox="0 0 24 24" {...base} {...props}><path d="m12 4 2.4 5 5.5.8-4 3.8 1 5.4-4.9-2.6L7.1 19l1-5.4-4-3.8 5.5-.8Z" /></svg>; }
export function IconBook(props: IconProps) { return <svg viewBox="0 0 24 24" {...base} {...props}><path d="M4 4h12a3 3 0 0 1 3 3v13H7a3 3 0 0 0-3 3Z" /><path d="M4 4v16" /></svg>; }
export function IconMessage(props: IconProps) { return <svg viewBox="0 0 24 24" {...base} {...props}><path d="M4 5h16v11H8l-4 3.5Z" /><path d="M8 9h8M8 12.5h5" /></svg>; }
export function IconHelp(props: IconProps) { return <svg viewBox="0 0 24 24" {...base} {...props}><circle cx="12" cy="12" r="9" /><path d="M9.5 9.5a2.5 2.5 0 1 1 3.4 2.3c-.6.3-.9.8-.9 1.4v.3" /><path d="M12 17h.01" /></svg>; }
export function IconInfo(props: IconProps) { return <svg viewBox="0 0 24 24" {...base} {...props}><circle cx="12" cy="12" r="9" /><path d="M12 11v5" /><path d="M12 8h.01" /></svg>; }
export function IconSearch(props: IconProps) { return <svg viewBox="0 0 24 24" {...base} {...props}><circle cx="11" cy="11" r="7" /><path d="m20 20-3.6-3.6" /></svg>; }
export function IconMegaphone(props: IconProps) { return <svg viewBox="0 0 24 24" {...base} {...props}><path d="M3 11v2a1 1 0 0 0 1 1h3l7 4V6L7 10H4a1 1 0 0 0-1 1Z" /><path d="M18 9a4 4 0 0 1 0 6" /></svg>; }
export function IconDownload(props: IconProps) { return <svg viewBox="0 0 24 24" {...base} {...props}><path d="M12 3v11" /><path d="m7.5 10.5 4.5 4.5 4.5-4.5" /><path d="M4 19h16" /></svg>; }
export function IconGift(props: IconProps) { return <svg viewBox="0 0 24 24" {...base} {...props}><path d="M3 11h18v9H3z" /><path d="M12 11v9" /><path d="M2.5 7.5h19V11h-19z" /><path d="M12 7.5S10.5 3 8 3a2.2 2.2 0 0 0 0 4.5Z" /><path d="M12 7.5S13.5 3 16 3a2.2 2.2 0 0 1 0 4.5Z" /></svg>; }
export function IconShield(props: IconProps) { return <svg viewBox="0 0 24 24" {...base} {...props}><path d="M12 3 5 6v6c0 4.2 2.9 7.6 7 9 4.1-1.4 7-4.8 7-9V6Z" /><path d="m9 12 2 2 4-4" /></svg>; }
export function IconCalendar(props: IconProps) { return <svg viewBox="0 0 24 24" {...base} {...props}><rect x="3.5" y="5" width="17" height="15" rx="2" /><path d="M3.5 10h17" /><path d="M8 3v4M16 3v4" /></svg>; }
export function IconTrophy(props: IconProps) { return <svg viewBox="0 0 24 24" {...base} {...props}><path d="M7 4h10v5a5 5 0 0 1-10 0Z" /><path d="M7 5H4v2a3 3 0 0 0 3 3M17 5h3v2a3 3 0 0 1-3 3" /><path d="M12 14v3" /><path d="M8.5 20h7" /><path d="M9.5 17h5l1 3h-7Z" /></svg>; }
export function IconGrid(props: IconProps) { return <svg viewBox="0 0 24 24" {...base} {...props}><rect x="4" y="4" width="6.5" height="6.5" rx="1.4" /><rect x="13.5" y="4" width="6.5" height="6.5" rx="1.4" /><rect x="4" y="13.5" width="6.5" height="6.5" rx="1.4" /><rect x="13.5" y="13.5" width="6.5" height="6.5" rx="1.4" /></svg>; }
export function IconTag(props: IconProps) { return <svg viewBox="0 0 24 24" {...base} {...props}><path d="M4 11V4h7l9 9-7 7Z" /><circle cx="8" cy="8" r="1.4" /></svg>; }
export function IconPlay(props: IconProps) { return <svg viewBox="0 0 24 24" {...base} {...props}><path d="M8.5 5.5 18 12l-9.5 6.5Z" /></svg>; }
export function IconPlus(props: IconProps) { return <svg viewBox="0 0 24 24" {...base} strokeWidth={2.2} {...props}><path d="M12 5v14M5 12h14" /></svg>; }
export function IconChevronRight(props: IconProps) { return <svg viewBox="0 0 24 24" {...base} strokeWidth={2} {...props}><path d="m9.5 5 7 7-7 7" /></svg>; }
export function IconChevronLeft(props: IconProps) { return <svg viewBox="0 0 24 24" {...base} strokeWidth={2} {...props}><path d="m14.5 5-7 7 7 7" /></svg>; }
export function IconChevronUp(props: IconProps) { return <svg viewBox="0 0 24 24" {...base} strokeWidth={2} {...props}><path d="m5 14.5 7-7 7 7" /></svg>; }
export function IconChevronDown(props: IconProps) { return <svg viewBox="0 0 24 24" {...base} strokeWidth={2} {...props}><path d="m5 9.5 7 7 7-7" /></svg>; }
export function IconClose(props: IconProps) { return <svg viewBox="0 0 24 24" {...base} strokeWidth={2.2} {...props}><path d="m6 6 12 12M18 6 6 18" /></svg>; }
export function IconMenu(props: IconProps) { return <svg viewBox="0 0 24 24" {...base} strokeWidth={2.2} {...props}><path d="M4 7h16M4 12h16M4 17h16" /></svg>; }
export function IconBolt(props: IconProps) { return <svg viewBox="0 0 24 24" {...base} {...props}><path d="M13.5 3 6 13.5h5L10.5 21 18 10.5h-5Z" /></svg>; }
export function IconHeadset(props: IconProps) { return <svg viewBox="0 0 24 24" {...base} {...props}><path d="M4.5 14v-2a7.5 7.5 0 0 1 15 0v2" /><rect x="3" y="13.5" width="3.6" height="6" rx="1.6" /><rect x="17.4" y="13.5" width="3.6" height="6" rx="1.6" /><path d="M19.5 19.5v.5a2.5 2.5 0 0 1-2.5 2.5H13" /></svg>; }
export function IconFlame(props: IconProps) { return <svg viewBox="0 0 24 24" {...base} {...props}><path d="M12 3s5 4.2 5 8.5a5 5 0 0 1-10 0C7 9 9 7.5 9 7.5s.5 2 1.5 2.5C11 8 12 6 12 3Z" /></svg>; }
export function IconSparkle(props: IconProps) { return <svg viewBox="0 0 24 24" {...base} {...props}><path d="M12 4l1.9 4.6L18.5 10.5l-4.6 1.9L12 17l-1.9-4.6L5.5 10.5l4.6-1.9Z" /><path d="M18.5 4v3M20 5.5h-3" /></svg>; }
export function IconCheck(props: IconProps) { return <svg viewBox="0 0 24 24" {...base} strokeWidth={2.2} {...props}><path d="m5 12.5 4.5 4.5L19 7" /></svg>; }
export function IconTrendingUp(props: IconProps) { return <svg viewBox="0 0 24 24" {...base} {...props}><path d="m3 17 6-6 4 4 8-8" /><path d="M14 7h7v7" /></svg>; }
export function IconBarChart(props: IconProps) { return <svg viewBox="0 0 24 24" {...base} {...props}><path d="M4 20V10M10 20V4M16 20v-8M22 20H2" /></svg>; }
export function IconUsers(props: IconProps) { return <svg viewBox="0 0 24 24" {...base} {...props}><circle cx="9" cy="8" r="3" /><path d="M3 20a6 6 0 0 1 12 0" /><path d="M16 4.5a3 3 0 0 1 0 7M22 20a6 6 0 0 0-4-5.7" /></svg>; }
export function IconClock(props: IconProps) { return <svg viewBox="0 0 24 24" {...base} {...props}><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></svg>; }
export function IconExternalLink(props: IconProps) { return <svg viewBox="0 0 24 24" {...base} {...props}><path d="M14 4h6v6" /><path d="M20 4 10 14" /><path d="M20 14v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h5" /></svg>; }

// ============================================
// ICON MAP
// ============================================
export const ICONS = {
  home: IconHome,
  star: IconStar,
  book: IconBook,
  message: IconMessage,
  help: IconHelp,
  info: IconInfo,
  search: IconSearch,
  megaphone: IconMegaphone,
  download: IconDownload,
  gift: IconGift,
  shield: IconShield,
  calendar: IconCalendar,
  trophy: IconTrophy,
  grid: IconGrid,
  tag: IconTag,
  play: IconPlay,
  plus: IconPlus,
  chevronRight: IconChevronRight,
  chevronLeft: IconChevronLeft,
  chevronUp: IconChevronUp,
  chevronDown: IconChevronDown,
  close: IconClose,
  menu: IconMenu,
  bolt: IconBolt,
  headset: IconHeadset,
  flame: IconFlame,
  sparkle: IconSparkle,
  check: IconCheck,
  trendingUp: IconTrendingUp,
  barChart: IconBarChart,
  users: IconUsers,
  clock: IconClock,
  external: IconExternalLink,
} as const;

export type IconName = keyof typeof ICONS;