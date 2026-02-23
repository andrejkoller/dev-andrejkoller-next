import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="w-full border-t border-[#333] mt-8 h-50 fade-in delay-6">
      <div className="max-w-175 w-full mx-auto px-4 h-full flex justify-between items-center">
        <div className="flex space-x-8">
          <Link
            className="hover:text-gray-300"
            href="https://x.com/andrejkoller"
            target="_blank"
          >
            𝕏
          </Link>
          <Link
            className="hover:text-gray-300"
            href="https://dribbble.com/andrejkoller"
            target="_blank"
          >
            Dribbble
          </Link>
          <Link
            className="hover:text-gray-300"
            href="https://github.com/andrejkoller"
            target="_blank"
          >
            GitHub
          </Link>
          <Link
            className="hover:text-gray-300"
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
