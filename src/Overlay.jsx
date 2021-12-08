import { gsap } from "gsap";
import { useEffect, useRef } from "react";
import "./styles.css";

export default function Overlay() {
  const container = useRef();
  const q = gsap.utils.selector(container);
  useEffect(() => {
    gsap
      .to(q(".ac__title"), {
        x: 1000,
        stagger: 0.33,
        repeat: 0,
        repeatDelay: 1,
        yoyo: true,
      })
      .delay(1);
  });
  return (
    <div className="ac__container" ref={container}>
      <div>
        <h1 className="ac__heading ac__title">
          Alexander
          <br />
          Cannon
        </h1>
        <h2 className="ac__title">Web Developer Person</h2>
      </div>
      <div>
        <h3 className="ac__title">
          If you'd like your website to do this sort of carry on, get in touch
        </h3>
      </div>
      <div>
        <p>Thing</p>
        <p>Thing</p>
        <p>Thing</p>
        <p>Thing</p>
        <p>Thing</p>
        <p>Thing</p>
        <p>Thing</p>
        <p>Thing</p>
        <p>Thing</p>
        <p>Thing</p>
        <p>Thing</p>
        <p>Thing</p>
      </div>
      <div>
        <div />
        <div />
        <div />
      </div>
      <div>
        <p></p>
      </div>
    </div>
  );
}
