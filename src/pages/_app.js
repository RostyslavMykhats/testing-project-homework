<<<<<<< HEAD
import "@/styles/globals.scss";
import 'swiper/css';
import 'bootstrap/dist/css/bootstrap.css'
=======
import "@/styles/globals.css";
// libs styles
import "swiper/css";
import "bootstrap/dist/css/bootstrap.min.css";
// layouts components
>>>>>>> 83f6140fcdc941b067ee60114a7748cc282679d9
import Layouts from "@/layouts";

export default function App({ Component, pageProps }) {
  return (
    <Layouts>
      <Component {...pageProps} />
    </Layouts>
  );
}
