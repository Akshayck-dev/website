'use client';
import React from 'react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { MenuToggleIcon } from '@/components/ui/menu-toggle-icon';
import { createPortal } from 'react-dom';
import {
	NavigationMenu,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
} from '@/components/ui/navigation-menu';
import { Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png';

export function Header() {
	const [open, setOpen] = React.useState(false);
	const scrolled = useScroll(10);

	React.useEffect(() => {
		if (open) {
			document.body.style.overflow = 'hidden';
		} else {
			document.body.style.overflow = '';
		}
		return () => {
			document.body.style.overflow = '';
		};
	}, [open]);

	return (
		<header
			className={cn('fixed top-0 z-50 w-full border-b border-transparent transition-all duration-300', {
				'bg-background/95 supports-[backdrop-filter]:bg-background/50 border-border backdrop-blur-lg shadow-sm':
					scrolled,
			})}
		>
			<nav className="mx-auto flex h-20 w-full max-w-7xl items-center justify-between px-6 lg:px-12">
				<div className="flex items-center gap-8">
					<Link to="/" className="hover:bg-accent/50 rounded-md p-2 transition-colors flex items-center gap-2 font-display text-2xl tracking-tight group">
						<img src={logo} alt="WebApp Orbis Logo" className="h-12 w-auto" />
						<div className="flex flex-col leading-none">
							<span className="text-blue-500 font-bold group-hover:text-blue-400 transition-colors">WebApp</span>
							<span className="text-snow group-hover:text-white transition-colors text-lg">Orbis</span>
						</div>
					</Link>
					<NavigationMenu className="hidden md:flex">
						<NavigationMenuList>
							<NavigationMenuItem>
								<NavigationMenuLink className="px-4" asChild>
									<Link to="/about" className="text-lg font-medium hover:text-gold transition-colors p-2">About</Link>
								</NavigationMenuLink>
							</NavigationMenuItem>
							<NavigationMenuItem>
								<NavigationMenuLink className="px-4" asChild>
									<Link to="/services" className="text-lg font-medium hover:text-gold transition-colors p-2">Services</Link>
								</NavigationMenuLink>
							</NavigationMenuItem>
							<NavigationMenuItem>
								<NavigationMenuLink className="px-4" asChild>
									<a href="#" className="text-lg font-medium hover:text-gold transition-colors p-2">Our Works</a>
								</NavigationMenuLink>
							</NavigationMenuItem>
							<NavigationMenuItem>
								<NavigationMenuLink className="px-4" asChild>
									<a href="#" className="text-lg font-medium hover:text-gold transition-colors p-2">Solutions</a>
								</NavigationMenuLink>
							</NavigationMenuItem>
							<NavigationMenuItem>
								<NavigationMenuLink className="px-4" asChild>
									<a href="#" className="text-lg font-medium hover:text-gold transition-colors p-2">Career</a>
								</NavigationMenuLink>
							</NavigationMenuItem>
							<NavigationMenuItem>
								<NavigationMenuLink className="px-4" asChild>
									<a href="#" className="text-lg font-medium hover:text-gold transition-colors p-2">Technologies</a>
								</NavigationMenuLink>
							</NavigationMenuItem>
						</NavigationMenuList>
					</NavigationMenu>
				</div>
				<div className="flex items-center gap-6">
					<a href="#" className="text-snow hover:text-gold transition-colors hidden md:block">
						<Phone className="size-5" />
					</a>
					<Button
						variant="outline"
						onClick={() => setOpen(!open)}
						className="rounded-full border-border/50 hover:bg-accent/50 h-10 px-4 gap-2 flex bg-charcoal/50 text-snow"
						aria-expanded={open}
						aria-controls="mobile-menu"
						aria-label="Toggle menu"
					>
						<span className="text-lg font-medium hidden md:block">MENU</span>
						<MenuToggleIcon open={open} className="size-5 text-snow" duration={300} />
					</Button>
				</div>
			</nav>
			<MobileMenu open={open} className="flex flex-col justify-between gap-2 overflow-y-auto pt-8">
				<NavigationMenu className="max-w-full items-start justify-start flex-col">
					<div className="flex w-full flex-col gap-y-4 px-2">
						<Link to="/about" className="text-xl font-medium text-snow hover:text-gold py-2 transition-colors" onClick={() => setOpen(false)}>About</Link>
						<Link to="/services" className="text-xl font-medium text-snow hover:text-gold py-2 transition-colors" onClick={() => setOpen(false)}>Services</Link>
						<a href="#" className="text-xl font-medium text-snow hover:text-gold py-2 transition-colors">Our Works</a>
						<a href="#" className="text-xl font-medium text-snow hover:text-gold py-2 transition-colors">Solutions</a>
						<a href="#" className="text-xl font-medium text-snow hover:text-gold py-2 transition-colors">Career</a>
						<a href="#" className="text-xl font-medium text-snow hover:text-gold py-2 transition-colors">Technologies</a>
					</div>
				</NavigationMenu>
				<div className="flex flex-col gap-4 mt-8 pb-8 px-2">
					{/* Buttons removed as requested */}
				</div>
			</MobileMenu>
		</header>
	);
}

type MobileMenuProps = React.ComponentProps<'div'> & {
	open: boolean;
};

function MobileMenu({ open, children, className, ...props }: MobileMenuProps) {
	if (!open || typeof window === 'undefined') return null;

	return createPortal(
		<div
			id="mobile-menu"
			className={cn(
				'bg-obsidian/95 supports-[backdrop-filter]:bg-obsidian/80 backdrop-blur-xl',
				'fixed top-20 right-0 bottom-0 left-0 z-40 flex flex-col overflow-hidden border-t border-border/20 md:hidden',
			)}
		>
			<div
				data-slot={open ? 'open' : 'closed'}
				className={cn(
					'data-[slot=open]:animate-in data-[slot=open]:zoom-in-95 ease-out duration-300',
					'size-full p-6',
					className,
				)}
				{...props}
			>
				{children}
			</div>
		</div>,
		document.body,
	);
}


function useScroll(threshold: number) {
	const [scrolled, setScrolled] = React.useState(false);

	const onScroll = React.useCallback(() => {
		setScrolled(window.scrollY > threshold);
	}, [threshold]);

	React.useEffect(() => {
		window.addEventListener('scroll', onScroll);
		return () => window.removeEventListener('scroll', onScroll);
	}, [onScroll]);

	// also check on first load
	React.useEffect(() => {
		onScroll();
	}, [onScroll]);

	return scrolled;
}



