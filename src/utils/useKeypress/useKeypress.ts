import { useEffect, useRef } from "react";

type KeypressHandler = (event: KeyboardEvent) => any;

export default function useKeypress(
  keys: string[] | string,
  handler: KeypressHandler
) {
  const eventListenerRef = useRef<KeypressHandler>();

  useEffect(() => {
    eventListenerRef.current = (event: KeyboardEvent) => {
      if (Array.isArray(keys) ? keys.includes(event.key) : keys === event.key) {
        handler?.(event);
      }
    };
  }, [handler, keys]);

  useEffect(() => {
    const eventListener = (event: KeyboardEvent) => {
      eventListenerRef.current?.(event);
    };

    window.addEventListener("keydown", eventListener);

    return () => {
      window.removeEventListener("keydown", eventListener);
    };
  }, []);
}
