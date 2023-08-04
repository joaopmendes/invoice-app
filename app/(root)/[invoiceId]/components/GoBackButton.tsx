"use client"
import Image from "next/image";
import Typography from "@/components/ui/typography/Typography";
import {useRouter} from "next/navigation";

export const GoBackButton = () => {
    const router = useRouter();
    return (
        <div className={'flex gap-3 h-[10px] items-center cursor-pointer'} onClick={() => {
            router.back();
            router.refresh();
        }}>
            <Image src={"/assets/icon-arrow-left.svg"}  width="7" height="10" alt={"Go back"} />
            <Typography  tag={"h2"} color={"dark-01"} size={"heading-s"}>
                Go back
            </Typography>
        </div>
    );
};