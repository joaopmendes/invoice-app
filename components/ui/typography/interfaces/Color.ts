type Color = "light-blue" | "dark-blue" | "blue" | "dark-01" | "dark-02"
    | "dark-03" | "light-grey" | "dark-grey" | "red" | "light-red"
    | "white" | "dark"

 
 
export const ColorMapping: Record<Color, string> = {
    "light-blue": "light-blue",
    "dark-blue": "dark-blue",
    "blue": "blue",
    "dark-01": "dark-01",
    "dark-02": "dark-02",
    "dark-03": "dark-03",
    "light-grey": "light-grey",
    "dark-grey": "dark-grey",
    "red": "red",
    "light-red": "light-red",
    "white": "white",
    "dark": "dark",
}

export default Color;