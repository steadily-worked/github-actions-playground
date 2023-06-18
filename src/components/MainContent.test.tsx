import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import React from "react";
import MainContent from "./MainContent";

describe("MainContent", () => {
  it("버튼 있어야함", () => {
    render(<MainContent />);

    expect(screen.getByRole("button")).toBeInTheDocument();
  });

  it("버튼 클릭하면 텍스트들 보여줘야함", async () => {
    render(<MainContent />);

    const button = screen.getByRole("button");
    await userEvent.click(button);
    expect(screen.getByTestId("description-area")).toBeInTheDocument();
  });
});
