import { Section, Column, Container, Image, Media, Title, Content } from "rbx";
import ReactPlayer from "react-player";
import { reactPlayer} from './video.module.css';

const VideoSection = () => {
  return (
    <Section backgroundColor="light">
      <Container>
        <Column.Group vcentered>
          <Column>
            <Column.Group centered>
              <Column textAlign="centered" size="two-thirds">
                <Title>Lorem ipsum dolor</Title>
                <Content>
                  Etiam aliquet risus ultricies, viverra mi et, molestie dui.
                  Donec sit amet arcu ut neque ultrices euismod. Etiam vitae
                  vulputate sem. Mauris venenatis mauris in ex aliquet, vel
                  malesuada ipsum sollicitudin. Donec eu aliquam ligula, vel
                  vulputate enim. Donec eleifend tellus eu neque pulvinar, sit
                  amet auctor sem consequat.
                </Content>
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
              </Column>
            </Column.Group>
          </Column>
          <Column>
            <Image.Container size="16by9">
              <ReactPlayer
                className={reactPlayer}
                url="https://www.youtube.com/watch?v=aqz-KE-bpKQ"
                width="100%"
                height="100%"
              />
            </Image.Container>
          </Column>
        </Column.Group>
      </Container>
    </Section>
  );
};

export default VideoSection;
