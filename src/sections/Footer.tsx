import Logo from '@/assets/logo.svg';
import XSocial from '@/assets/social-x.svg';
import InstaSocial from '@/assets/social-instagram.svg';
import YTSocial from '@/assets/social-youtube.svg';

export const Footer = () => {
  return (
    <footer className="py-5 border-t border-white/15">
      <div className="container">
        <div className="flex lg:flex-1 flex-col gap-8 lg:flex-row justify-between">
          <div className="flex gap-2 items-center">
            <Logo className="w-6 h-6" />
            <div>Created by Pioter™ 2025</div>
          </div>
          <nav className="flex flex-col lg:flex-row gap-5 lg:gap-8">
            <a
              href="#"
              className="text-white/70 hover:text-white text-xs md:text-sm transition"
            >
              Features
            </a>
            <a
              href="#"
              className="text-white/70 hover:text-white text-xs md:text-sm transition"
            >
              Developers
            </a>
            <a
              href="#"
              className="text-white/70 hover:text-white text-xs md:text-sm transition"
            >
              Company
            </a>
            <a
              href="#"
              className="text-white/70 hover:text-white text-xs md:text-sm transition"
            >
              Blog
            </a>
            <a
              href="#"
              className="text-white/70 hover:text-white text-xs md:text-sm transition"
            >
              Changelog
            </a>
          </nav>
          <div className="flex gap-5">
            <XSocial className="text-white/40 hover:text-white transition cursor-pointer" />
            <InstaSocial className="text-white/40 hover:text-white transition cursor-pointer" />
            <YTSocial className="text-white/40 hover:text-white transition cursor-pointer" />
          </div>
        </div>
      </div>
    </footer>
  );
};
