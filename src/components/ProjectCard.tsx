import { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { GithubIcon } from 'lucide-react';
import Link from "next/link";

interface ProjectCardProps {
    imgURL: string;
    title: string;
    description: string;
    gitURL: string;
}

export default function ProjectCard({ imgURL, title, description, gitURL }: ProjectCardProps) {
    return (
        <div>
            <Card className="h-56 flex flex-col justify-between">
                <CardHeader className="text-center">
                    <CardTitle>{title}</CardTitle>
                    <CardDescription>{description}</CardDescription>
                </CardHeader>
                <CardContent className="flex justify-center h-18">
                    <Image 
                        src={imgURL}
                        alt="Project Photo"
                        width={150}
                        height={150}
                    />
                </CardContent>
                <CardFooter className="flex justify-center">
                    <Button asChild variant="outline">
                        <Link href={gitURL} target="_blank" rel ="noopener noreferrer"><GithubIcon className="m-2" />GitHub</Link>
                    </Button>
                </CardFooter>
            </Card>
        </div>
    );
}