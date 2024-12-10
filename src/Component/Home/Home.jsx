import "./home.css";
import Navbar from "../Navbar/Navbar";
import Datial from "../Datial/Datial";
import Phone from "../Phone/Phone";

export default function Home() {
  return (
    <>
      <main className="home">
        <Navbar />
        <div className="content-center py-5">
          <div>
            <h1 className="text-white text-center">
              ابقى متصلاً <span className="text">اينما كنت</span>
            </h1>
            <p className="text-white text-center">في اكثر من 200 دولة</p>
            <div className="search-bar">
              <button className="search-button" aria-label="Search">
                <i className="fas fa-search"></i>
              </button>
              <input type="text" placeholder="ابحث" />
            </div>
          </div>
        </div>
        <div className="button-group d-flex justify-content-center ">
          <button className="btn fs-5  text-white">دولية</button>
          <button className="btn fs-5 text-white">قارية</button>
          <button className="btn fs-5 text-white">عالمية</button>
        </div>
      </main>
      <Datial />
      <Phone/>
    </>
  );
}
