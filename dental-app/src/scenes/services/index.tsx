import { SelectedPage, ClassType } from "@/shared/types";
import image1 from "@/assets/image1.png";
import image2 from "@/assets/image2.png";
import image3 from "@/assets/image3.png";
import image4 from "@/assets/image4.png";
import image5 from "@/assets/image5.png";
import image6 from "@/assets/image6.png";
import { motion } from "framer-motion";
import HText from "@/shared/HText";
import Class from "./Service";

const services: Array<ClassType> = [
  {
    name: "Routine Cleanings and Exams",
    description:
      "Regular dental check-ups and cleanings are essential for maintaining oral health and preventing issues like cavities and gum disease.",
    image: image1,
  },
  {
    name: "Cosmetic Dentistry",
    description:
    "Services such as teeth whitening, veneers, and dental bonding can enhance the appearance of teeth, improving smiles and boosting confidence.",
    image: image2,
  },
  {
    name: "Restorative Dentistry",
    description:
      "Procedures like fillings, crowns, and bridges are aimed at repairing damaged or missing teeth, restoring both function and aesthetics.",
    image: image3,
  },
  {
    name: "Orthodontic Treatment",
    description:
      "Orthodontic services, including braces and clear aligners, help to straighten misaligned teeth and correct bite issues for improved dental health and appearance.",
    image: image4,
  },
  {
    name: "Endodontic Therapy",
    description:"Root canal treatment is offered to address infected or damaged tooth pulp, alleviating pain and preserving the natural tooth structure.",
    image: image5,
  },
  {
    name: "Oral Surgery",
    description:
      "Dental clinics may provide oral surgery procedures such as tooth extractions, dental implants, and jaw surgery to address complex dental issues and improve overall oral health.",
    image: image6,
  },
];

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Services = ({ setSelectedPage }: Props) => {
  return (
    <section id="services" className="w-full bg-primary-100 py-40">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.Services)}
      >
        <motion.div
          className="mx-auto w-5/6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <div className="md:w-3/5">
            <HText>Services</HText>
            <p className="py-5">
            Unlock the full potential of your smile with our comprehensive suite of services. From routine cleanings and exams to cosmetic enhancements and restorative treatments, our dedicated team ensures your oral health and confidence are always at their best. Whether you're seeking a brighter smile through professional whitening or require advanced procedures like dental implants or root canal therapy, our expert dentists and specialists are here to provide personalized care with precision and compassion. Experience the difference exceptional dentistry can make – schedule your appointment today and transform your smile journey!
            </p>
          </div>
        </motion.div>
        <div className="mt-10 h-[353px] w-full overflow-x-auto overflow-y-hidden">
          <ul className="w-[2800px] whitespace-nowrap">
            {services.map((item: ClassType, index) => (
              <Class
                key={`${item.name}-${index}`}
                name={item.name}
                description={item.description}
                image={item.image}
              />
            ))}
          </ul>
        </div>
      </motion.div>
    </section>
  );
};

export default Services;