/**
 * The shared card surface. It is a class string rather than a component
 * because cards render as different semantic elements (article, figure,
 * li, form), and a string keeps each call site's HTML explicit.
 */
export const cardClasses = "rounded-2xl border border-border bg-white shadow-card";
