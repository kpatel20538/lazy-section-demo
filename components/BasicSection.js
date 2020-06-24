import React from "react";
import { Section, Column, Card, Image, Media, Title, Content } from "rbx";

const BasicSection = ({ offset = 500 }) => {
  return (
    <Section>
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
                <Media>
                  <Media.Item as="figure" align="left">
                    <Image.Container size={64}>
                      <Image
                        alt="64x64"
                        src="https://bulma.io/images/placeholders/128x128.png"
                      />
                    </Image.Container>
                  </Media.Item>
                  <Media.Item>
                    <Title size={4}>John Smith</Title>
                    <Title subtitle size={6}>
                      @johnsmith
                    </Title>
                  </Media.Item>
                </Media>
                <Content>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Phasellus nec iaculis mauris. <a href="#@bulmaio">@bulmaio</a>
                  . <a href="#css">#css</a>{" "}
                  <a href="#responsive">#responsive</a>
                  <br />
                  <time dateTime="2016-1-1">11:09 PM - 1 Jan 2016</time>
                </Content>
              </Card.Content>
            </Card>
          </Column>
        ))}
      </Column.Group>
    </Section>
  );
};

export default BasicSection;
