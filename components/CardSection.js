import React from "react";
import {
  Section,
  Container,
  Column,
  Card,
  Image,
  Content,
} from "rbx";

const CardSection = ({ offset = 700 }) => {
  return (
    <Section backgroundColor="light">
      <Container>
        <Column.Group>
          {[1, 2, 3, 4].map((i) => (
            <Column key={i}>
              <Card>
                <Card.Image>
                  <Image.Container size="4by3">
                    <Image
                      src={`https://picsum.photos/id/${offset + i}/1280/960`}
                    />
                  </Image.Container>
                </Card.Image>
                <Card.Content>
                  <Content>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Phasellus nec iaculis mauris.{" "}
                    <a href="#@bulmaio">@bulmaio</a>. <a href="#css">#css</a>{" "}
                    <a href="#responsive">#responsive</a>
                    <br />
                    <time dateTime="2016-1-1">11:09 PM - 1 Jan 2016</time>
                  </Content>
                </Card.Content>
              </Card>
            </Column>
          ))}
        </Column.Group>
      </Container>
    </Section>
  );
};

export default CardSection;