export default function HeroSection() {
  return (
    <section className="bg-white py-16">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Professional Interpretation & Translation Services
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          Expert language services by Ra'ad Mahmoud Al-Abbo. Simultaneous,
          consecutive interpretation, and professional translation with 15+
          years of experience.
        </p>

        {/* الكرت اللي فيه صورتك */}
        <div className="flex items-center space-x-4 bg-white shadow-lg p-4 rounded-xl justify-center max-w-md mx-auto">
          <img
            src="/images/raadheadphone.jpg"
            alt="Ra'ad Mahmoud Al-Abbo"
            className="w-16 h-16 rounded-full object-cover"
          />
          <div>
            <h3 className="text-md font-bold text-gray-900">
              Ra'ad Mahmoud Al-Abbo
            </h3>
            <p className="text-sm text-gray-600">
              Certified Professional Interpreter
            </p>
            <p className="text-sm text-gray-500">Iraqi ProLingo Network</p>
          </div>
        </div>
      </div>
    </section>
  );
}
