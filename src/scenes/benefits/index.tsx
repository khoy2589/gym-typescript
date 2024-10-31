import HText from '@/shared/HText';
import { BenefitType, SelectedPage } from '@/shared/type';
import {HomeModernIcon, UserGroupIcon, AcademicCapIcon} from '@heroicons/react/24/solid';
import { motion } from 'framer-motion';
import BenefitsPageGraphic from '@/assets/BenefitsPageGraphic.png';
import Benefit from './Benefit';
import ActionButton from '@/shared/ActionButton';

const benefits: Array<BenefitType> = [
    {
        icon: <HomeModernIcon className='h-6 w-6' />,
        title: "State of the Art Facilities",
        description: "Neque adipiscing amet amet enim. Feugiat",
    },{
        icon: <UserGroupIcon className='h-6 w-6' />,
        title: "100's of Diverse Classes",
        description: "Neque adipiscing amet amet enim. Feugiat",
    },{
        icon: <AcademicCapIcon className='h-6 w-6' />,
        title: "Expert and Pro Trainers",
        description: "Neque adipiscing amet amet enim. Feugiat",
    },
]

const container = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.2,}
    }
}

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
};

const Benefits = ({setSelectedPage}: Props) => {
  return (
    <section id='benefits' className='mx-auto min-h-full w-5/6 py-20' >
        <motion.div
            onViewportEnter={() => setSelectedPage(SelectedPage.Benefits)}
        > 
            {/* HEADER */}
            <motion.div 
                className='my-5 md:w-3/5' 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5}}
                transition = {{duration: 0.5}}
                variants={{
                  hidden: { opacity: 0, x: -50},
                  visible: { opacity: 1, x: 0},
                }}          
                >
                    <HText >MORE THAN JUST A GYM</HText>
                    <p className='my-5 text-sm'>
                        We provide world class fitness equipment, trainers and classes to
                        get you to your ultimate fitness goals with ease. We provide true
                        care into each and every member.
                    </p>
            </motion.div>

            {/* BENEFITS */}
            <motion.div 
                className='md:flex items-center justify-between gap-8 mt-5'
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                variants={container}
            >
                {benefits.map((benefit: BenefitType) => (
                    <Benefit
                        key={benefit.title}
                        icon={benefit.icon}
                        title={benefit.title}
                        description={benefit.description}
                        setSelectedPage={setSelectedPage}
                    />
                ))}
            </motion.div>

            {/* GRAPHICS AND DESCRIPTION */}
            <div className='mt-16 items-center justify-between gap-20 md:mt-28 md:flex'>
                {/* GRAPHIC */}
                <img
                    className='mx-auto'
                    alt='benefits-page-graphic'
                    src= {BenefitsPageGraphic}
                />
                {/* DESCRIPTION */}
                <div>
                    {/* TITLE */}
                    <div className='relative'>
                        <div className='before:absolute before:-top-20 before:-left-20 before:z-[-1] before:content-abstractwaves'>
                            <motion.div
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, amount: 0.5}}
                                transition = {{duration: 0.5}}
                                variants={{
                                  hidden: { opacity: 0, x: 50},
                                  visible: { opacity: 1, x: 0},
                                }}    
                            >
                                <HText>
                                    MILLION OF HAPPY MEMBERS GETTING{" "}
                                    <span className='text-primary-500'>FIT</span>
                                </HText>
                            </motion.div>
                        </div>
                    </div>
                    {/* DESCRIPTION */}
                    <motion.div
                        className='my-5 md:w-3/5' 
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.5}}
                        transition = {{delay: 0.2, duration: 0.5}}
                        variants={{
                          hidden: { opacity: 0, x: 50},
                          visible: { opacity: 1, x: 0},
                        }}    
                    >
                        <p className='my-5'>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut nihil velit eveniet eius ducimus, minus odit provident porro maiores harum quisquam saepe autem assumenda optio mollitia quia omnis totam id?
                        </p>
                        <p className='mb-5'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate rerum est, iure ducimus veniam aut eum expedita delectus obcaecati beatae accusantium blanditiis voluptate odit fuga, praesentium minima repellat, autem ea dignissimos consectetur illum atque? Atque a deleniti ut impedit natus quas magni incidunt ipsam nulla consectetur laborum temporibus praesentium voluptate sint, at perferendis quos consequatur aliquid. Harum beatae fugiat veniam nobis possimus laboriosam necessitatibus quae molestiae ipsum odio a quod asperiores exercitationem cupiditate doloribus aut dolores sit temporibus provident nostrum, perferendis eligendi autem deserunt. Earum beatae mollitia molestiae eos, doloremque veritatis blanditiis nisi quidem perspiciatis, qui vitae doloribus veniam repellendus?                        
                        </p>
                    </motion.div>

                    {/* BUTTON */}
                    <div className='relative mt-16'>
                        <div className='before:absolute before:-bottom-20 before:right-40 before:z-[-1] before:content-sparkles'>
                            <ActionButton 
                                setSelectedPage={setSelectedPage}
                            >
                                Join Now!
                            </ActionButton>
                        </div>

                    </div>
                </div>
            </div>
        </motion.div>
    </section>
)
};

export default Benefits;
