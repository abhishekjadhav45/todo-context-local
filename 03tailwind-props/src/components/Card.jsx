import React from 'react'

const colorMap = {
  blue: "bg-blue-600",
  green: "bg-green-600",
  purple: "bg-purple-600"
}

function Card({ title, description, color }) {
  return (
    <div className={`max-w-sm rounded-xl shadow-lg p-6 m-4 text-white ${colorMap[color]} hover:scale-105 transform transition duration-300`}>
      <h2 className="text-2xl font-bold mb-2">{title}</h2>
      <p className="text-gray-100">{description}</p>
    </div>
  )
}

export default Card
