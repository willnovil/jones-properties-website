import Link from "next/link";

interface CategoryCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  href: string;
  count?: number;
}

export default function CategoryCard({
  title,
  description,
  icon,
  href,
  count,
}: CategoryCardProps) {
  return (
    <Link
      href={href}
      className="group bg-white rounded-lg p-8 shadow-sm hover:shadow-lg border border-gray-100 transition-all duration-300 hover:-translate-y-1"
    >
      <div className="text-accent mb-4 group-hover:scale-110 transition-transform duration-300">
        {icon}
      </div>
      <h3 className="font-heading text-xl font-bold text-primary mb-2">
        {title}
      </h3>
      <p className="font-body text-foreground/60 text-sm leading-relaxed mb-4">
        {description}
      </p>
      {count !== undefined && (
        <p className="font-body text-accent font-semibold text-sm">
          {count} properties &rarr;
        </p>
      )}
    </Link>
  );
}
