import { useSpring, animated } from 'react-spring';
import React from 'react';

const Techstack = () => {
  const cardAnimation = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    config: { duration: 1000 },
  });

  return (
    <>
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto text-center max-w-screen-md">
          <h2 className="text-4xl font-bold mb-8">Technologies We Use</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
            {/* Technology 1 */}
            <animated.div style={cardAnimation}>
              <div className="bg-white p-4 rounded-lg shadow-md">
                <i className="fab fa-react text-3xl mb-2"></i>
                <h3 className="text-lg font-bold mb-1">React.js</h3>
                <p className="text-sm text-gray-700">Building interactive user interfaces with React.js.</p>
              </div>
            </animated.div>

            

            {/* Repeat the same structure for other technologies */}
            {/* Technology 2 */}
            <animated.div style={cardAnimation}>
              <div className="bg-white p-4 rounded-lg shadow-md">
                <i className="fab fa-node-js text-3xl mb-2"></i>
                <h3 className="text-lg font-bold mb-1">Node.js</h3>
                <p className="text-sm text-gray-700">Powering server-side applications with the efficiency of Node.js.</p>
              </div>
            </animated.div>

            {/* Technology 3 */}
            <animated.div style={cardAnimation}>
              <div className="bg-white p-4 rounded-lg shadow-md">
                <i className="fab fa-envira text-3xl mb-2"></i>
                <h3 className="text-lg font-bold mb-1">MongoDB</h3>
                <p className="text-sm text-gray-700">Storing and managing data seamlessly with MongoDB.</p>
              </div>
            </animated.div>

            <animated.div style={cardAnimation}>
              <div className="bg-white p-4 rounded-lg shadow-md">
                <i className="fab fa-envira text-3xl mb-2"></i>
                <h3 className="text-lg font-bold mb-1">MongoDB</h3>
                <p className="text-sm text-gray-700">Storing and managing data seamlessly with MongoDB.</p>
              </div>
            </animated.div>

            <animated.div style={cardAnimation}>
              <div className="bg-white p-4 rounded-lg shadow-md">
                <i className="fab fa-envira text-3xl mb-2"></i>
                <h3 className="text-lg font-bold mb-1">MongoDB</h3>
                <p className="text-sm text-gray-700">Storing and managing data seamlessly with MongoDB.</p>
              </div>
            </animated.div>

            {/* Repeat the same structure for other technologies */}
            {/* ... */}
          </div>
        </div>
      </section>
    </>
  );
};

export default Techstack;
