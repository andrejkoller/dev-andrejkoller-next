import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="w-full border-t border-(--secondary-border) mt-8 h-50 fade-in delay-6">
      <div className="max-w-175 w-full mx-auto px-4 h-full flex flex-col justify-center gap-4 min-[375px]:flex-row min-[375px]:gap-0 min-[375px]:justify-between items-center">
        <div className="flex space-x-8">
          <Link
            className="hover:text-(--hover-foreground)"
            href="https://x.com/andrejkoller"
            target="_blank"
          >
            𝕏
          </Link>
          <Link
            className="hover:text-(--hover-foreground)"
            href="https://dribbble.com/andrejkoller"
            target="_blank"
          >
            Dribbble
          </Link>
          <Link
            className="hover:text-(--hover-foreground)"
            href="https://github.com/andrejkoller"
            target="_blank"
          >
            GitHub
          </Link>
          <Link
            className="hover:text-(--hover-foreground)"
            href="https://www.linkedin.com/in/andrejkoller"
            target="_blank"
          >
            LinkedIn
          </Link>
        </div>
        <div className="text-[#666]">&copy; {new Date().getFullYear()}</div>
      </div>
    </footer>
  );
};
