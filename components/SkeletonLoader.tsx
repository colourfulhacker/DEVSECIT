export const SkeletonLoader = ({ width = 'w-full', height = 'h-4' }: { width?: string; height?: string }) => (
  <div className={`${width} ${height} bg-gradient-to-r dark:from-dark-700 dark:to-dark-600 light:from-gray-300 light:to-gray-200 rounded animate-shimmer`} />
);

export const CardSkeleton = () => (
  <div className="dark:bg-dark-800 light:bg-gray-100 rounded-lg p-6 space-y-4">
    <SkeletonLoader height="h-6" width="w-3/4" />
    <SkeletonLoader height="h-4" width="w-full" />
    <SkeletonLoader height="h-4" width="w-5/6" />
    <div className="flex gap-4">
      <SkeletonLoader height="h-10" width="w-1/2" />
      <SkeletonLoader height="h-10" width="w-1/2" />
    </div>
  </div>
);

export const TextSkeleton = ({ lines = 3 }: { lines?: number }) => (
  <div className="space-y-3">
    {Array.from({ length: lines }).map((_, i) => (
      <SkeletonLoader key={i} height="h-4" width={i === lines - 1 ? 'w-3/4' : 'w-full'} />
    ))}
  </div>
);
