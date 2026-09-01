import './globals.css';
import 'jbx/main.css';

import { GoogleAnalytics } from '@next/third-parties/google';

import GitHubCorner from '@/components/GitHubCorner.jsx';

const TITLE =
  'React Blur | React component for creating blurred backgrounds using canvas.';
const DESCRIPTION =
  'React component for creating blurred backgrounds using canvas.';
const CANONICAL = 'https://javier.xyz/react-blur';
const THUMBNAIL = 'https://javier.xyz/react-blur/react-blur.jpg';

// Absolute urls throughout: the canonical has to stay javier.xyz/react-blur with
// no trailing slash, so nothing is left to url resolution.
export const metadata = {
  metadataBase: new URL('https://javier.xyz'),
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: CANONICAL },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: CANONICAL,
    images: [
      {
        url: THUMBNAIL,
        width: 1600,
        height: 900,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: TITLE,
    description: DESCRIPTION,
    images: [THUMBNAIL],
  },
};

export const viewport = { width: 'device-width', initialScale: 1 };

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
        <GitHubCorner />
        <GoogleAnalytics gaId="G-M2FT27FXS2" />
      </body>
    </html>
  );
}
