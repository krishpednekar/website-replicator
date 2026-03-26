import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const HoverRevealText = ({
  firstLetter,
  rest,
  onClick,
  className = "",
}: {
  firstLetter: string;
  rest: string;
  onClick?: () => void;
  className?: string;
}) => {
  return (
    <motion.span
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`group text-[80px] md:text-[120px] lg:text-[160px] font-medium leading-none tracking-tight text-foreground ${onClick ? "cursor-pointer" : ""} ${className}`}
      onClick={onClick}
    >
      {firstLetter}
      <span className="inline-block max-w-0 overflow-hidden opacity-0 group-hover:max-w-[300px] group-hover:opacity-100 transition-all duration-500 ease-out align-bottom">
        {rest}
      </span>
    </motion.span>
  );
};

const HeaderInitials = () => {
  const navigate = useNavigate();

  return (
    <div className="flex justify-between items-start px-6 md:px-9 pt-4 md:pt-6">
      <HoverRevealText
        firstLetter="K"
        rest="rish"
        onClick={() => navigate("/")}
      />
      <HoverRevealText
        firstLetter="P"
        rest="ed."
        className="delay-100"
      />
    </div>
  );
};

export default HeaderInitials;
