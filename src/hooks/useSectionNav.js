import { useEffect, useRef, useState } from 'react';

/**
 * In-page navigation:
 *  - smooth-scrolls to a section when any "#section" link is clicked
 *    (on mobile it closes the menu first so the scroll lands in the right place)
 *  - tracks which section is on screen so the matching menu item is highlighted
 *
 * `ids` is the list of section hashes shown in the menu, e.g. ['#home', '#about', ...]
 */
export default function useSectionNav(ids) {
  const [activeId, setActiveId] = useState(ids[0]);
  const [menuOpen, setMenuOpen] = useState(false);

  const menuOpenRef = useRef(false);
  const lockedRef = useRef(false); // true right after a click, until the user scrolls manually

  useEffect(() => {
    menuOpenRef.current = menuOpen;
  }, [menuOpen]);

  // Click handling (event delegation, so every in-page link works)
  useEffect(() => {
    const onClick = (e) => {
      const link = e.target.closest('a[href^="#"]');
      if (!link) return;

      const id = link.getAttribute('href');
      if (id === '#') return;

      const target = document.querySelector(id);
      if (!target) return;

      e.preventDefault();
      lockedRef.current = true;
      if (ids.includes(id)) setActiveId(id);

      const go = () => {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        window.history.replaceState(null, '', id);
      };

      if (menuOpenRef.current) {
        setMenuOpen(false);
        setTimeout(go, 60); // let the menu collapse before measuring
      } else {
        go();
      }
    };

    document.addEventListener('click', onClick);
    return () => document.removeEventListener('click', onClick);
  }, [ids]);

  // Highlight the current section while scrolling
  useEffect(() => {
    const unlock = () => {
      lockedRef.current = false;
    };
    const onScroll = () => {
      if (lockedRef.current) return;

      let current = ids[0];
      ids.forEach((id) => {
        const section = document.querySelector(id);
        if (section && section.getBoundingClientRect().top <= 120) current = id;
      });

      const atBottom =
        window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2;
      if (atBottom) current = ids[ids.length - 1];

      setActiveId(current);
    };

    ['wheel', 'touchmove', 'keydown'].forEach((ev) =>
      window.addEventListener(ev, unlock, { passive: true })
    );
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    return () => {
      ['wheel', 'touchmove', 'keydown'].forEach((ev) => window.removeEventListener(ev, unlock));
      window.removeEventListener('scroll', onScroll);
    };
  }, [ids]);

  return { activeId, menuOpen, setMenuOpen };
}
