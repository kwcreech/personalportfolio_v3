"use client";
import { TypeAnimation } from 'react-type-animation';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { LinkedInLogoIcon } from '@radix-ui/react-icons';
import { GithubIcon } from 'lucide-react';

export default function Home() {
  return (
    <div className="flex justify-center mt-16 px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col items-center w-full max-w-4xl">
        <div className="flex flex-col md:flex-row w-full items-center">
          <div className="flex flex-col items-center w-full md:w-auto mr-20">
            <div className="text-white text-5xl font-bold text-center" style={{ minWidth: `500px` }}>
              <span>Hey, I'm </span>
              <TypeAnimation
                sequence={[
                  "Kerry.",
                  1000,
                  "a student.",
                  1000,
                  "a developer.",
                  1000,
                ]}
                speed={50}
                repeat={Infinity}
                className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-cyan-400"
              />
            </div>
            <h1 className="text-neutral-400 mt-16 text-2xl">CS + Chinese @ UNC Chapel Hill.<br></br>Detail-Oriented and Improvement-Driven.</h1>
          </div>
          <div className=" w-64 md:w-80 lg:w-96 mt-10 md:mt-0 aspect-w-1 aspect-h-1 rounded-full overflow-hidden">
            <Image 
              src="/square_headshot.png"
              alt="Headshot"
              width={350}
              height={350}
              quality={100}
              layout="responsive"
            />
          </div>
        </div>
        <div className="mt-12 mb-5 flex flex-row space-x-8">
          <Button asChild className="font-semibold bg-gradient-to-r from-indigo-500 to-cyan-400 h-10">
              <a href="https://linkedin.com/in/kerry-creech-b36b772aa" target="_blank" rel="noopener noreferrer">
                <LinkedInLogoIcon className="m-2" /> LinkedIn
              </a>
          </Button>
          <Button asChild className="font-semibold bg-gradient-to-r from-indigo-500 to-cyan-400 h-10">
            <a href="https://github.com/kwcreech" target="_blank" rel="noopener noreferrer">
              <GithubIcon className="m-2" /> GitHub
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
}
