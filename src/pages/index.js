
import CardProduct from "@/components/Product/CardProduct";
import Slide from "@/components/Slide/Slide";
import { Inter } from "next/font/google";
<<<<<<< HEAD
import Image from "next/image";

=======
import { Swiper, SwiperSlide } from "swiper/react";
import styles from "@/styles/Home.module.css";
// custom components
import Test from "@/components/test/test";
// image
import photo from "@/assets/img/pexels.jpeg";
>>>>>>> 83f6140fcdc941b067ee60114a7748cc282679d9

const inter = Inter({ subsets: ["latin"] });

export default function Home({ products }) {
  return (
    <>
<<<<<<< HEAD
      <div className='container'>
        <div className="row">
          <div className="col-12">
            <Slide />
            <ul style={{
              display: 'flex',
              flexWrap: 'wrap',
              listStyle: 'none',
              padding: 0,

            }}>
              {products && products.map(product => (
                <li
                  key={product.id}
                  style={{
                    width: "25%",
                    padding: "0 10px",
                  }}
                >
                  <CardProduct product={product} />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

=======
      {/* <Test text="hello world" /> */}
      <Test>
        <p>Test</p>
        <ul>
          <li>Test</li>
          <li>Test</li>
          <li>Test</li>
        </ul>
      </Test>
      {/* image */}
      <Image src={photo} width={200} height={200} />
      {/* swiper */}
      <div>
        <Swiper
          spaceBetween={50}
          slidesPerView={3}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
          <SwiperSlide>Slide 1</SwiperSlide>
          <SwiperSlide>Slide 2</SwiperSlide>
          <SwiperSlide>Slide 3</SwiperSlide>
          <SwiperSlide>Slide 4</SwiperSlide>
        </Swiper>
      </div>
>>>>>>> 83f6140fcdc941b067ee60114a7748cc282679d9
    </>
  );
}

export async function getStaticProps() {
  const res = await fetch('https://fakestoreapi.com/products?limit=4');
  const products = await res.json();
  return {
    props: {
      products,
    },
  };
}


