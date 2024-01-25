import React from 'react';

const Partners = () => {
  return (
    <>
      <section className="bg-white py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">Our Partners</h2>

          <div className="flex flex-wrap justify-center items-center">
            {/* Partner 1 */}
            <div className="partner-item mx-4 mb-8">
              <img
                src="https://placehold.it/150x80" // Replace with the actual logo or image of the partner
                alt="Partner Logo 1"
                className="mx-auto"
              />
              <p className="text-gray-700 mt-4">Leading provider of innovative solutions</p>
            </div>

            {/* Partner 2 */}
            <div className="partner-item mx-4 mb-8">
              <img
                src="https://placehold.it/150x80" // Replace with the actual logo or image of the partner
                alt="Partner Logo 2"
                className="mx-auto"
              />
              <p className="text-gray-700 mt-4">Strategic collaboration for business success</p>
            </div>

            {/* Partner 3 */}
            <div className="partner-item mx-4 mb-8">
              <img
                src="https://placehold.it/150x80" // Replace with the actual logo or image of the partner
                alt="Partner Logo 3"
                className="mx-auto"
              />
              <p className="text-gray-700 mt-4">Innovative solutions for a competitive edge</p>
            </div>

            {/* Add more partners as needed */}
          </div>
        </div>
      </section>
    </>
  );
};

export default Partners;
