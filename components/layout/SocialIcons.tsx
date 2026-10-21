import type { ComponentProps } from "react";

/*
 * lucide-react v1 no longer ships brand icons, so these are minimal
 * hand-drawn 24x24 glyphs. They are decorative: the link carries the label.
 */
type IconProps = ComponentProps<"svg">;

export function LinkedInIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M4.5 3.5a2 2 0 1 1 0 4 2 2 0 0 1 0-4ZM3 9h3v12H3V9Zm6 0h2.9v1.7c.5-.9 1.7-1.9 3.5-1.9 3.1 0 3.6 2 3.6 4.7V21h-3v-6.6c0-1.3-.1-2.9-1.9-2.9-1.8 0-2.1 1.4-2.1 2.8V21H9V9Z" />
    </svg>
  );
}

export function XIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M17.8 3H21l-7 8 8.2 10h-6.4l-5-6.2L5.1 21H2l7.5-8.6L1.6 3h6.5l4.5 5.7L17.8 3Zm-1.1 16.2h1.8L7.2 4.7H5.3l11.4 14.5Z" />
    </svg>
  );
}

export function InstagramIcon(props: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      aria-hidden="true"
      {...props}
    >
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}
