import type { DateRange } from "../../data";
import type { CardData } from "../../data";
import { workExperienceData } from "../../data";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

const formatDuration = ({ start, end }: DateRange): string => {
    const format = (d: Date) => d.toLocaleString('en-US', { month: 'long', year: 'numeric' });
    return `${format(start)} - ${end ? format(end) : 'Present'}`
}

const WorkExperienceCard = () => {
    return (
        <Swiper
            modules={[Pagination]}
            grabCursor
            initialSlide={0}
            centeredSlides
            slidesPerView={1}
            spaceBetween={50}
            pagination={{ clickable: true }}
            speed={800}
            breakpoints={{
                320: { spaceBetween: 40 },
                650: { spaceBetween: 30 },
                1000: { spaceBetween: 20 },
            }}>
            {
                workExperienceData.map((experience: CardData, i: number) => (
                    <SwiperSlide key={i}>
                        <div className='card my-2 flex flex-col gap-4' key={i}>
                            <figure>
                                <img src={experience.companyImage} alt="Company Image" width={250} height={250} className='w-62.5 h-37.5' />
                                <figcaption className='sr-only'>Company Image</figcaption>
                            </figure>
                            <h3 className='text-xl'>{experience.company}</h3>
                            <p className="">{experience.title}</p>
                            <p className="whitespace-pre-line">{experience.description}</p>
                            <div className='flex justify-start items-center flex-wrap gap-2'>
                                {experience.techStack.map((tech, index) => (
                                    <span className='tag' key={index}>{tech}</span>
                                ))}
                            </div>
                            <p>{formatDuration({ start: experience.duration.start, end: experience.duration.end })}</p>
                        </div>
                    </SwiperSlide>
                ))
            }
        </Swiper>
    )
}

export default WorkExperienceCard