export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8 text-center">
      <h1 className="text-4xl font-bold mb-4">404 – Page Not Found</h1>
      <p className="text-lg text-muted-foreground mb-6">
        The page you’re looking for doesn’t exist or has been moved.
      </p>
      <a
        href="/"
        className="px-6 py-3 rounded-lg bg-primary text-primary-foreground hover:bg-primary/80 transition-colors"
      >
        Go Home
      </a>
    </div>
  )
}
