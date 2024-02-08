import "@testing-library/jest-dom"
import { render, screen } from "@testing-library/react"
import { expect, test } from "vitest"
import Footer from "../../components/layout/footer"

test("renders header", () => {
  render(<Footer />)
  expect(
    screen.getByText(
      "© 2024 JikanUI is an educational project by Adam Mehdaoui",
    ),
  ).toBeInTheDocument()
})
