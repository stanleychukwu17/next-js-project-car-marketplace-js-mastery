import type { Metadata } from 'next'
import ReduxProvider from './redux/provider'
import Header from './components/Header/Header'

// import fonts
import { Inter } from 'next/font/google'

// import stylesheets
import './globals.css'

//using the fonts
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
    title: 'Next app',
    description: 'Generated by create next app',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <ReduxProvider>
                    <Header />
                    <main className='max-container'>
                        {children}
                    </main>
                </ReduxProvider>
            </body>
        </html>
    )
}