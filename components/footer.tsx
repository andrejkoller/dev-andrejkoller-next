import Link from "next/link";
import { footerLinksConfig } from "@/configs/footer-links-config";

export const Footer = () => {
  return (
    <footer className="w-full border-t border-border h-(--footer-height) fade-in delay-8">
      <div className="max-w-2xl w-full mx-auto px-4 h-full flex flex-col justify-center items-center gap-12 min-[425px]:flex-row min-[425px]:gap-0 min-[425px]:justify-between max-[425px]:items-start">
        {/* Left side: Links */}
        <div className="flex space-x-8">
          {footerLinksConfig.map((link) => (
            <Link
              key={link.key}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Right side: Copyright */}
        <p>&copy; {new Date().getFullYear()}</p>
      </div>
    </footer>
  );
};
