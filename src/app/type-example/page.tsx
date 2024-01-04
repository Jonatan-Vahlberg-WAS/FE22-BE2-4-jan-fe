


// Type definition
type TPageProps = {
    title: Title;
    isAdmin: boolean;
    hasAccessed?: boolean;
}

//Interface definition
interface IPageProps {
    title: string;
    isAdmin: boolean;
    hasAccessed?: boolean;
}



const animal:TAnimal = {
    race: "Amphibian",
    makeNoise: () => console.log("Croak")
} 

const dog: TDog = {
    race: "Dog",
    owner: "Jhon",
    makeNoise: () => console.log("Woof"),

} 



export default function TypesExample() {
    const mockedRequest = (): any => {
        return {
            status: 200,
            data: {
                message: "Ok"
            }
        }
    }
    // Type assertion direct
    let mockedResponse1: MockResponse = mockedRequest()

    // Type assertion as (unsafe)
    let mockedResponse2Data = (mockedRequest() as MockResponse).data

    // Type guard
    let isArray = (unkw: StringOrArray) => {
        if(Array.isArray(unkw)){
            unkw.push()
        }
        else{
            unkw.split(" ")
        }
        // unkw.push()
        unkw.toString()
    }

  return (
    <main className="flex min-h-[calc(100vh-65px)] flex-col p-4">
        Types
        <TypeContainer
            title=""
            isAdmin
        />
    </main>
  )
}

const TypeContainer = (props:IPageProps) => {
    return null
}