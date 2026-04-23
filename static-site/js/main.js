/* ========== VSR Technologies — Static Site JS ========== */

/* ---------- helpers ---------- */
const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => Array.from(r.querySelectorAll(s));

/* ---------- Lucide icon registry (inline SVG strings, stroke=currentColor) ----------
   Each icon is the raw <svg> markup. Tag any <i data-icon="name"></i> in the HTML
   to swap into the matching SVG. */
const ICONS = {
  shield: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/></svg>',
  menu: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>',
  x: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>',
  arrowRight: '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>',
  chevronDown: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg>',
  chevronLeft: '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m15 18-6-6 6-6"/></svg>',
  chevronRight: '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"/></svg>',
  cpu: '<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="16" height="16" x="4" y="4" rx="2"/><rect width="6" height="6" x="9" y="9" rx="1"/><path d="M15 2v2"/><path d="M15 20v2"/><path d="M2 15h2"/><path d="M2 9h2"/><path d="M20 15h2"/><path d="M20 9h2"/><path d="M9 2v2"/><path d="M9 20v2"/></svg>',
  globe: '<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/></svg>',
  award: '<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526"/><circle cx="12" cy="8" r="6"/></svg>',
  eye: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"/><circle cx="12" cy="12" r="3"/></svg>',
  clock: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>',
  shieldCheck: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/><path d="m9 12 2 2 4-4"/></svg>',
  alertTriangle: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"/><path d="M12 9v4"/><path d="M12 17h.01"/></svg>',
  zap: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"/></svg>',
  network: '<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="16" y="16" width="6" height="6" rx="1"/><rect x="2" y="16" width="6" height="6" rx="1"/><rect x="9" y="2" width="6" height="6" rx="1"/><path d="M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3"/><path d="M12 12V8"/></svg>',
  server: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="8" x="2" y="2" rx="2" ry="2"/><rect width="20" height="8" x="2" y="14" rx="2" ry="2"/><line x1="6" x2="6.01" y1="6" y2="6"/><line x1="6" x2="6.01" y1="18" y2="18"/></svg>',
  brainCircuit: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z"/><path d="M9 13a4.5 4.5 0 0 0 3-4"/><path d="M6.003 5.125A3 3 0 0 0 6.401 6.5"/><path d="M3.477 10.896a4 4 0 0 1 .585-.396"/><path d="M6 18a4 4 0 0 1-1.967-.516"/><path d="M12 13h4"/><path d="M12 18h6a2 2 0 0 1 2 2v1"/><path d="M12 8h8"/><path d="M16 8V5a2 2 0 0 1 2-2"/><circle cx="16" cy="13" r=".5"/><circle cx="18" cy="3" r=".5"/><circle cx="20" cy="21" r=".5"/><circle cx="20" cy="8" r=".5"/></svg>',
  scanLine: '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 7V5a2 2 0 0 1 2-2h2"/><path d="M17 3h2a2 2 0 0 1 2 2v2"/><path d="M21 17v2a2 2 0 0 1-2 2h-2"/><path d="M7 21H5a2 2 0 0 1-2-2v-2"/><path d="M7 12h10"/></svg>',
  users: '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>',
  car: '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2"/><circle cx="7" cy="17" r="2"/><path d="M9 17h6"/><circle cx="17" cy="17" r="2"/></svg>',
  flame: '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"/></svg>',
  lock: '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="11" x="3" y="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>',
  crosshair: '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="22" x2="18" y1="12" y2="12"/><line x1="6" x2="2" y1="12" y2="12"/><line x1="12" x2="12" y1="6" y2="2"/><line x1="12" x2="12" y1="22" y2="18"/></svg>',
  video: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m22 8-6 4 6 4V8Z"/><rect width="14" height="12" x="2" y="6" rx="2" ry="2"/></svg>',
  building2: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z"/><path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2"/><path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2"/><path d="M10 6h4"/><path d="M10 10h4"/><path d="M10 14h4"/><path d="M10 18h4"/></svg>',
  map: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14.106 5.553a2 2 0 0 0 1.788 0l3.659-1.83A1 1 0 0 1 21 4.619v12.764a1 1 0 0 1-.553.894l-4.553 2.277a2 2 0 0 1-1.788 0l-4.212-2.106a2 2 0 0 0-1.788 0l-3.659 1.83A1 1 0 0 1 3 19.381V6.618a1 1 0 0 1 .553-.894l4.553-2.277a2 2 0 0 1 1.788 0z"/><path d="M15 5.764v15"/><path d="M9 3.236v15"/></svg>',
  doorClosed: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 20V6a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v14"/><path d="M2 20h20"/><path d="M14 12v.01"/></svg>',
  hardHat: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 18a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1z"/><path d="M10 10V5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v5"/><path d="M4 15v-3a6 6 0 0 1 6-6"/><path d="M14 6a6 6 0 0 1 6 6v3"/></svg>',
  userCog: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="18" cy="15" r="3"/><circle cx="9" cy="7" r="4"/><path d="M10 15H6a4 4 0 0 0-4 4v2"/><path d="m21.7 16.4-.9-.3"/><path d="m15.2 13.9-.9-.3"/><path d="m16.6 18.7.3-.9"/><path d="m19.1 12.2.3-.9"/><path d="m19.6 18.7-.4-1"/><path d="m16.8 12.3-.4-1"/><path d="m14.3 16.6 1-.4"/><path d="m20.7 13.8 1-.4"/></svg>',
  plus: '<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="M12 5v14"/></svg>',
  minus: '<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/></svg>',
  mail: '<svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>',
  phone: '<svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>',
  mapPin: '<svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"/><circle cx="12" cy="10" r="3"/></svg>',
  home: '<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>',
  checkCircle: '<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>',
  search: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>',
  clipboardList: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="8" height="4" x="8" y="2" rx="1" ry="1"/><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/><path d="M12 11h4"/><path d="M12 16h4"/><path d="M8 11h.01"/><path d="M8 16h.01"/></svg>',
  wrench: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>',
  gauge: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m12 14 4-4"/><path d="M3.34 19a10 10 0 1 1 17.32 0"/></svg>',
  radio: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4.9 19.1C1 15.2 1 8.8 4.9 4.9"/><path d="M7.8 16.2c-2.3-2.3-2.3-6.1 0-8.5"/><circle cx="12" cy="12" r="2"/><path d="M16.2 7.8c2.3 2.3 2.3 6.1 0 8.5"/><path d="M19.1 4.9C23 8.8 23 15.1 19.1 19"/></svg>',
  cpuSm: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="16" height="16" x="4" y="4" rx="2"/><rect width="6" height="6" x="9" y="9" rx="1"/><path d="M15 2v2"/><path d="M15 20v2"/><path d="M2 15h2"/><path d="M2 9h2"/><path d="M20 15h2"/><path d="M20 9h2"/><path d="M9 2v2"/><path d="M9 20v2"/></svg>',
  globe2: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/></svg>',
  usersSm: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>',
  barChart: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" x2="12" y1="20" y2="10"/><line x1="18" x2="18" y1="20" y2="4"/><line x1="6" x2="6" y1="20" y2="16"/></svg>',
  shieldCheckSm: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/><path d="m9 12 2 2 4-4"/></svg>',
  building: '<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="16" height="20" x="4" y="2" rx="2" ry="2"/><path d="M9 22v-4h6v4"/><path d="M8 6h.01"/><path d="M16 6h.01"/><path d="M12 6h.01"/><path d="M12 10h.01"/><path d="M12 14h.01"/><path d="M16 10h.01"/><path d="M16 14h.01"/><path d="M8 10h.01"/><path d="M8 14h.01"/></svg>',
  plane: '<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z"/></svg>',
  factory: '<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 20a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8l-7 5V8l-7 5V4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2z"/><path d="M17 18h1"/><path d="M12 18h1"/><path d="M7 18h1"/></svg>',
  calendar: '<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M8 2v4"/><path d="M16 2v4"/><rect width="18" height="18" x="3" y="4" rx="2"/><path d="M3 10h18"/></svg>',
  pinSm: '<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"/><circle cx="12" cy="10" r="3"/></svg>',
  shieldSm: '<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/></svg>',
  settings: '<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2"/><circle cx="12" cy="12" r="3"/></svg>',
  wrenchSm: '<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>',
  check2: '<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>',
  clock22: '<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>',
  award40: '<svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526"/><circle cx="12" cy="8" r="6"/></svg>',
  shield8: '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/></svg>',
  globe6: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/></svg>',
  awardBadge: '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526"/><circle cx="12" cy="8" r="6"/></svg>',
};

function injectIcons(root = document) {
  $$('[data-icon]', root).forEach((el) => {
    const name = el.getAttribute('data-icon');
    if (ICONS[name]) el.innerHTML = ICONS[name];
    el.style.display = 'inline-flex';
    el.style.alignItems = 'center';
    el.style.justifyContent = 'center';
  });
}

/* ---------- Navbar ---------- */
function buildNavbar() {
  const slot = $('#navbar-slot');
  if (!slot) return;
  const path = location.pathname.split('/').pop() || 'index.html';
  const links = [
    { label: 'Home', href: 'index.html' },
    { label: 'Services', href: 'services.html' },
    { label: 'Projects', href: 'projects.html' },
    { label: 'About Us', href: 'about.html' },
  ];
  const isHome = path === 'index.html' || path === '';
  slot.innerHTML = `
    <header class="navbar${isHome ? '' : ' solid'}" id="site-navbar">
      <div class="container navbar-inner">
        <a href="index.html" class="navbar-logo">
          <span class="logo-icon"><i data-icon="shield"></i></span>
          <span class="logo-text">VSR<span class="light">Technologies</span></span>
        </a>
        <nav class="navbar-nav">
          ${links.map(l => `<a href="${l.href}" class="nav-link${path === l.href ? ' active' : ''}">${l.label}</a>`).join('')}
        </nav>
        <div class="navbar-cta">
          <a href="mailto:procurement@vsrtech.com" class="cta-btn">Contact Sales</a>
          <button class="mobile-toggle" id="mobile-toggle" aria-label="Toggle menu"><i data-icon="menu"></i></button>
        </div>
      </div>
      <div class="mobile-menu" id="mobile-menu">
        <nav>
          ${links.map(l => `<a href="${l.href}"${path === l.href ? ' class="active"' : ''}>${l.label}</a>`).join('')}
          <a href="mailto:procurement@vsrtech.com" class="cta-mobile">Contact Sales</a>
        </nav>
      </div>
    </header>`;

  injectIcons(slot);

  const navbar = $('#site-navbar');
  if (isHome) {
    const onScroll = () => {
      if (window.scrollY > 30) navbar.classList.add('solid');
      else navbar.classList.remove('solid');
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  $('#mobile-toggle')?.addEventListener('click', () => {
    $('#mobile-menu').classList.toggle('open');
    const icon = $('#mobile-toggle i');
    icon.setAttribute('data-icon', icon.innerHTML.includes('M18 6') ? 'menu' : 'x');
    icon.innerHTML = ICONS[icon.getAttribute('data-icon')];
  });
}

/* ---------- Footer ---------- */
function buildFooter() {
  const slot = $('#footer-slot');
  if (!slot) return;
  slot.innerHTML = `
    <footer class="site-footer">
      <div class="container">
        <div class="footer-grid">
          <div>
            <a href="index.html" class="footer-logo">
              <span class="icon"><i data-icon="shield"></i></span>
              <span class="text">VSR<span class="light">Technologies</span></span>
            </a>
            <p class="footer-desc">Premium physical security infrastructure, structured cabling, and smart building solutions for enterprise and critical environments.</p>
          </div>
          <div class="footer-col">
            <h4>Solutions</h4>
            <ul>
              <li><a href="services.html">CCTV Surveillance</a></li>
              <li><a href="services.html">Video Analytics</a></li>
              <li><a href="services.html">Entrance Control</a></li>
              <li><a href="services.html">Fire Alarm Systems</a></li>
              <li><a href="services.html">Building Management</a></li>
            </ul>
          </div>
          <div class="footer-col">
            <h4>Company</h4>
            <ul>
              <li><a href="about.html">About Us</a></li>
              <li><a href="projects.html">Our Projects</a></li>
              <li><a href="services.html">All Services</a></li>
              <li><a href="index.html#industries">Industries</a></li>
              <li><a href="mailto:procurement@vsrtech.com">Contact Sales</a></li>
            </ul>
          </div>
          <div class="footer-col">
            <h4>Contact</h4>
            <ul class="footer-contact">
              <li><i data-icon="mapPin"></i><span>1200 Infrastructure Way<br/>Suite 400<br/>Dallas, TX 75201</span></li>
              <li><i data-icon="phone"></i><span>+1 (800) 555-0199</span></li>
              <li><i data-icon="mail"></i><span>procurement@vsrtech.com</span></li>
            </ul>
          </div>
        </div>
        <div class="footer-bottom">
          <p>&copy; ${new Date().getFullYear()} VSR Technologies. All rights reserved.</p>
          <div class="links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">Compliance</a>
          </div>
        </div>
      </div>
    </footer>`;
  injectIcons(slot);
}

/* ---------- Scroll reveal ---------- */
function initReveal() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) {
        e.target.classList.add('in-view');
        observer.unobserve(e.target);
      }
    });
  }, { threshold: 0.15, rootMargin: '0px 0px -10% 0px' });
  $$('.reveal, .burst, .stat-card, .why-card, .service-card, .cam, .industry-card').forEach((el) => observer.observe(el));
}

/* ---------- Hero rotating text ---------- */
function initHeroRotate() {
  const target = $('#hero-rotate');
  if (!target) return;
  const items = ['CCTV Surveillance','Video Analytics','Networking Solutions','Building Management','Fire Alarm Systems','Entrance Control','Parking Management','Smart City Solutions'];
  let i = 0;
  setInterval(() => {
    i = (i + 1) % items.length;
    target.innerHTML = `<span>${items[i]}</span>`;
  }, 2200);
}

/* ---------- Hero parallax ---------- */
function initHeroParallax() {
  const bg = $('.hero-bg img');
  const content = $('.hero-content');
  if (!bg) return;
  window.addEventListener('scroll', () => {
    const y = window.scrollY;
    if (y > window.innerHeight) return;
    bg.style.transform = `scale(1.1) translateY(${y * 0.25}px)`;
    if (content) content.style.opacity = Math.max(0, 1 - y / (window.innerHeight * 0.7));
  }, { passive: true });
}

/* ---------- Slider 3D (Case Studies) ---------- */
function initSlider() {
  const stage = $('#slider-stage');
  if (!stage) return;
  const slides = JSON.parse(stage.dataset.slides);
  let cur = 0;
  const total = slides.length;

  const main = $('#slider-main');
  const sideL = $('#slider-side-l');
  const sideR = $('#slider-side-r');
  const dotsBox = $('#slider-dots');
  dotsBox.innerHTML = slides.map((_, i) => `<button class="slider-dot${i === 0 ? ' active' : ''}" data-i="${i}" aria-label="Slide ${i + 1}"></button>`).join('');

  function render() {
    const s = slides[cur];
    const sL = slides[(cur - 1 + total) % total];
    const sR = slides[(cur + 1) % total];
    sideL.style.background = `linear-gradient(135deg, ${s.bgFrom}, ${s.bgTo})`;
    sideR.style.background = `linear-gradient(135deg, ${sR.bgFrom}, ${sR.bgTo})`;
    sideL.style.background = `linear-gradient(135deg, ${sL.bgFrom}, ${sL.bgTo})`;

    main.style.background = `linear-gradient(135deg, ${s.bgFrom}, ${s.bgTo})`;
    main.innerHTML = `
      <div class="slide-glow" style="background: linear-gradient(135deg, ${s.accentFrom}, ${s.accentTo});"></div>
      <div class="slide-grid">
        <div class="slide-content">
          <div>
            <span class="slide-cat" style="background: linear-gradient(to right, ${s.accentFrom}, ${s.accentTo});">${s.category}</span>
            <h3 class="slide-title">${s.title}</h3>
            <p class="slide-body">${s.body}</p>
          </div>
          <a href="mailto:procurement@vsrtech.com" class="slide-cta" style="background: linear-gradient(to right, ${s.accentFrom}, ${s.accentTo}); -webkit-background-clip: text; background-clip: text;">
            Request case study details <span class="arrow"><i data-icon="arrowRight"></i></span>
          </a>
        </div>
        <div class="slide-highlights">
          <div class="label">Key Deliverables</div>
          ${s.highlights.map(h => `
            <div class="item">
              <span class="dot" style="background: linear-gradient(135deg, ${s.accentFrom}, ${s.accentTo});"></span>
              <span>${h}</span>
            </div>`).join('')}
        </div>
      </div>`;
    injectIcons(main);
    $$('.slider-dot', dotsBox).forEach((d, i) => d.classList.toggle('active', i === cur));
  }

  function go(dir) { cur = (cur + dir + total) % total; render(); }
  $('#slider-prev').addEventListener('click', () => go(-1));
  $('#slider-next').addEventListener('click', () => go(1));
  dotsBox.addEventListener('click', (e) => {
    const btn = e.target.closest('.slider-dot');
    if (!btn) return;
    cur = parseInt(btn.dataset.i, 10);
    render();
  });
  render();
}

/* ---------- Stat card expand ---------- */
function initStatCards() {
  $$('.stat-card').forEach((card) => {
    card.addEventListener('click', () => card.classList.toggle('expanded'));
  });
}

/* ---------- FAQ accordion ---------- */
function initFAQ() {
  $$('.faq-item').forEach((item) => {
    const trigger = $('.faq-trigger', item);
    const iconWrap = $('.faq-icon i', item);
    trigger.addEventListener('click', () => {
      const isOpen = item.classList.toggle('open');
      iconWrap.setAttribute('data-icon', isOpen ? 'minus' : 'plus');
      iconWrap.innerHTML = ICONS[isOpen ? 'minus' : 'plus'];
    });
  });
}

/* ---------- AI horizontal scroll progress ---------- */
function initAiCardsProgress() {
  const strip = $('#ai-cards-strip');
  if (!strip) return;
  const cards = $$('.ai-card', strip);
  const segs = $$('#ai-cards-progress .seg');
  const cur = $('#ai-cards-cur');

  function update() {
    const cardW = cards[0].offsetWidth + 20;
    const idx = Math.min(cards.length - 1, Math.max(0, Math.round(strip.scrollLeft / cardW)));
    segs.forEach((s, i) => s.classList.toggle('on', i <= idx));
    cur.textContent = String(idx + 1).padStart(2, '0');
  }
  strip.addEventListener('scroll', update, { passive: true });
  update();
}

/* ---------- Services tabs (services.html) ---------- */
function initServiceTabs() {
  const wrap = $('#svc-tabs');
  if (!wrap) return;
  const data = JSON.parse(wrap.dataset.services);
  const panel = $('#svc-panel');

  function render(id) {
    const s = data.find(x => x.id === id);
    panel.style.boxShadow = `0 4px 40px ${s.glow}, 0 1px 3px rgba(0,0,0,0.04)`;
    panel.innerHTML = `
      <div class="svc-panel-head">
        <div class="svc-panel-icon" style="background: linear-gradient(135deg, ${s.gradFrom}, ${s.gradTo});">
          <i data-icon="${s.icon}"></i>
        </div>
        <div>
          <h2>${s.title}</h2>
          <p class="svc-panel-tag">${s.tagline}</p>
        </div>
      </div>
      <div class="svc-divider" style="background: linear-gradient(to right, ${s.gradFrom}, ${s.gradTo});"></div>
      <p class="svc-panel-desc">${s.description}</p>
      <div class="svc-features">
        ${s.features.map(f => `<div class="svc-feature"><i data-icon="checkCircle"></i>${f}</div>`).join('')}
      </div>
      <a href="mailto:procurement@vsrtech.com" class="btn" style="background: linear-gradient(to right, ${s.gradFrom}, ${s.gradTo}); color: #fff; box-shadow: 0 12px 24px rgba(0,0,0,0.15);">
        Request a Quote <i data-icon="arrowRight"></i>
      </a>`;
    injectIcons(panel);
    $$('.svc-tab', wrap).forEach((t) => t.classList.toggle('active', t.dataset.id === id));
  }

  wrap.innerHTML = data.map((s, i) => `
    <button class="svc-tab${i === 0 ? ' active' : ''}" data-id="${s.id}">
      <span class="svc-tab-icon" data-grad="${s.gradFrom},${s.gradTo}"><i data-icon="${s.icon}"></i></span>
      <span>${s.title}</span>
    </button>`).join('');
  injectIcons(wrap);
  $$('.svc-tab', wrap).forEach((t) => {
    t.addEventListener('click', () => {
      const id = t.dataset.id;
      render(id);
      // update active tab icon background
      $$('.svc-tab', wrap).forEach((tab) => {
        const icon = $('.svc-tab-icon', tab);
        if (tab.classList.contains('active')) {
          const [a, b] = icon.dataset.grad.split(',');
          icon.style.background = `linear-gradient(135deg, ${a}, ${b})`;
          icon.style.color = '#fff';
        } else {
          icon.style.background = '';
          icon.style.color = '';
        }
      });
    });
  });
  // initial active styling
  const firstIcon = $('.svc-tab.active .svc-tab-icon', wrap);
  if (firstIcon) {
    const [a, b] = firstIcon.dataset.grad.split(',');
    firstIcon.style.background = `linear-gradient(135deg, ${a}, ${b})`;
    firstIcon.style.color = '#fff';
  }
  render(data[0].id);
}

/* ---------- Projects filter + modal (projects.html) ---------- */
function initProjects() {
  const grid = $('#proj-grid');
  if (!grid) return;
  const data = JSON.parse(grid.dataset.projects);
  const cats = ['All', 'Aviation', 'Commercial', 'Industrial', 'Smart City', 'Critical Infrastructure'];
  const filtersBox = $('#proj-filters');
  let active = 'All';

  function render() {
    const list = active === 'All' ? data : data.filter(p => p.category === active);
    grid.innerHTML = list.map(p => `
      <div class="proj-card" data-id="${p.id}">
        <div class="proj-card-img">
          <img src="${p.image}" alt="${p.title}" loading="lazy"/>
          <span class="proj-status ${p.status === 'In Progress' ? 'progress' : 'completed'}"><span class="dot"></span>${p.status}</span>
          <span class="proj-cat" style="background: ${p.tagBg}; color: ${p.tagColor}; border-color: ${p.tagBorder};">
            <i data-icon="${p.icon}"></i> ${p.category}
          </span>
        </div>
        <div class="proj-card-body">
          <div class="proj-card-bar" style="background: linear-gradient(to right, ${p.accentFrom}, ${p.accentTo});"></div>
          <h3>${p.title}</h3>
          <div class="proj-card-meta">
            <span><i data-icon="pinSm"></i>${p.location.split(',')[0]}</span>
            <span><i data-icon="calendar"></i>${p.year}</span>
          </div>
        </div>
      </div>`).join('');
    injectIcons(grid);
    $$('.proj-card', grid).forEach(card => {
      card.addEventListener('click', () => openModal(card.dataset.id));
    });
  }

  filtersBox.innerHTML = cats.map((c, i) => {
    const count = c === 'All' ? data.length : data.filter(p => p.category === c).length;
    return `<button class="proj-filter${i === 0 ? ' active' : ''}" data-cat="${c}">${c}<span class="count">${count}</span></button>`;
  }).join('');
  filtersBox.addEventListener('click', (e) => {
    const btn = e.target.closest('.proj-filter');
    if (!btn) return;
    active = btn.dataset.cat;
    $$('.proj-filter', filtersBox).forEach(b => b.classList.toggle('active', b === btn));
    render();
  });

  // Modal
  const modal = $('#proj-modal');
  function openModal(id) {
    const p = data.find(x => x.id === id);
    $('#proj-modal-content').innerHTML = `
      <div class="proj-modal-img">
        <img src="${p.image}" alt="${p.title}"/>
        <span class="proj-modal-cat" style="background: ${p.tagBg}; color: ${p.tagColor}; border-color: ${p.tagBorder};"><i data-icon="${p.icon}"></i>${p.category}</span>
        <button class="proj-modal-close" id="proj-modal-close"><i data-icon="x"></i></button>
      </div>
      <div class="proj-modal-body">
        <div class="proj-modal-meta">
          <span><i data-icon="pinSm"></i>${p.location}</span>
          <span class="sep"></span>
          <span><i data-icon="calendar"></i>${p.year}</span>
          <span class="sep"></span>
          <span style="color: ${p.status === 'In Progress' ? '#d97706' : '#16a34a'}; font-weight: 500;">${p.status}</span>
        </div>
        <h2>${p.title}</h2>
        <div class="proj-modal-bar" style="background: linear-gradient(to right, ${p.accentFrom}, ${p.accentTo});"></div>
        <p class="proj-modal-scope">${p.scope}</p>
        <h4>Key Deliverables</h4>
        <div class="proj-modal-deliverables">
          ${p.deliverables.map(d => `<div><i data-icon="checkCircle"></i>${d}</div>`).join('')}
        </div>
        <div class="proj-modal-foot">
          <span class="client">Client: ${p.client}</span>
          <a href="mailto:procurement@vsrtech.com" class="btn" style="background: linear-gradient(to right, ${p.accentFrom}, ${p.accentTo}); color: #fff;">Similar Project? <i data-icon="arrowRight"></i></a>
        </div>
      </div>`;
    injectIcons($('#proj-modal-content'));
    modal.classList.add('open');
    document.body.style.overflow = 'hidden';
    $('#proj-modal-close').addEventListener('click', closeModal);
  }
  function closeModal() {
    modal.classList.remove('open');
    document.body.style.overflow = '';
  }
  $('#proj-modal-bg').addEventListener('click', closeModal);
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeModal(); });

  render();
}

/* ---------- Init on DOM ready ---------- */
document.addEventListener('DOMContentLoaded', () => {
  buildNavbar();
  buildFooter();
  injectIcons();
  initReveal();
  initHeroRotate();
  initHeroParallax();
  initSlider();
  initStatCards();
  initFAQ();
  initAiCardsProgress();
  initServiceTabs();
  initProjects();
});
