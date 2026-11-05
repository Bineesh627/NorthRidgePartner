import { CONTACT_EMAIL, DISCOVERY_CALL_SUBJECT, DISCOVERY_CALL_BODY, HIRING_SUBJECT, HIRING_BODY } from '../data/content';

const enc = encodeURIComponent;

// Plain mailto link (used on phones, where it opens the mail app)
export const DISCOVERY_CALL_MAILTO = `mailto:${CONTACT_EMAIL}?subject=${enc(DISCOVERY_CALL_SUBJECT)}&body=${enc(DISCOVERY_CALL_BODY)}`;

// Gmail compose window (used on desktop browsers, where mailto often does nothing)
export const DISCOVERY_CALL_GMAIL = `https://mail.google.com/mail/?view=cm&fs=1&to=${enc(CONTACT_EMAIL)}&su=${enc(DISCOVERY_CALL_SUBJECT)}&body=${enc(DISCOVERY_CALL_BODY)}`;

export const HIRING_MAILTO = `mailto:${CONTACT_EMAIL}?subject=${enc(HIRING_SUBJECT)}&body=${enc(HIRING_BODY)}`;
export const HIRING_GMAIL = `https://mail.google.com/mail/?view=cm&fs=1&to=${enc(CONTACT_EMAIL)}&su=${enc(HIRING_SUBJECT)}&body=${enc(HIRING_BODY)}`;

const isMobile = () => /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);

/**
 * onClick handler for the discovery-call buttons.
 * Mobile  -> let the normal mailto link open the phone's mail app.
 * Desktop -> open a Gmail compose window in a new tab (works without a mail app installed).
 */
function openCompose(e, url) {
  if (isMobile()) return; // default mailto behaviour
  e.preventDefault();
  const win = window.open(url, '_blank');
  if (win) win.opener = null; // safety: the new tab can't control this page
  else window.location.href = url; // popup blocked -> open in same tab
}
export const handleDiscoveryCallClick = (e) => openCompose(e, DISCOVERY_CALL_GMAIL);
export const handleHiringClick = (e) => openCompose(e, HIRING_GMAIL);
