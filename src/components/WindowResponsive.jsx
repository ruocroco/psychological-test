import { useWindowSize } from "usehooks-ts";
import { useEffect } from "react";

export function WindowResponsive(props) {
  const { children } = props ?? {};
  const { height } = useWindowSize();

  useEffect(() => {
    if (height) respondWindowHeight(height);
  }, [height]);

  return <>{children}</>;
}

let timer;
// warning: this css-variable must declare on global.css
const STYLE_PROPERTY_DOC_HEIGHT = "--doc-height";
function respondWindowHeight(height) {
  if (timer !== undefined) {
    clearTimeout(timer);
  }
  timer = setTimeout(() => {
    const html = document.documentElement;
    html.style.setProperty(STYLE_PROPERTY_DOC_HEIGHT, `${height}px`);
  }, 200);
}
