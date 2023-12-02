
// Packages----------------------------------------------
import { Inter } from 'next/font/google'
// FontAwesome------------------------------------------------
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config as fwaConfig } from "@fortawesome/fontawesome-svg-core";
fwaConfig.autoAddCss = false;
// Styles------------------------------------------------
import '@/styles/globals.css'


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
    title: 'NextGenScripts',
    description: 'The Shape of Scripts to Come',
}

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={inter.className}>{children}</body>
        </html>
    )
}
