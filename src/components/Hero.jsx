import '../assets/css/Hero.css';

const Hero = () => {
  return (

    <>
   


{/* <header className="bg-gradient-to-r from-purple-400 to-blue-500 text-white h-screen flex flex-col justify-center items-center">
      <div className="text-center max-w-lg mx-auto">
        <h1 className="text-6xl font-bold mb-4">Welcome to GoTech</h1>
        <p className="text-lg mb-8">Empowering Businesses with Cutting-edge Technology</p>
        <button className="btn btn-light px-6 py-3 text-blue-500 font-bold text-lg rounded-full">Learn more</button>
      </div>
      <div className="mt-12 flex items-center justify-around">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-2">Our Services</h2>
          <p className="text-gray-300">Innovative Solutions</p>
        </div>
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-2">Why Choose Us</h2>
          <p className="text-gray-300">Expertise & Reliability</p>
        </div>
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-2">Client Success</h2>
          <p className="text-gray-300">Proven Track Record</p>
        </div>
      </div>
    </header> */}



<header
      className="relative bg-cover bg-center h-screen flex flex-col justify-center items-center"
      style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1580894894513-541e068a3e2b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")' }}
    >
      {/* Overlay with semi-transparent color */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      <div className="text-white text-center relative z-10 max-w-lg mx-auto">
        <h1 className="text-6xl font-bold mb-4">Welcome to GoTech</h1>
        <p className="text-lg mb-8">Empowering Businesses with Cutting-edge Technology</p>
        <button className="btn btn-light px-6 py-3 text-blue-500 font-bold text-lg rounded-full">Learn more</button>
      </div>

      <div className="mt-12 flex items-center justify-around relative z-10 ">
        <div className="text-center text-gray-300">
          <h2 className="text-3xl font-bold mb-2">Our Services</h2>
          <p>Innovative Solutions</p>
        </div>
        <div className="text-center text-gray-300">
          <h2 className="text-3xl font-bold mb-2">Why Choose Us</h2>
          <p>Expertise & Reliability</p>
        </div>
        <div className="text-center text-gray-300">
          <h2 className="text-3xl font-bold mb-2">Client Success</h2>
          <p>Proven Track Record</p>
        </div>
      </div>
    </header>
    </>

  );
};

export default Hero;
