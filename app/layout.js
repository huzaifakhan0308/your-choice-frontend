import './globals.css'
import { Inter } from 'next/font/google'
import { StateContext } from "../context/StateContext";

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Your Choice Leather-Collection - Online Shopping In Pakistan',
  description: 'Discover a variety of shoes, jackets, and handbags for online shopping in Pakistan. Elevate your style with our curated collection.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="description" content={metadata.description} />
        <meta name="author" content="sunny"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/logo.png" />
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-4bw+/aepP/YC94hEpVNVgiZdgIC5+VKNBQNGCHeKRQN+PtmoHDEXuppvnDJzQIu9" crossOrigin="anonymous"/>
      </head>
      <body className={inter.className}>
        <StateContext>
          {children}
        </StateContext>
      </body>
    </html>
  )
}
