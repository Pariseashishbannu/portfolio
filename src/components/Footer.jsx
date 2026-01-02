const Footer = () => {
    return (
        <footer className="py-8 border-t border-white/5 bg-black/40 backdrop-blur-sm">
            <div className="container mx-auto px-6 text-center">
                <p className="text-gray-500 text-sm">
                    &copy; {new Date().getFullYear()} Parise Ashish. All rights reserved.
                </p>
                <p className="text-gray-600 text-xs mt-2">
                    Built with React, Tailwind CSS & Framer Motion.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
