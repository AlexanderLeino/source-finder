import { Html } from "@mui/icons-material"
import { IoLogoJavascript } from 'react-icons/io'
import {FaJava} from 'react-icons/fa'

export default function helperFunctions() {
    function getIcon(string) {
        
        switch(string){
            case "HTML":
                console.log("it worked")
                return <Html />
            case "JavaScript":
                console.log('JavaScript')
                return <IoLogoJavascript/> 
            case "Java":
                return <FaJava />
        }
    }
    return { getIcon }
}