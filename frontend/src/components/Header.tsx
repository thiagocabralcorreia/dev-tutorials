import { motion } from "framer-motion";
import { FaComments } from "react-icons/fa";
import { Link } from "react-router-dom";

function Header() {
  return (
    <Link to={"/"}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ ease: "easeInOut", duration: 0.6, delay: 0.2 }}
        className="flex content-center gap-4 py-6 px-16"
      >
        <FaComments className="pt-2 text-3xl text-primary" />
        <h1 className="font-fredoka text-2xl text-white">
          dev<span className="text-primary">meetup</span>
        </h1>
      </motion.div>
    </Link>
  );
}

export default Header;
