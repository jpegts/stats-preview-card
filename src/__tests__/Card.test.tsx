import React from "react";
import { render } from "@testing-library/react";
import Card from "../components/card";

describe("<Card />", () => {
  it("renders <Card/> with populated data", () => {
    const { container, getByText, getByTestId } = render(
      <Card.Section>
        <Card>
          <Card.Pane>
            <Card.Title data-testid='title-test'>
              Get <span>insights</span> that help your business grow.
            </Card.Title>
            <Card.Description>
              Discover the benefits of data analytics and make better decisions
              regarding revenue, customer experience, and overall efficiency.
            </Card.Description>
            <Card.Group>
              <Card.Item>
                <Card.Stat>10k+</Card.Stat>
                <Card.Meta>companies</Card.Meta>
              </Card.Item>
              <Card.Item>
                <Card.Stat>314</Card.Stat>
                <Card.Meta>templates</Card.Meta>
              </Card.Item>
              <Card.Item>
                <Card.Stat>12M+</Card.Stat>
                <Card.Meta>queries</Card.Meta>
              </Card.Item>
            </Card.Group>
          </Card.Pane>
          <Card.Pane>
            <Card.Picture />
          </Card.Pane>
        </Card>
      </Card.Section>
    );

    expect(
      getByText(
        "Discover the benefits of data analytics and make better decisions regarding revenue, customer experience, and overall efficiency."
      )
    ).toBeTruthy();
    expect(getByTestId("title-test")).toBeTruthy();
    expect(getByText("10k+")).toBeTruthy();
    expect(getByText("companies")).toBeTruthy();
    expect(getByText("314")).toBeTruthy();
    expect(getByText("templates")).toBeTruthy();
    expect(getByText("12M+")).toBeTruthy();
    expect(getByText("queries")).toBeTruthy();
    expect(container.firstChild).toMatchSnapshot();
  });
});
