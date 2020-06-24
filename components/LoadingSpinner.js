import React from "react";
import { Button, Section } from "rbx";

const LoadingSpinner = ({ color }) => {
  return (
    <Section>
      <Button.Group align="centered">
        <Button color={color} rounded size="large" state="loading" />
      </Button.Group>
    </Section>
  );
};

export default LoadingSpinner;
