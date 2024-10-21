import Image from "next/image";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel"

export default function About() {
    return (
        <div className="flex flex-col my-8 mx-16">
            <h1 className="text-center bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-cyan-400 text-4xl font-extrabold mb-10 leading-tight">About Me</h1>
            <div className="flex flex-col md:flex-row text-center items-center mb-16">
                <p className="text-white text-lg leading-loose mr-8 mb-8 p-8">
                    Hi! I'm Kerry, a Computer Science major with a Chinese language minor at UNC Chapel Hill, originally from Charlotte, NC. 
                    I have a passion for full-stack development and experience working with Java, Python, C, React, React Native, and more. 
                    My journey into the world of computer science began back in 7th grade when I joined my school's coding club and first explored 
                    front-end development with HTML and CSS. Since then, my fascination with coding and development has only grown!
                </p>
                <Image 
                    src="/nypic.jpg"
                    alt="Me in Central Park"
                    width={250}
                    height={250}
                    className="max-w-full h-auto object-contain"
                />
            </div>
            <div className="flex flex-col-reverse items-center md:flex-row">
                <Carousel className="w-full max-w-sm">
                    <CarouselContent>
                        <CarouselItem className="flex justify-center">
                            <Image 
                                src="/nac24.jpg"
                                alt="Me at NAC 2024"
                                width={350}
                                height={350}
                                className="max-w-full h-auto object-contain"
                            />
                        </CarouselItem>
                        <CarouselItem className="flex justify-center">
                            <Image 
                                src="/nats23.jpeg"
                                alt="Me at Nationals 2023 in Pittsburgh"
                                width={350}
                                height={350}
                                className="max-w-full h-auto object-contain"
                            />
                        </CarouselItem>
                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                </Carousel>
                <p className="text-white text-lg leading-loose ml-16 mb-8 p-8">
                    Outside of the tech world, I'm a competitive speedcuber, where the goal is to solve a Rubik's Cube as quickly as possible. 
                    I started my journey in 2016 and have since achieved some remarkable milestones, with my proudest being crowned the 2022 FMC North American Champion. 
                    In addition, I currently rank 1st in North Carolina with a personal best of 5.11 seconds for solving the cube!
                </p>
            </div>
        </div>
    );
}