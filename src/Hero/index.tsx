import Image from 'next/image';
import logo from "/public/images/logo.jpg";

const Home = () => {
  return (
    <div>
     
     <div className="relative h-[65vh] w-full">
  <Image
    src={logo}
    alt="/logo"
    layout="fill"
  />
</div>


      {/* Browse Section */}
      <section className="p-8">
        <h2 className="text-2xl mb-4 text-white">Browse Popular Movies</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div
                className="cursor-pointer relative border-2 rounded-xl overflow-hidden transition-transform duration-300 ease-in-out hover:-translate-y-2"
              ><Image
              className="w-full h-full object-cover mb-2"
              src={logo}
              alt=""
              // width={200}
              // height={150}
            />
            {/* <h3 className="text-lg mt-2 text-white">The Shawshank Redemption</h3> */}
          </div>

          <div
                className="cursor-pointer relative border-2 rounded-xl overflow-hidden transition-transform duration-300 ease-in-out hover:-translate-y-2"
              >
            <Image
              className="w-full h-full object-cover mb-2"
              src={logo}
              alt=""
              width={200}
              height={150}
            />
          </div>

          <div
                className="cursor-pointer relative border-2 rounded-xl overflow-hidden transition-transform duration-300 ease-in-out hover:-translate-y-2"
              >
            <Image
              className="w-full h-full object-cover mb-2"
              src={logo}
              alt=""
              width={200}
              height={150}
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
