import { CONTACT_EMAIL, PARTNER_CTA_SUBJECT, PARTNER_CTA_BODY, HIRING_SUBJECT, HIRING_BODY } from '../data/content';

const enc = encodeURIComponent;

export const PARTNER_MAILTO = `mailto:${CONTACT_EMAIL}?subject=${enc(PARTNER_CTA_SUBJECT)}&body=${enc(PARTNER_CTA_BODY)}`;
export const PARTNER_GMAIL = `https://mail.google.com/mail/?view=cm&fs=1&to=${enc(CONTACT_EMAIL)}&su=${enc(PARTNER_CTA_SUBJECT)}&body=${enc(PARTNER_CTA_BODY)}`;
export const HIRING_MAILTO = `mailto:${CONTACT_EMAIL}?subject=${enc(HIRING_SUBJECT)}&body=${enc(HIRING_BODY)}`;
export const HIRING_GMAIL = `https://mail.google.com/mail/?view=cm&fs=1&to=${enc(CONTACT_EMAIL)}&su=${enc(HIRING_SUBJECT)}&body=${enc(HIRING_BODY)}`;

const isMobile = () => /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);

function openCompose(e, url) {
  if (isMobile()) return;
  e.preventDefault();
  const win = window.open(url, '_blank');
  if (win) win.opener = null;
  else window.location.href = url;
}

export const handlePartnerClick = (e) => openCompose(e, PARTNER_GMAIL);
export const handleHiringClick = (e) => openCompose(e, HIRING_GMAIL);
