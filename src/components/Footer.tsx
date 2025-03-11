const Footer = () => {
  return (
    <footer className="bg-slate-950 py-8 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <p className="text-sm text-slate-200">
          © {new Date().getFullYear()} HNG 12 Internship Memo. All rights
          reserved.
        </p>
        <p className="text-xs text-slate-200 mt-2">
          Built with <span className="text-red-500">♡</span> using React,
          TypeScript, Tailwind CSS, and Shadcn/ui.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
