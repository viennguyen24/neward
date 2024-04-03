import {Card, CardHeader, CardBody, CardFooter, Button} from "@nextui-org/react";
import React from "react";

interface TextCardProps{
    children?: React.ReactNode[],
    iconHeader?:JSX.Element,
    iconFooter?:JSX.Element,
    heading?: string | "",
    index? : number
}

const TextCard: React.FC<TextCardProps> = ({iconHeader, iconFooter, heading, children, index}) => {
    return(
        <Card className="flex flex-col justify-evenly py-3 px-4 min-h-[40dvh] aspect-[2/3]" key={index}>
            <CardHeader className="text-left flex flex-col items-start">
                <p className="text-4xl md:my-6 mx-0">
                    {iconHeader}
                </p>
                <p className="font-bold text-4xl">
                    {heading}
                </p>
            </CardHeader>
            <CardBody className="flex flex-col gap-4 justify-evenly border-y-2">
                {children}
            </CardBody>
            <CardFooter className="flex">
                <Button size="lg" color="primary" radius="sm"  className="justify-self-center text-2xl flex-1" endContent={iconFooter}>Subscribe</Button>
            </CardFooter>
        </Card>
    )
}
export default TextCard