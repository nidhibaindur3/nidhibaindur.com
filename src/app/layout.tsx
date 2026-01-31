import './globals.css';
import localFont from 'next/font/local';
import { Sanchez } from 'next/font/google';

// /Users/adityabaindur/code/nidhi/src/font/Excalifont-Regular.woff2

const myFont = localFont({
  // src: '../font/EduNSWACTCursive-VariableFont_wght.ttf',
  src: '../font/Excalifont-Regular.woff2',
  // src: '../font/Bumbbled.otf',
  weight: '200',
});

const sanchez = Sanchez({
  weight: '400',
});

export const metadata = {
  title: "Nidhi's Website",
  description: "Nidhi Baindur's website",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${sanchez.className} font-sans antialiased bg-main-theme`}>{children}</body>
    </html>
  );
}
