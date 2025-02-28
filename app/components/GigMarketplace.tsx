"use client"

import React from "react"
import Image from "next/image"
import { cva } from "class-variance-authority"
import { clsx } from "clsx"
import { twMerge } from "tailwind-merge"

// Utility function
function cn(...inputs) {
  return twMerge(clsx(inputs))
}

// Button component
const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-primary hover:bg-primary/90",
        outline: "border border-input bg-transparent hover:bg-accent",
      },
      size: {
        default: "h-8 px-3 py-1",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
)

function Button({ className, variant, size, ...props }) {
  return <button className={cn(buttonVariants({ variant, size, className }))} {...props} />
}

// Star icon component
function StarIcon(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="currentColor"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  )
}

// Bookmark icon component
function BookmarkIcon(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z" />
    </svg>
  )
}

// File text icon component
function FileTextIcon(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
      <polyline points="14 2 14 8 20 8" />
      <line x1="16" x2="8" y1="13" y2="13" />
      <line x1="16" x2="8" y1="17" y2="17" />
      <line x1="10" x2="8" y1="9" y2="9" />
    </svg>
  )
}

// Main component
export default function GigMarketplace() {
  const [activeTab, setActiveTab] = React.useState("gigs")

  return (
    <div className="min-h-screen bg-[#1A1A1F] text-white">
      <style jsx global>{`
        body {
          margin: 0;
          padding: 0;
          background-color: #1A1A1F;
          color: white;
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
        }
      `}</style>

      <div className="container mx-auto px-4 py-6 max-w-[762px] max-h-[434px] bg-[#272932] p-4 rounded-xl">
        {/* Header with tabs and create button */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex">
            <button
              onClick={() => setActiveTab("posts")}
              className={`px-3 py-1 flex items-center gap-2 border-b-2 ${activeTab === "posts" ? "text-white border-transparent" : "text-gray-400 border-transparent"}`}
            >
              <FileTextIcon width={20} height={20} />
              POSTS
            </button>
            <button
              onClick={() => setActiveTab("gigs")}
              className={`px-3 py-1 flex items-center gap-2 border-b-2 ${activeTab === "gigs" ? "text-purple-400 border-purple-400" : "text-gray-400 border-transparent"}`}
            >
              <BookmarkIcon width={20} height={20} />
              GIGS
            </button>
          </div>
          <Button
            variant="outline"
            className="bg-transparent hover:bg-purple-900 text-purple-400 border border-purple-500 rounded-md"
          >
            Create Gig
          </Button>
        </div>

        {/* Gig Card */}
        <div className="bg-[#25252D] rounded-xl overflow-hidden mb-6">
          <div className="flex flex-col md:flex-row">
            {/* Gig Image */}
            <div className="md:w-1/3">
              <Image
                src="/imgs/minectraft.png"
                alt="Minecraft"
                width={250}
                height={150}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Gig Details */}
            <div className="p-4 md:w-2/3 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <div className="bg-green-500 w-3 h-3 rounded-sm"></div>
                  <h2 className="text-lg font-semibold">Minecraft</h2>
                  <div className="flex items-center text-yellow-400 ml-2">
                    <StarIcon className="fill-yellow-400 stroke-yellow-400 w-3 h-3" />
                    <span className="ml-1">4.9</span>
                    <span className="text-gray-400 text-sm ml-1">(25)</span>
                  </div>
                </div>
                <p className="text-gray-400 text-xs mb-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidi dunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
                </p>
              </div>

              <div className="flex items-center justify-between mt-4">
                <div className="text-gray-400">
                  Starting at <span className="text-white">$20</span>
                </div>
                <Button className="bg-purple-600 hover:bg-purple-700 text-white rounded-md">Order</Button>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="mb-6">
          <div className="flex items-center mb-4">
            <h3 className="text-gray-400 mr-2">View count</h3>
            <div className="flex items-center text-yellow-400">
              <StarIcon className="fill-yellow-400 stroke-yellow-400 w-3 h-3" />
              <span className="ml-1">4.9</span>
              <span className="text-gray-400 text-sm ml-1">(25)</span>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[{ title: "Response time", rating: "5.0" }, { title: "Friendliness", rating: "4.9" }, { title: "Performance", rating: "4.9" }, { title: "Satisfaction", rating: "4.9" }].map((stat, index) => (
              <div key={index} className="bg-[#25252D] p-3 rounded-lg">
                <h4 className="text-gray-400 text-xs mb-2">{stat.title}</h4>
                <div className="flex items-center">
                  <div className="flex gap-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <StarIcon key={star} className="w-3 h-3 fill-yellow-400 stroke-yellow-400" />
                    ))}
                  </div>
                  <span className="ml-2">{stat.rating}</span>
                </div>
              </div>
            ))}
                  </div>
                  {/* User Profile Section */}
        <div className="bg-[#25252D] p-3 rounded-lg flex items-start gap-3">
          <div className="w-8 h-8 rounded-full bg-purple-700 flex items-center justify-center text-white font-semibold">
            M
          </div>
          <div className="flex-1">
            <div className="flex items-center gap-2">
              <h3 className="font-semibold text-sm">mel891</h3>
              <div className="flex items-center text-yellow-400">
                <StarIcon className="fill-yellow-400 stroke-yellow-400 w-3 h-3" />
                <span className="ml-1">4.9</span>
              </div>
            </div>
            <p className="text-gray-400 text-xs mt-1">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidi dunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
            </p>
          </div>
        </div>
        </div>
      </div>
    </div>
  )
}
