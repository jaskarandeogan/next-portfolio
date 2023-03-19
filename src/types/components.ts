import { ReactNode } from 'react';

export interface CircularProgressBarProps {
	children?: ReactNode;
	progressStart?: number;
	progressEnd?: number;
	speed?: number;
	barColor?: string;
	className?: string;
}