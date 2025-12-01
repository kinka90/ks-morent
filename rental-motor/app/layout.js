import './globals.css'

export const metadata = {
  title: 'Rental Motor',
  description: 'Aplikasi rental motor realtime with Firebase'
}

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <head>
        {/* Bootstrap CDN */}
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" />
      </head>
      <body>
        {children}
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"></script>
      </body>
    </html>
  )
}
