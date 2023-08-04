import {cn} from "@/lib/utils";

type CardProps = {
    
} & React.ComponentProps<"div">;
export const Card: React.FC<React.PropsWithChildren<CardProps>> = ({children, className, ...rest}) => {
    return (
        <div {...rest} className={cn({
            "bg-pure-white rounded-lg p-4 card-shadow": true,
            [`${className}`]: !!className
        })}>
            {children}
        </div>
    );
};