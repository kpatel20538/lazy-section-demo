import { Section, Column, Container, Image, Title, Content } from "rbx";

const TextColumn = () => (
  <Column textAlign="centered" size="three-fifths">
    <Title>Lorem ipsum dolor</Title>
    <Content>
      Etiam aliquet risus ultricies, viverra mi et, molestie dui. Donec sit amet
      arcu ut neque ultrices euismod. Etiam vitae vulputate sem. Mauris
      venenatis mauris in ex aliquet, vel malesuada ipsum sollicitudin. Donec eu
      aliquam ligula, vel vulputate enim. Donec eleifend tellus eu neque
      pulvinar, sit amet auctor sem consequat.
    </Content>
  </Column>
);

const ImageColumn = ({ src }) => (
  <Column size="two-fifths">
    <Image.Container size="4by3">
      <Image src={src} />
    </Image.Container>
  </Column>
);


const BasicSection = ({ alternate, src }) => {
  return (
    <Section>
      <Container>
        <Column.Group centered>
          <Column size="three-quarters">
            <Column.Group>
              {alternate ? (
                <>
                  <ImageColumn src={src} />
                  <TextColumn />
                </>
              ) : (
                <>
                  <TextColumn />
                  <ImageColumn src={src} />
                </>
              )}
            </Column.Group>
          </Column>
        </Column.Group>
      </Container>
    </Section>
  );
};

export default BasicSection;
