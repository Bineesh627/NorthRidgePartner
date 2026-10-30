import { CONTACT_EMAIL, DISCOVERY_CALL_SUBJECT, DISCOVERY_CALL_BODY } from '../data/content';

const enc = encodeURIComponent;

// Plain mailto link (used on phones, where it opens the mail app)
export const DISCOVERY_CALL_MAILTO = `mailto:${CONTACT_EMAIL}?subject=${enc(DISCOVERY_CALL_SUBJECT)}&body=${enc(DISCOVERY_CALL_BODY)}`;

// Gmail compose window (used on desktop browsers, where mailto often does nothing)
export const DISCOVERY_CALL_GMAIL = `https://mail.google.com/mail/?view=cm&fs=1&to=${enc(CONTACT_EMAIL)}&su=${enc(DISCOVERY_CALL_SUBJECT)}&body=${enc(DISCOVERY_CALL_BODY)}`;

const isMobile = () => /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);

/**
 * onClick handler for the discovery-call buttons.
 * Mobile  -> let the normal mailto link open the phone's mail app.
 * Desktop -> open a Gmail compose window in a new tab (works without a mail app installed).
 */
export function handleDiscoveryCallClick(e) {
  if (isMobile()) return; // default mailto behaviour
  e.preventDefault();
  const win = window.open(DISCOVERY_CALL_GMAIL, '_blank');
  if (win) win.opener = null; // safety: the new tab can't control this page
  else window.location.href = DISCOVERY_CALL_GMAIL; // popup blocked -> open in same tab
}
