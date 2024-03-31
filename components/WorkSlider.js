import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import { BsArrowRight } from "react-icons/bs";
import Image from "next/image";

// data
const workSlider = {
  slides: [
    {
      images: [
        {
          title: "title",
          path: "/Inventory.jpg",
          link: "https://github.com/ifs20001-itdel/InventoryManagement",
        },
        {
          title: "title",
          path: "/kelompok.jpg",
          link: "https://kelompok-sipaling.vercel.app/",
        },
        {
          title: "title",
          path: "/Humburger.jpg",
          link: "https://www.figma.com/file/u0Ho0iQvdEYNKDdC5GEiTC/Hamburger-Mobile-App?type=design&node-id=0-1&mode=design&t=TxPCaeVJtbf3w2Bc-0",
        },
        {
          title: "title",
          path: "/Kefi.jpg",
          link: "https://github.com/ifs20001-itdel/cafe2023",
        },
      ],
    },
    {
      images: [
        {
          title: "title",
          path: "/scan.jpg",
          link: "https://scanner-zqer.vercel.app/",
        },
        {
          title: "title",
          path: "/pion.jpg",
          link: "https://www.figma.com/file/P8vPRot76LLxn0gPXXHFCg/UAS_Keteknowiraan_9_11S20001_11S20009_11S20011_11S20027_11S20037_11S20042?type=design&node-id=0-1&mode=design&t=6J2xr5TAifdUyTtE-0",
        },
        {
          title: "title",
          path: "/taput.jpg",
          link: "https://github.com/ifs20001-itdel/taputnews",
        },
        {
          title: "title",
          path: "/btpn.jpg",
          link: "https://github.com/ifs20001-itdel/task-5-pbi-fullstack-developer-Samuel-Adika-Lumbantobing",
        },
      ],
    },
  ],
};

const WorkSlider = () => {
  const aspectRatio = 300 / 200; 

  return (
    <Swiper
      spaceBetween={10}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
    >
      {workSlider.slides.map((slide, index) => {
        return (
          <SwiperSlide key={index}>
            <div className="grid grid-cols-2 grid-rows-2 gap-4 cursor-pointer">
              {slide.images.map((image, index) => {
                return (
                  <div className="relative rounded-lg overflow-hidden flex items-center justify-center group" key={index}>
                    <a href={image.link} target="_blank" rel="noopener noreferrer">
                      <div className="flex items-center justify-center relative overflow-hidden">
                        <div style={{ width: "600px", height: "200px" }}>
                          <Image src={image.path} layout="fill" objectFit="cover" alt="" />
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-l from-transparent via-[#3468C0] to-[#3652AD] opacity-0 group-hover:opacity-80 transition-all duration-700"></div>
                        <div className="absolute bottom-0 translate-y-full group-hover:-translate-y-10 group-hover:xl-translate-y-20 transition-all duration-300">
                          <div className="flex items-center gap-x-2 text-[13px] tracking-[0.2em]">
                            <div className="delay-100">LIVE</div>
                            <div className="translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-150">PROJECT</div>
                            <div className="text-xl translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-200"><BsArrowRight /></div>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                );
              })}
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default WorkSlider;
