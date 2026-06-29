export default function Footer() {
  return (
    <footer className="border-t border-[#e5e5e5] py-8 mt-24">
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        <span className="text-xs tracking-widest uppercase text-[#aaa]">
          © {new Date().getFullYear()} Vishnu Nambiar
        </span>
        <span className="text-xs tracking-widest uppercase text-[#aaa]">
          Street & Travel Photography
        </span>
      </div>
    </footer>
  );
}
