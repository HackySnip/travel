import "./home.css";

const Home = () => {
   return (
      <div className="hero-section bg-cover bg-center h-screen flex items-center justify-center">
         <div className="container mx-auto flex flex-col items-center">
            <div className="hero-text text-center w-3/5">
               <h1 className="text-5xl font-bold text-white leading-tight">
                  Discover the best place to enjoy your next vacation
               </h1>

            </div>
            <div className="hero-form mt-8 bg-white bg-opacity-90 py-2 px-2 rounded-full flex items-center space-x-4 w-full max-w-3xl">
               <input
                  type="text"
                  placeholder="Choose a Location"
                  className="flex-1 py-2 px-4 rounded-full bg-transparent active:border-none"
               />
               <input
                  type="text"
                  placeholder="Date of Stay"
                  className="flex-1 py-2 px-4 rounded-full bg-transparent"
               />
               <input
                  type="text"
                  placeholder="Add Guest"
                  className="flex-1 py-2 px-4 rounded-full bg-transparent"
               />
               <button className="bg-pink-500 text-white py-2 px-3 rounded-full font-semibold hover:bg-pink-600">
                  Find a Place
               </button>
            </div>
         </div>
      </div>
   );
};

export default Home;
