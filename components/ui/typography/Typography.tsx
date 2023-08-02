import React, {ComponentProps, ReactComponentElement} from "react";
import {cn} from "@/lib/utils";
import Tag, {TagMapping} from "@/components/ui/typography/interfaces/Tag";
import Color from "@/components/ui/typography/interfaces/Color";
import Size from "@/components/ui/typography/interfaces/Size";
import {twMerge} from "tailwind-merge";

type TypographyProps = {
    tag: Tag;
    color: Color;
    size: Size;
    className?: string
} &  ComponentProps<"h1">

const Typography: React.FC<React.PropsWithChildren<TypographyProps>> = ({
                                                                            tag,
                                                                            color,
                                                                            size,
                                                                            children,
                                                                            className,
                                                                            ...props
                                                                        }) => {
    
    const textSize = `text-${size}`;
    const textColor = `text-${color}`
    return (
        <>
            {React.createElement(TagMapping[tag] || TagMapping.p, {...props, className: `${className ?? ''} ${textSize} ${textColor}`}, children)}
        </>
    );
};

export default Typography;
