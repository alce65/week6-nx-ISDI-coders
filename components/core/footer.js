import Image from "next/image";
import footer from "./footer.module.css";

export function Footer() {
  return (
    <footer className={footer.container}>
      <a
        href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
        rel="noopener noreferrer"
      >
        Powered by{" "}
        <span className={footer.logo}>
          <Image
            src="/assets/vercel.svg"
            alt="Vercel Logo"
            width={72}
            height={16}
          />
        </span>
      </a>
    </footer>
  );
}
