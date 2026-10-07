// Compact line-icon set for the editor UI (presentation only).
// All icons share a 24x24 viewBox and are stroked via `.ico` styles in ui.js,
// so the entries below contain shape markup only (no fill/stroke attributes).
export const ICONS = {
  // --- Main rail (modes) ---
  character: '<circle cx="12" cy="7" r="3"/><path d="M7 21v-4a5 5 0 0 1 10 0v4M9 14v7m6-7v7"/>',
  vehicle: '<path d="M4 17v-5l2-5h12l2 5v5M6 12h12"/><circle cx="7" cy="17" r="2"/><circle cx="17" cy="17" r="2"/>',
  landscape: '<path d="m3 19 6-9 3 4 3-6 6 11H3Z"/>',
  event: '<circle cx="12" cy="12" r="6"/><path d="M12 3v3m0 12v3M3 12h3m12 0h3"/>',
  weather: '<path d="M7 16h10a4 4 0 0 0 0-8 6 6 0 0 0-11-1A4 4 0 0 0 7 16Z"/><path d="m8 19-1 2m5-2-1 2m5-2-1 2"/>',
  time: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
  lighting: '<circle cx="12" cy="12" r="4"/><path d="M12 2v3m0 14v3M2 12h3m14 0h3M5 5l2 2m10 10 2 2M19 5l-2 2M7 17l-2 2"/>',
  physics: '<path d="M12 2v4m0 12v4M2 12h4m12 0h4M5 5l3 3m8 8 3 3M19 5l-3 3M8 16l-3 3"/><circle cx="12" cy="12" r="4"/>',
  camera: '<rect x="3" y="7" width="18" height="12" rx="2"/><path d="m8 7 2-3h4l2 3"/><circle cx="12" cy="13" r="3"/>',

  // --- Common controls ---
  sliders: '<path d="M4 7h9M19 7h1M4 17h1M11 17h9"/><circle cx="16" cy="7" r="2"/><circle cx="8" cy="17" r="2"/>',
  lightbulb: '<path d="M9.5 18h5M10.5 21h3"/><path d="M12 3a6 6 0 0 0-3.7 10.7c.5.4.8 1 .9 1.8h5.6c.1-.8.4-1.4.9-1.8A6 6 0 0 0 12 3Z"/>',
  video: '<rect x="3" y="6" width="12" height="12" rx="2"/><path d="m15 11 6-3v8l-6-3Z"/>',
  bolt: '<path d="M13 2 4 14h6l-1 8 9-12h-6l1-8Z"/>',
  gamepad: '<path d="M5 8h14a3 3 0 0 1 3 3v2a3 3 0 0 1-5.4 1.8L16 14H8l-.6.8A3 3 0 0 1 2 13v-2a3 3 0 0 1 3-3Z"/><path d="M6 11h3M7.5 9.5v3"/><circle cx="16" cy="11" r="1"/><circle cx="18" cy="13" r="1"/>',
  person1: '<circle cx="12" cy="7" r="3"/><path d="M5 21a7 7 0 0 1 14 0"/>',
  move: '<path d="M12 3v18M3 12h18M12 3l-2.5 2.5M12 3l2.5 2.5M12 21l-2.5-2.5M12 21l2.5-2.5M3 12l2.5-2.5M3 12l2.5 2.5M21 12l-2.5-2.5M21 12l-2.5 2.5"/>',
  trash: '<path d="M4 7h16M9 7V5h6v2M6 7l1 13h10l1-13"/>',
  eye: '<path d="M2 12s3.5-6 10-6 10 6 10 6-3.5 6-10 6-10-6-10-6Z"/><circle cx="12" cy="12" r="2.6"/>',
  eyeOff: '<path d="M3 3l18 18"/><path d="M10.6 6.2A9.6 9.6 0 0 1 12 6c6.5 0 10 6 10 6a17 17 0 0 1-3.4 4M6.3 6.8A16.5 16.5 0 0 0 2 12s3.5 6 10 6a9.9 9.9 0 0 0 3.2-.5"/>',
  copy: '<rect x="9" y="9" width="11" height="11" rx="2"/><path d="M5 15V5a2 2 0 0 1 2-2h10"/>',
  image: '<rect x="3" y="4" width="18" height="16" rx="2"/><circle cx="8.5" cy="9" r="1.6"/><path d="m4 18 5-5 4 4 3-3 4 4"/>',
  reset: '<path d="M4 12a8 8 0 1 1 2.4 5.7"/><path d="M4 20v-5h5"/>',
  plus: '<path d="M12 5v14M5 12h14"/>',
  target: '<circle cx="12" cy="12" r="7"/><path d="M12 2v4m0 12v4M2 12h4m12 0h4"/><circle cx="12" cy="12" r="2"/>',
  dot: '<circle cx="12" cy="12" r="3"/><circle cx="12" cy="12" r="8"/>',
  sparkle: '<path d="M12 3l1.7 5.1L19 10l-5.3 1.9L12 17l-1.7-5.1L5 10l5.3-1.9L12 3Z"/>',
  upload: '<path d="M12 16V4m0 0L8 8m4-4 4 4"/><path d="M4 20h16"/>',
  minus: '<path d="M5 12h14"/>',
  star: '<path d="M12 3.5l2.6 5.4 5.9.8-4.3 4.1 1 5.9L12 17l-5.2 2.7 1-5.9-4.3-4.1 5.9-.8L12 3.5Z"/>',
  link: '<path d="M9 12h6"/><path d="M10 8H8a4 4 0 0 0 0 8h2M14 8h2a4 4 0 0 1 0 8h-2"/>',
};
