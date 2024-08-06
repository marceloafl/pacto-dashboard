import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { describe, expect, vi } from "vitest";
import Input from "./Input";

describe("Unit tests for the InputText component", () => {
  beforeEach(() => {
    render(
      <Input id="test-input" placeholder="Enter text" label="Test Label" />,
    );
  });
  it("should render it properly", () => {
    expect(screen.getByLabelText("Test Label")).toBeInTheDocument();
  });

  it("should render it with correct placeholder and label", () => {
    const label = screen.getByLabelText("Test Label");
    const input = screen.getByPlaceholderText("Enter text");

    expect(label).toBeInTheDocument();
    expect(input).toBeInTheDocument();
  });

  it("should render input component with type password", () => {
    render(
      <Input
        id="test-input"
        type="password"
        placeholder="Enter text2"
        label="Test Label"
      />,
    );
    const inputElement = screen.getByPlaceholderText("Enter text2");
    expect(inputElement).toHaveAttribute("type", "password");
  });

  it(" should call onChange handler when value changes", () => {
    const handleChange = vi.fn();
    render(
      <Input
        id="test-input"
        onChange={handleChange}
        placeholder="Enter text3"
      />,
    );
    fireEvent.change(screen.getByPlaceholderText("Enter text3"), {
      target: { value: "new value" },
    });
    expect(handleChange).toHaveBeenCalled();
  });
});
