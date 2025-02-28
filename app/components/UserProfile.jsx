import Image from "next/image"

export default function UserProfile() {
  return (
    <div className="max-w-md mx-auto rounded-xl overflow-hidden bg-[#1a1e26] text-white p-6">
      <div className="mb-6">
        <h2 className="text-2xl font-bold tracking-wide">ALTERSKY</h2>
      </div>

      <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
        <div className="flex-shrink-0">
          <div className="w-24 h-24 rounded-full overflow-hidden bg-[#1a1e26] border-2 border-[#f8a01d]">
            <Image
              src="/imgs/altersky.png" // Corrected path
              alt="Profile avatar"
              width={96}
              height={96}
              className="object-cover"
            />
          </div>
        </div>

        <div className="flex items-center gap-4">
          <button className="bg-transparent border border-gray-500 text-white rounded-full px-5 py-2">
            25 followers
          </button>
          <div className="h-10 w-px bg-gray-600"></div>
          <button className="bg-transparent border border-gray-500 text-white rounded-full px-5 py-2">
            14 following
          </button>
        </div>
      </div>

      <div className="mt-8 flex flex-col md:flex-row items-start md:items-center justify-between">
        <div className="text-5xl font-bold mb-4 md:mb-0">12,256</div>

        <div className="flex gap-4">
          <button className="bg-[#6c3ce9] hover:bg-[#5b33c5] text-white font-medium rounded-md px-8 py-2 transition-colors">
            Order
          </button>
          <button className="bg-[#6c3ce9] hover:bg-[#5b33c5] text-white font-medium rounded-md px-8 py-2 transition-colors">
            ProPass
          </button>
        </div>
      </div>
    </div>
  )
}
