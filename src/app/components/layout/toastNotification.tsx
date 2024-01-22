"use client"

import React, { useState, useEffect } from "react"

export default function ToastNotification({ type }: { type: "alert" | "success" }) {
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false)
    }, 5000)

    return () => {
      clearTimeout(timer)
    }
  }, [])

  return (
    <div className={`flex justify-end w-full fixed top-0 right-0 transition-transform duration-500 transform ${visible ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"}`}>
      <div className={`flex border rounded-md shadow-xl mt-4 mr-4 px-8 py-4 ${type === "alert" ? "border-red-500 bg-red-100 text-red-800" : "border-green-500 bg-green-100 text-green-800"}`}>
        <div className="mr-4 p-1">
          {type === "alert" ? (
            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 11.793a1 1 0 1 1-1.414 1.414L10 11.414l-2.293 2.293a1 1 0 0 1-1.414-1.414L8.586 10 6.293 7.707a1 1 0 0 1 1.414-1.414L10 8.586l2.293-2.293a1 1 0 0 1 1.414 1.414L11.414 10l2.293 2.293Z"/>
            </svg>
          ) : (
            // Icon for success type
            <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M0 11l2-2 5 5L18 3l2 2L7 18z" />
            </svg>
          )}
        </div>
        <div className="mr-2">
          {type === "alert" ? "Error fetching data." : "Data fetched successfully."}
        </div>
      </div>
    </div>
  )
}
