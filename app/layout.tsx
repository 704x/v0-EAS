import { Navigation } from '@/components/navigation';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={[
        geistSans.variable,
        geistMono.variable,
        inter.variable,
        spaceGrotesk.variable,
        sora.variable,
        sourceSerif4.variable,
      ].join(' ')}
    >
      <body className="antialiased bg-background text-foreground">
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <Navigation />
          <Suspense fallback={null}>{children}</Suspense>
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}


import './globals.css'

export const metadata = {
      generator: 'v0.app'
    };
