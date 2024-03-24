import Image from 'next/image'

export default function LocationBlock({title, description, logo, link}) {
    return (
        <a href={link} target="blank" className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl" data-aos="fade-up">
            {logo && <Image src={`/images/${logo}.jpg`} alt={title} width={96} height={96} />}
            <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">{title}</h4>
            <p className="text-gray-600 text-center">{description}</p>
        </a>
    )
  }