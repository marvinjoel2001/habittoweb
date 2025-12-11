import { Instagram, Facebook, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="flex flex-col gap-8 px-5 py-16 text-center mt-20 glassmorphism rounded-t-xl animate-fade-in-up">
      <div className="flex flex-wrap items-center justify-center gap-6">
        <a className="inline-block hover:scale-105 transition-transform" data-alt="Download on the App Store button" href="#">
          <img
            alt="App Store download button"
            className="h-12"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuA8a46rmUQd717BXxuIwuOIN4qf6Ve0EEZ6_scfypM9PGJxVsQlLoirq4E15zNiwsQX5WCR_B84eLU4e3dv-tXok0-1Slry5G_GZnRZ04XX2ZNRYRucGQHFW2coZQ-z4qr5DC6YYDNThv3JXf9KqJ9fFd1uYtJiHEEgFg5MouZqvO2nG-ZgxPGICoDWb3lBbUgnjrXDARfGAyuzJLx7EzsdqPZlsScntoT257019QAEtmWkm1NJVu5PPt97vFblo7DpmdzcYMDNmPKR"
          />
        </a>
        <a className="inline-block hover:scale-105 transition-transform" data-alt="Get it on Google Play button" href="#">
          <img
            alt="Google Play download button"
            className="h-12"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuABULPN4Ix3XuTPhLcrw4WH8JXyuLELWrUh4bFpItQT7tZVDHnMVRLdnk6UPC_BYwwUL_1rYwSntQ0GJG8GgoU3MecA-zE-8XP2F5KrlnZpU5IHSucH8K6pFl1Z8JKwRg3SnXbRuvz0Aazfz5IXp0Ul2FX61jplPPmGXKE62tkjx0127xAYwIuftNHzWnlS2HNwh7qjkMhNIxdG1MDmlXH5dYoEBUvbzZFHBkAfya4gvBuuYckS8mOLBxB1d-wDeY010MLFlcWtVLBz"
          />
        </a>
      </div>
      <div className="flex justify-center gap-6">
        <a className="text-gray-400 hover:text-white transition hover:scale-110" href="#">
          <Instagram size={24} />
        </a>
        <a className="text-gray-400 hover:text-white transition hover:scale-110" href="#">
          <Facebook size={24} />
        </a>
        <a className="text-gray-400 hover:text-white transition hover:scale-110" href="#">
          <Linkedin size={24} />
        </a>
      </div>
      <p className="text-gray-400 text-sm font-normal">© 2024 Habitto. Todos los derechos reservados.</p>
    </footer>
  );
}
