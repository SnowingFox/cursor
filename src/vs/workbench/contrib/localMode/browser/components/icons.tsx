import type { ReactNode } from 'react';

// 16px stroke icons (Lucide geometry), drawn in currentColor.
const PATHS = {
	plus: 'M12 5v14M5 12h14',
	x: 'M18 6 6 18M6 6l12 12',
	search: 'M21 21l-4.3-4.3M11 18a7 7 0 1 0 0-14 7 7 0 0 0 0 14z',
	eye: 'M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12zM12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6z',
	eyeOff:
		'M9.9 4.2A9.8 9.8 0 0 1 12 4c6.5 0 10 8 10 8a17 17 0 0 1-2.2 3.2M6.6 6.6A17 17 0 0 0 2 12s3.5 8 10 8a9.7 9.7 0 0 0 5.4-1.6M14.1 14.1a3 3 0 0 1-4.2-4.2M2 2l20 20',
	refresh: 'M21 12a9 9 0 1 1-2.6-6.4L21 8M21 3v5h-5',
	check: 'M20 6 9 17l-5-5',
	alert: 'M12 8v4M12 16h.01M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20z',
	chevron: 'm9 18 6-6-6-6',
	trash: 'M3 6h18M8 6V4h8v2M19 6l-1 14H6L5 6',
} as const;

export type IconName = keyof typeof PATHS;

export function Icon({ name, size = 14 }: { name: IconName; size?: number }): ReactNode {
	return (
		<svg
			width={size}
			height={size}
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth={2}
			strokeLinecap="round"
			strokeLinejoin="round"
			aria-hidden="true"
			className="local-mode-icon"
		>
			<path d={PATHS[name]} />
		</svg>
	);
}
