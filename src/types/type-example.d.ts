//Collection of types for type-example without proptypes
// type constant
type Title = "Webshop"

// Type union
type category = "Clothing" | "Shoes" | "Sportswear";
type ErrorCode = 404 | 400 | "400" | "404"

type StringOrArray = string | string[] 

//Extendability
type TAnimal = {
    race: string;
    makeNoise: () => void;
}

type TDog = TAnimal & {
    race: "Dog"
    owner: string;
}

//Interface extendability
interface IVehicle {
    make: string;
    model: string;
}

interface ICar extends IVehicle {
    fourWheelDrive: boolean
}

interface MockResponse {
    status: number;
    data: {
        message: string;
    }
}