import { ReactNode } from 'react';

export interface IconLinkProps {
	icon: ReactNode,
	href: string,
	children: string
}

export default function IconLink({ icon, href, children }: IconLinkProps) {
	return (
		<div className='flex gap-3 cursor-pointer items-center'>
			{ icon }
			<a className='text-sm text-slate-200' href={href}> { children } </a>
		</div>
	)
}