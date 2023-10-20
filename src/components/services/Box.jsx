import "./services.scss";
import { motion } from "framer-motion";
const Box = () => {
  return (
    <motion.div
      className="box"
      whileHover={{ background: "lightgray", color: "black" }}
    >
      <h2>Branding</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed blanditiis
        animi doloribus aperiam neque et dolores unde, quod delectus, ad, iusto
        inventore placeat dignissimos? A nemo est nam hic minus.
      </p>
      <button>Go</button>
    </motion.div>
  );
};

export default Box;
