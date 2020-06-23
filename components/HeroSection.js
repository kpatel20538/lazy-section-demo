import React from "react";
import { Hero, Container, Title, Button, Navbar } from "rbx";
import Link from "next/link";

const NavbarMenu = () => {
  return (
    <Navbar>
      <Navbar.Brand>
        <Link href="/">
          <Navbar.Item as="a">
            <img
              src="/logo-11.svg"
              alt=""
              role="presentation"
              width="96"
              height="64"
            />
          </Navbar.Item>
        </Link>
        <Navbar.Burger />
      </Navbar.Brand>
      <Navbar.Menu>
        <Navbar.Segment align="start">
          <Link href="/">
            <Navbar.Item as="a">Baseline</Navbar.Item>
          </Link>
          <Link href="/dynamic">
            <Navbar.Item as="a">Dynamic</Navbar.Item>
          </Link>
          <Link href="/observe">
            <Navbar.Item as="a">Observe</Navbar.Item>
          </Link>
          <Link href="/dynamic-observe">
            <Navbar.Item as="a">Dynamic + Observe</Navbar.Item>
          </Link>
        </Navbar.Segment>
      </Navbar.Menu>
    </Navbar>
  );
};

const HeroSection = ({ color = "primary", title, subtitle }) => {
  return (
    <>
      <NavbarMenu />
      <Hero color={color} size="fullheight-with-navbar">
        <Hero.Body>
          <Container textAlign="centered">
            <Title size={1}>{title}</Title>
            <Title subtitle size={3}>
              {subtitle}
            </Title>
            <Button inverted color={color} size="large">
              Call to Action
          </Button>
          </Container>
        </Hero.Body>
      </Hero>
    </>
  );
};

export default HeroSection;
