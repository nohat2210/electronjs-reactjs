import { Suspense, lazy, ComponentType, ReactNode } from "react";
import Loading from "../components/Loading";

interface LoadableOptions {
  fallback?: ReactNode;
}

function loadable(
  importFunc: () => Promise<{ default: ComponentType }>,
  { fallback }: LoadableOptions = { fallback: <Loading /> }
) {
  const LazyComponent = lazy(importFunc);
  return () => (
    <Suspense fallback={fallback}>
      <LazyComponent />
    </Suspense>
  );
}

export default loadable;
