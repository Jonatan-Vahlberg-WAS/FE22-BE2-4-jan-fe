

"use client";

import { useEffect, useRef, useState } from "react";

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
    const [count, setCount] = useState(0)
    const btnRef = useRef<HTMLButtonElement>(null)

    useEffect(() => {
        if(btnRef.current){
            console.log(btnRef.current)
            btnRef?.current?.click()
            btnRef?.current?.click()
            btnRef?.current?.click()
            btnRef?.current?.click()
            btnRef?.current?.click()
            btnRef?.current?.click()
            btnRef?.current?.click()
            btnRef?.current?.click()
            btnRef?.current?.click()
            btnRef?.current?.click()

        }
    },[btnRef.current])
    
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
    const isArray = (unkw: StringOrArray) => {
        if(Array.isArray(unkw)){
            unkw.push()
        }
        else{
            unkw.split(" ")
        }
        // unkw.push()
        unkw.toString()
    }

    // Primitive type guarding
    const determineType = (input: any): string => {
        if(typeof input === "number") {
            return "Is a number"
        }
        else if(typeof input === "string"){
            return "Is a string"
        }
        else if(typeof input === "object"){
            return "Is a object"
        }

        return "Unkown type"
    }
    
    const getNumericValue = (id: string | number) => {
        return typeof id === "string" ? Number(id) : id
    }
    console.log(

        determineType(0),
        determineType(""),
        determineType({
            hello: "world"
        }),
        determineType([])
        )

        console.log(getNumericValue(0))
        console.log(getNumericValue("4004"))



  return (
    <main className="flex min-h-[calc(100vh-65px)] flex-col p-4">
        Types
        <TypeContainer
            title=""
            isAdmin
        />
        <p>
            {count}
        </p>
        <button
            ref={btnRef}
            onClick={() => {
                console.log(count)
                setCount(state => {
                    console.log(state)
                    return state+1
                })
            }}
        >
            increase
        </button>
    </main>
  )
}

const TypeContainer = (props:IPageProps) => {
    return null
}