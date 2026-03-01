import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="w-full border-t border-(--border) h-50 fade-in delay-9">
      <div className="max-w-175 w-full mx-auto px-4 h-full flex flex-col justify-center items-center gap-12 min-[425px]:flex-row min-[425px]:gap-0 min-[425px]:justify-between max-[425px]:items-start">
        <div className="flex space-x-8">
          <Link
            className="hover:text-(--hover-foreground)"
            href="https://x.com/andrejkoller"
            target="_blank"
            rel="noopener noreferrer"
          >
            𝕏
          </Link>
          <Link
            className="hover:text-(--hover-foreground)"
            href="https://dribbble.com/andrejkoller"
            target="_blank"
            rel="noopener noreferrer"
          >
            Dribbble
          </Link>
          <Link
            className="hover:text-(--hover-foreground)"
            href="https://github.com/andrejkoller"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </Link>
          <Link
            className="hover:text-(--hover-foreground)"
            href="https://www.linkedin.com/in/andrejkoller"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </Link>
        </div>
        <div className="text-[#666]">&copy; {new Date().getFullYear()}</div>
      </div>
    </footer>
  );
};
