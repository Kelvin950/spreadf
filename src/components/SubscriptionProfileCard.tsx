

export default function SubscriptionProfileCard() {
  return (
    <div className="max-w-md mx-auto bg-gray-900 rounded-2xl overflow-hidden shadow-lg">
      {/* Header with Profile Info and Background Image */}
      <div className="relative h-48 bg-gradient-to-br from-gray-700 to-gray-800">
        {/* Background Image */}
        <img 
          src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
          alt="Profile background" 
          className="absolute inset-0 w-full h-full object-cover opacity-80"
        />
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-30"></div>
        
        {/* Profile Info */}
        <div className="relative z-10 p-4">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center">
              <span className="text-gray-900 font-semibold text-sm">YG</span>
            </div>
            <div>
              <h3 className="font-semibold text-white">YogawithkyaaGH</h3>
              <p className="text-gray-200 text-sm">@yogawithkyaa</p>
            </div>
          </div>
        </div>
      </div>

      {/* Subscription Info Section */}
      <div className="bg-gray-200 p-4">
        <div className="grid grid-cols-3 gap-4">
          <div className="text-center">
            <p className="text-gray-800 text-sm font-medium">Expires in 24 days</p>
          </div>
          <div className="text-center border-l border-gray-400 pl-4">
            <p className="text-gray-800 text-sm font-medium">Sub info/stats</p>
          </div>
          <div className="text-center border-l border-gray-400 pl-4">
            <p className="text-gray-800 text-sm font-medium">Sub info/stats</p>
          </div>
        </div>
      </div>
    </div>
  );
}