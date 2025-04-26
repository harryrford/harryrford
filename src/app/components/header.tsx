'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Header() {
    const pathname = usePathname();

    return (
        <header className="m-5 flex flex-row flex-nowrap ">
            <Link className={`pb-2 border-b-2 text-nowrap`} href="/">Harry Ford</Link>
            <nav className="w-full">
                <ul className="flex flex-row flex-nowrap gap-1 justify-center">
                    <li><Link className={`p-5 hover:border-b-2 ${pathname === '/blockchain' ? 'border-b-2' : ''}`} href="/blockchain">Blockchain</Link></li>
                    <li><Link className={`p-5 hover:border-b-2 ${pathname === '/ai' ? 'border-b-2' : ''}`} href="/ai">AI</Link></li>
                </ul>
            </nav>
        </header>
    )
}