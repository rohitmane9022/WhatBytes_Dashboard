import localFont from "next/font/local";
import "./globals.css";


export default function RootLayout({ children }) {
  return (
    <html lang='en' suppressHydrationWarning>
      <head>
        
      </head>
      <body className="font-poppins"
        
      >
        {children}
      </body>
      
    </html>
  );
}
