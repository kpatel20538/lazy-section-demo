import { Children, useRef, useState } from "react";
import { Button, Icon } from "rbx";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Slider from "react-slick";

import { slick } from "./slick.module.css";
import {
  slickContainer,
  slickSlide,
  nextArrow,
  prevArrow,
  pagingDots,
} from "./styles.module.css";

const NextArrow = ({ onClick }) => {
  return (
    <Button onClick={onClick} color="warning" inverted rounded>
      <Icon>
        <FaArrowRight />
      </Icon>
    </Button>
  );
};

const PrevArrow = ({ onClick }) => {
  return (
    <Button onClick={onClick} color="warning" inverted rounded>
      <Icon>
        <FaArrowLeft />
      </Icon>
    </Button>
  );
};

const PagingDots = ({ active, count, onClick }) => (
  <Button.Group align="centered">
    {Array.from({ length: count }, (_, i) => i).map((idx) => (
      <Button
        key={idx}
        rounded
        color="warning"
        inverted={idx !== active}
        size="small"
        onClick={() => onClick(idx)}
      />
    ))}
  </Button.Group>
);

const SlickSlider = ({ children, ...props }) => {
  const ref = useRef();
  const [active, setActive] = useState(0);

  return (
    <div className={slickContainer}>
      <div className={slick}>
        <Slider
          ref={ref}
          {...props}
          beforeChange={(_, idx) => setActive(idx)}
        >
          {Children.map(children, (child) => (
            <div className={slickSlide}>{child}</div>
          ))}
        </Slider>
      </div>
      <div className={nextArrow}>
        <NextArrow onClick={() => ref.current.slickNext()} />
      </div>
      <div className={prevArrow}>
        <PrevArrow onClick={() => ref.current.slickPrev()} />
      </div>
      <div className={pagingDots}>
        <PagingDots
          active={active}
          count={Children.count(children)}
          onClick={(idx) => ref.current.slickGoTo(idx)}
        />
      </div>
    </div>
  );
};

export default SlickSlider;
