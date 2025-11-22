
import Link from 'next/link';
import { useRouter } from 'next/router';

interface BreadcrumbItem {
  label: string;
  href: string;
}

interface BreadcrumbProps {
  items?: BreadcrumbItem[];
}

export const Breadcrumb = ({ items = [] }: BreadcrumbProps) => {
  if (items.length === 0) return null;

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.label,
      item: `https://devsecit.com${item.href}`
    }))
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-6" aria-label="Breadcrumb">
        <ol className="flex flex-wrap gap-2 text-sm">
          <li>
            <Link href="/" className="dark:text-gray-400 light:text-gray-600 hover:text-primary-400 transition-colors">
              Home
            </Link>
          </li>
          {items.map((item, index) => (
            <li key={index} className="flex items-center gap-2">
              <span className="dark:text-gray-400 light:text-gray-600">/</span>
              {index === items.length - 1 ? (
                <span className="dark:text-gray-300 light:text-gray-700 font-semibold">{item.label}</span>
              ) : (
                <Link href={item.href} className="dark:text-gray-400 light:text-gray-600 hover:text-primary-400 transition-colors">
                  {item.label}
                </Link>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </>
  );
};
