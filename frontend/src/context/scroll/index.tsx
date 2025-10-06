'use client';

import { createContext, useContext, useEffect, useMemo, useState } from 'react';

export const ScrollContext = createContext<ScrollContextProps>(
  {} as ScrollContextProps,
);

export function ScrollProvider ({ children }: Readonly<{
  children: React.ReactNode;
}>) {
	const [scroll, setScroll] = useState(0);
	const [openMenu, setOpenMenu] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			setScroll(window.scrollY);
		};

		window.addEventListener('scroll', handleScroll);

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

  const values = useMemo(() => ({ scroll, openMenu, setOpenMenu }), [scroll, openMenu]);

	return (
		<ScrollContext.Provider value={values}>
			{children}
		</ScrollContext.Provider>
	);
}

export function useScroll() {
  return useContext(ScrollContext);
}