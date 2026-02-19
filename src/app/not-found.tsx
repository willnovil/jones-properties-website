import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center">
      <div className="text-center px-4">
        <h1 className="font-heading text-6xl font-bold text-primary/20 mb-4">404</h1>
        <h2 className="font-heading text-2xl font-bold text-primary mb-3">
          Page Not Found
        </h2>
        <p className="font-body text-foreground/50 mb-8 max-w-md mx-auto">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link href="/" className="btn-primary">
            Go Home
          </Link>
          <Link href="/properties" className="btn-outline">
            View Properties
          </Link>
        </div>
      </div>
    </div>
  );
}
