const About = () => {
  return (
    <div className="min-h-screen bg-white">
      <div className="pt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-center mb-16">About DeepYield</h1>
          
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
              <p className="text-gray-600 leading-relaxed">
                DeepYield is revolutionizing DeFi by combining artificial intelligence with yield optimization strategies. 
                Our mission is to democratize access to sophisticated trading strategies while ensuring maximum returns for our users.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-semibold mb-4">Our Vision</h2>
              <p className="text-gray-600 leading-relaxed">
                We envision a future where DeFi is accessible to everyone, powered by intelligent systems that optimize yields 
                across multiple chains while minimizing risks through advanced AI algorithms.
              </p>
            </div>
          </div>

          <div className="bg-gray-50 rounded-xl p-8 mb-16">
            <h2 className="text-2xl font-semibold mb-6 text-center">Core Values</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <h3 className="font-semibold mb-2">Innovation</h3>
                <p className="text-gray-600">Pushing the boundaries of what's possible in DeFi through AI integration</p>
              </div>
              <div className="text-center">
                <h3 className="font-semibold mb-2">Security</h3>
                <p className="text-gray-600">Ensuring the safety of user funds through rigorous testing and audits</p>
              </div>
              <div className="text-center">
                <h3 className="font-semibold mb-2">Community</h3>
                <p className="text-gray-600">Building a strong, engaged community of DeFi enthusiasts and innovators</p>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-6 text-center">Our Team</h2>
            <div className="grid md:grid-cols-4 gap-8">
              {[1, 2, 3, 4].map((member) => (
                <div key={member} className="text-center">
                  <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-4"></div>
                  <h3 className="font-semibold">Team Member {member}</h3>
                  <p className="text-gray-600">Position {member}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;