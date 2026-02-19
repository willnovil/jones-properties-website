export default function Loading() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center">
      <div className="text-center">
        <div className="w-10 h-10 border-4 border-accent/20 border-t-accent rounded-full animate-spin mx-auto mb-4" />
        <p className="font-body text-foreground/40 text-sm">Loading...</p>
      </div>
    </div>
  );
}
