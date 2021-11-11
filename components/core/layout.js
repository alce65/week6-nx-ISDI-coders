import { Footer } from "./footer";
import { Header } from "./header";
import layout from "./layout.module.css";

export function Layout({ children }) {
  return (
    <div className={layout.container}>
      <Header />
      <div>{children}</div>
      <Footer />
    </div>
  );
}
