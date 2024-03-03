import { motion } from "framer-motion";
import Circles from "../../components/Circles";
import Avatar from "../../components/Avatar";

const Testimonials = () => {
  return (
    <div>
      <div className="h-full bg-primary/30 text-center xl:text-left">
        <Circles />
        <motion.div
          initial="hidden"
          animate="show"
          exit="hidden"
          className="hidden xl:flex absolute bottom-0 -left-[370px]"
          style={{
            width: "600px",
            height: "600px",
          }}
        >
          <Avatar />
        </motion.div>
        <div class="container" style={{
          margin: '15% auto'
        }}>
          <div class="xl:w-1/2 lg:w-3/4 w-full mx-auto text-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              class="inline-block w-5 h-5 text-white-400 mb-8"
              viewBox="0 0 975.036 975.036"
            >
              <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
            </svg>
            <p
              class="leading-relaxed text-[15px]"
            >
              "Highly recommend this service! The team went above and beyond to
              meet my needs. From start to finish, they were professional,
              efficient, and friendly. I'm extremely satisfied with the results
              and will definitely be using their services again in the future.
              Thank you for your excellent work!"
            </p>
            <span class="inline-block h-1 w-10 rounded bg-indigo-500 mt-8 mb-6"></span>
            <h2 class="text-white-900 font-medium title-font tracking-wider text-[15px]">
              SAMUEL TOBING
            </h2>
            <p class="text-white-500 text-[15px]">Backend Developer</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
