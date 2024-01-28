import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '@/app/globals.css'
import { NextFont } from 'next/dist/compiled/@next/font'

const inter: NextFont = Inter({ subsets: ['latin'] })

const metadata: Metadata = {
    title: 'ToDo',
    description: 'ToDo',
    keywords: ['ToDo'],
    authors: [{ name: 'UglyGhoulChrist' }],
    icons: {
        icon: [
            {
                url: '/favicon.ico',
                href: '/favicon.ico',
            }]
    },
}

function RootLayout({ children, }: Readonly<{ children: React.ReactNode }>): JSX.Element {

    return (

        <html lang='en'>
            <body className={inter.className}>{children}</body>
        </html>
    )
}

export default RootLayout
export { metadata }