import React from "react";
import Card from "./components/card";

const App: React.FC = () => (
  <Card.Section>
    <Card>
      <Card.Pane>
        <Card.Title>
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

export default App;
