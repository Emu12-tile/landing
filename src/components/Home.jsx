import '../App.css'
import banner from '../assets/black.png'
import Banner from '../shared/Banner';
import image1 from'../assets/about.jpg'
import image2 from'../assets/removed.png'
import image3 from'../assets/home.jpg'
import {motion} from 'framer-motion'
import {fadeIn} from '../variants'
const ImageList=[
  {
    id:1,
    img:image1,
    title:"Partnership",
    description:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Necessitatibus inventore et vero eligendi sint iusto magnam ipsum repudiandae, temporibus eius hi",

  },
  {
    id:2,
    img:image2,
    title:"Partnership",
    description:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Necessitatibus inventore et vero eligendi sint iusto magnam ipsum repudiandae, temporibus eius hi",

  },
  {
    id:3,
    img:image3,
    title:"Partnership",
    description:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Necessitatibus inventore et vero eligendi sint iusto magnam ipsum repudiandae, temporibus eius hi",

  },
]
const Home=()=> {
  return (
   
<>
<div className='relative md:px-12 p-4 max-w-screen-2xl mx-auto  mt-24 overflow-hidden min-h-[550px] sm:min-h-[650px] bg-gray-100 flex justify-center items-center dark:bg-gray-950 dark:text-white duration-200 '>
  <div className='h-[700px] w-[700px] bg-[#00ADEF] absolute -top-1/2 right-0 rounded-3xl rotate-45 -z[8]'></div>
  <div className='container pb-8 sm:pb-0'>
    
    <div>
      <div className='grid grid-cols-1 sm:grid-cols-2 ' >
        
      <motion.div 
                 variants={fadeIn("up",0.2)}
                 initial='hidden'
                 whileInView={"show"}
                 viewport={{once:false,amount:0.7}} 
                 className='flex flex-col justify-center gap-4 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1 relative z-10'>
                  <h2 className=' mb-5  text-semibold text-secondary text-light uppercase'>Tech Partnership </h2>
          <h1 className='text-5xl mb-5 sm:text-6xl lg:text-7xl font-semibold'>Partners</h1>

          <p className='text-xl'>Join forces with us to unlock new possibilities, drive advancements, and create a collaborative tech ecosystem that propels both our ventures to new heights.</p>
          <div>
          <button className='btnPrimary'>Get Started</button>
        </div>
        </motion.div>
        <div className='order-1 sm:order-2'>
        <motion.div 
                 variants={fadeIn("down",0.2)}
                 initial='hidden'
                 whileInView='show'
                 viewport={{once:false,amount:0.7}}
                 className='relative z-10'
                 >
      <img src={image2} alt="" className='w-[400px] h-[400px] sm:h-[500px] sm:w-[500px] sm:scale-105 lg:scale-140 object-contain mx-auto'/>
      </motion.div>
    </div>
        
      </div>
    </div>
    
  </div>
</div>
</>

  )
}
export default Home;
