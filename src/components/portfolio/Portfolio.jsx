import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: "Award Winning Website",
    img: "https://colorlib.com/wp/wp-content/uploads/sites/2/accounting-website-design.jpg",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum optio cupiditate",
  },
  {
    id: 2,
    title: "Brand Building Website",
    img: "https://fiverr-res.cloudinary.com/images/q_auto,f_auto/gigs3/313305952/original/7ac62fdfc75dfadcfffcd55ec5ffd023238b7a6e/build-a-fully-functional-website-with-api-integeration.jpg",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum optio cupiditate",
  },
  {
    id: 3,
    title: "Business Suggestion Website",
    img: "https://149842033.v2.pressablecdn.com/wp-content/uploads/2020/11/Victor-1.jpg",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum optio cupiditate",
  },
  {
    id: 4,
    title: "Javascript Commerce",
    img: "https://fiverr-res.cloudinary.com/images/q_auto,f_auto/gigs3/313305952/original/7ac62fdfc75dfadcfffcd55ec5ffd023238b7a6e/build-a-fully-functional-website-with-api-integeration.jpg",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum optio cupiditate",
  },
];

const Single = ({ item }) => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    // offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [550, -300]);
  return (
    <section>
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt="" />
          </div>
          <motion.div className="textContainer" style={{ y }}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <button>See Demo</button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });
  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Featured Works</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;
