import {
  Footer,
  Container,
  Level,
  Content,
  Button,
  Generic,
  Icon,
} from "rbx";
import { FaYoutube, FaDiscord, FaStackOverflow } from "react-icons/fa";
import Link from "next/link";

const FooterSection = () => {
  return (
    <Footer>
      <Container>
        <Level>
          <Level.Item align="left">
            <Level.Item>
              <Content>
                <h3>Lazy Section Demo</h3>
                <br />
                Assets soucred from{" "}
                <a
                  href="https://picsum.photos/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Picsum Photos
                </a>
                ,{" "}
                <a
                  href="https://undraw.co/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Undraw Illustrations
                </a>
                , and{" "}
                <a
                  href="https://www.blender.org/institute/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  The Blender Institue
                </a>
                .
              </Content>
            </Level.Item>
          </Level.Item>
          <Level.Item align="right">
            <Level.Item>
              <div>
                <Button.Group align="right">
                  <Button
                    as="a"
                    text
                    size="large"
                    href="https://youtube.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Icon size="large">
                      <FaYoutube />
                    </Icon>
                  </Button>
                  <Button
                    as="a"
                    text
                    size="large"
                    href="https://discordapp.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Icon size="large">
                      <FaDiscord />
                    </Icon>
                  </Button>
                  <Button
                    as="a"
                    text
                    size="large"
                    href="https://stackoverflow.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Icon size="large">
                      <FaStackOverflow />
                    </Icon>
                  </Button>
                </Button.Group>

                <Level>
                  <Level.Item>
                    <Link href="/">
                      <Generic as="a">Baseline</Generic>
                    </Link>
                  </Level.Item>
                  <Level.Item>
                    <Link href="/dynamic">
                      <Generic as="a">Dynamic</Generic>
                    </Link>
                  </Level.Item>
                  <Level.Item>
                    <Link href="/observe">
                      <Generic as="a">Observe</Generic>
                    </Link>
                  </Level.Item>
                  <Level.Item>
                    <Link href="/dynamic-observe">
                      <Generic as="a">Dynamic + Observe</Generic>
                    </Link>
                  </Level.Item>
                </Level>
              </div>
            </Level.Item>
          </Level.Item>
        </Level>
      </Container>
    </Footer>
  );
};

export default FooterSection;
