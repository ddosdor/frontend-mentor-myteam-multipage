import { useBreakpoints } from '@vueuse/core';

/**
 * Wrapper to useBreakpoints function from '@vueuse/core' with declared breakpoints
 *
 * @returns ReturnType<typeof useBreakpoints>
 */
export function useScreenBreakpoints(): ReturnType<typeof useBreakpoints> {
  return useBreakpoints({
    md: '768px',
    lg: '1280px',
  });
}
