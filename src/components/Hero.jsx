const Hero = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-teal-500 to-teal-400 text-white">
      <div className="max-w-4xl mx-auto text-center border-4 border-white rounded-lg shadow-lg p-8">
        <h2 className="text-4xl font-extrabold mb-4">
          Hi, I’m Aviv Natan <span className="wave">👋</span>
        </h2>
        <p className="text-xl leading-relaxed max-w-3xl mx-auto">
          I'm a passionate software developer driven by curiosity and creativity.
          <br />
          Coding, to me, is more than logic and syntax — it's a form of expression, a way to build, create, and make a
          <span className="font-semibold text-yellow-300"> difference.</span>
          <br />
          I'm deeply excited about technology and constantly eager to learn and explore new tools and frameworks.
          <br />
          My goal is to work on what I truly love, and use my code to create meaningful solutions that have real impact.
        </p>
      </div>
    </section>
  );
};

export default Hero;