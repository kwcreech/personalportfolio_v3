import { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from "next/link";

interface ExperienceCardProps {
    imgURL: string;
    title: string;
    description: string;
    website: string;
}

export default function ExperienceCard({ imgURL, title, description, website }: ExperienceCardProps) {
    return (
        <div>
            <Card>
                <CardHeader className="text-center">
                    <CardTitle>{title}</CardTitle>
                    <CardDescription>{description}</CardDescription>
                </CardHeader>
                <CardContent className="flex justify-center">
                    <Image 
                        src={imgURL}
                        alt="Project Photo"
                        width={125}
                        height={125}
                    />
                </CardContent>
                <CardFooter className="flex justify-center">
                    <Button asChild variant="outline">
                        <Link href={website} target="_blank" rel ="noopener noreferrer">Website</Link>
                    </Button>
                </CardFooter>
            </Card>
        </div>
    );
}