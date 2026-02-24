export default function Home() {
  return (
    <>
      <section className="mb-12 fade-in delay-1">
        <p className="mb-4 text-[#666]">
          <span className="text-white">Andrej Koller</span> is a designer and
          frontend engineer from Ekibastuz, Kazakhstan.
        </p>
        <p className="mb-8 text-[#666]">Based in Passau, Germany.</p>
      </section>
      <section className="mb-8 fade-in delay-4">
        <h2 className="text-sm font-bold mb-4">Featured</h2>
        <p>
          <span className="text-[#666]">2026</span>
          <span className="text-[#666] mx-2">—</span>
          <span>Athanasa</span>
        </p>
      </section>
      <hr className="border-t border-[#333] my-12"></hr>
      <div>
        <h3 className="text-sm font-bold mb-8">Product</h3>
        <div className="mb-24">
          <p className="mb-4">
            <span className="text-[#666]">2026</span>
            <span className="text-[#666] mx-2">—</span>
            <span>Sophia.js</span>
          </p>
        </div>
        <div className="mb-24">
          <p className="mb-4">
            <span className="text-[#666]">2026</span>
            <span className="text-[#666] mx-2">—</span>
            <span>Charts</span>
          </p>
        </div>
        <div className="mb-24">
          <p className="mb-4">
            <span className="text-[#666]">2026</span>
            <span className="text-[#666] mx-2">—</span>
            <span>Elegant Icons</span>
          </p>
        </div>
        <div className="mb-24">
          <p className="mb-4">
            <span className="text-[#666]">2025</span>
            <span className="text-[#666] mx-2">—</span>
            <span>Omelia UI</span>
          </p>
        </div>
      </div>
      <div>
        <h3 className="text-sm font-bold mb-8">Branding</h3>
        <div className="mb-24">
          <p className="mb-4">
            <span className="text-[#666]">2027</span>
            <span className="text-[#666] mx-2">—</span>
            <span>Font</span>
          </p>
        </div>
        <div className="mb-24">
          <p className="mb-4">
            <span className="text-[#666]">2026</span>
            <span className="text-[#666] mx-2">—</span>
            <span>Pretty Swing</span>
          </p>
        </div>
        <div className="mb-24">
          <p className="mb-4">
            <span className="text-[#666]">2023</span>
            <span className="text-[#666] mx-2">—</span>
            <span>Fading Hell</span>
          </p>
        </div>
      </div>
      <section className="mb-12 fade-in delay-6">
        <h2 className="text-sm font-bold mb-4">Ongoing Projects</h2>
        <p className="mb-4 text-[#666]">
          Builds ongoing projects spanning music, products, and open source,
          with an emphasis on tools for designers and developers.
        </p>
        <ul className="space-y-2 mb-12">
          <li>
            <a
              className="hover:text-gray-300"
              href="https://linktr.ee/athanasa"
              target="_blank"
            >
              Athanasa
            </a>
          </li>
          <li>
            <a
              className="hover:text-gray-300"
              href="https://linktr.ee/fadinghell"
              target="_blank"
            >
              Fading Hell
            </a>
          </li>
          <li>
            <a
              className="hover:text-gray-300"
              href="https://linktr.ee/prettyswing"
              target="_blank"
            >
              Pretty Swing
            </a>
          </li>
        </ul>
      </section>
    </>
  );
}
