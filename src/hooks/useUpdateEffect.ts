import { DependencyList, EffectCallback, useEffect, useRef } from 'react';

export function useUpdateEffect(
  effect: EffectCallback,
  deps?: DependencyList,
): void {
  const didMount = useRef(false);

  useEffect(() => {
    if (!didMount.current) {
      didMount.current = true;
    } else {
      return effect();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
}
