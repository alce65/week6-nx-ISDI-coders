import { Footer } from "./footer";
import layout from "./layout.module.css";

export function Layout({ children }) {
  return (
    <div className={layout.container}>
      <div>{children}</div>
      <Footer />
    </div>
  );
}
