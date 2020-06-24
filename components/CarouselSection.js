import React from "react";
import { Section, Container, Card, Image, Media, Title, Content } from "rbx";
import SlickSlider from "./SlickSlider";

const SlideCard = ({ id }) => (
  <Card>
    <Card.Image>
      <Image.Container size="4by3">
        <Image src={`https://picsum.photos/id/${id}/1280/960`} />
      </Image.Container>
    </Card.Image>
    <Card.Content>
      <Media>
        <Media.Item as="figure" align="left">
          <Image.Container size={64}>
            <Image
              rounded
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
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec
        iaculis mauris. <a href="#@bulmaio">@bulmaio</a>.{" "}
        <a href="#css">#css</a> <a href="#responsive">#responsive</a>
        <br />
        <time dateTime="2016-1-1">11:09 PM - 1 Jan 2016</time>
      </Content>
    </Card.Content>
  </Card>
);

const CarouselSection = () => {
  return (
    <Section>
      <Container textAlign="centered">
        <Title size={2}>Lorem Ipsum</Title>
        <Title size={4} subtitle>
          Consectetur adipiscing elit.
        </Title>
        <SlickSlider
          autoplay
          autoplaySpeed={5000}
          arrows={false}
          infinite
          pauseOnHover
          speed={500}
          slidesToShow={3}
          slidesToScroll={1}
          responsive={[
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 2,
              },
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 1,
              },
            },
          ]}
        >
          {Array.from({ length: 8 })
            .map((_, i) => i + 500)
            .map((id) => (
              <SlideCard key={id} id={id} />
            ))}
        </SlickSlider>
      </Container>
    </Section>
  );
};

export default CarouselSection;
