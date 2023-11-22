import React from "react"

export interface ButtonProps {
  label: string
}

const Button = ({ label }: ButtonProps) => {
  return <button className="joon-button">{label}</button>
}

export default Button
