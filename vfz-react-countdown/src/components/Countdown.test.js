
import React from "react";
import { render, screen } from "@testing-library/react";
import Countdown from "./Countdown";



//test block
test("title text video days", () => {
// render the component on virtual dom
render(<Countdown />);

const title = screen.getByTestId("title");
expect(title).toHaveTextContent("Countdown to Launch!!");

const text = screen.getByTestId("text");
expect(text).toHaveTextContent("Are you ready?");

const video = screen.getByTestId("video");
expect(video).toBeInTheDocument("video");

const days = screen.getByTestId("days");
expect(days).toBeVisible();


});


