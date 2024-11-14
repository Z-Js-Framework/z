export function useRef<T = HTMLElement>(initialValue: T | null = null) {
  return { current: initialValue };
}
