type Color = "light-blue" | "dark-blue" | "blue" | "dark-01" | "dark-02"
    | "dark-03" | "light-grey" | "dark-grey" | "red" | "light-red"
    | "white" | "dark" | "pure-white" | "green" | "orange"

 
export const ColorDarkMapper = {
    "light-blue": "light-blue",
    "dark-blue": "white",
    "blue": "white",
    "dark-01": "white",
    "dark-02": "white",
    "dark-03": "white",
    "light-grey": "light-grey-dark",
    "dark-grey": "dark-grey-dark",
    "red": "red-dark",
    "light-red": "light-red-dark",
    "white": "dark",
    "dark": "white",
    "pure-white": "dark",
    "green": "green-dark",
    "orange": "orange-dark"
}
export default Color;