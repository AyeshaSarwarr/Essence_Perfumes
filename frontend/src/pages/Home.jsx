import Herosection from "../components/Herosection"
import OurProducts from "../components/OurProducts"

function Home() {
  return (
    <section>
        <Herosection/>
        <p className="md:text-2xl md:m-20  m-10 text-center  ">Experience the art of fine fragrance. Our premium perfumes blend rare essences with masterful craftsmanship to create scents that define luxury. Designed for those who appreciate refinement, depth, and distinction.</p>

        <div className="flex justify-center flex-col items-center">
          <OurProducts limit={3}/>
          <button className="bg-black text-white  rounded-full hover:scale-105 transition w-[45vw] h-[5vh] duration-300">View All Products</button>
        </div>

          <div className=' md:m-20 my-10 mx-5 flex gap-8 md:items-center '>

          <video className="md:h-[30vh] h-[15vh] rounded-2xl object-cover w-[40vw]" poster="/perfume.jpg" autoPlay loop controls={false} muted playsInline
          preload="metadata">
            <source src="AboutVideo.mp4" type="video/mp4" /> Your browser does not support the video tag.
          </video>

          <p className='md:text-base/8 text-sm'>Luxury is not just a word — it is our signature. We are dedicated to creating premium fragrances that embody elegance, sophistication, and timeless charm. Every scent we offer is carefully crafted to deliver depth, richness, and lasting impression.

          <span className="hidden lg:block">
            <br/><br/>
            We select only high-quality ingredients and blend them with precision to create perfumes that evolve beautifully throughout the day. Our creations are designed for those who appreciate refinement, exclusivity, and the art of fine perfumery.<br/><br/>

          For us, fragrance is an experience — a silent statement of confidence and class. With every bottle, we invite you to indulge in true luxury and leave a lasting impression wherever you go.
          </span></p>

          
        </div>
    </section>
  )
}

export default Home