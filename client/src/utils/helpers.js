import { Html } from "@mui/icons-material"
import { IoLogoJavascript } from 'react-icons/io'
import {FaJava, FaCss3Alt, FaReact, FaAngular, FaHtml5} from 'react-icons/fa'
import { GrMysql } from 'react-icons/gr'
import {SiMongodb, SiJquery, SiSequelize, SiFigma} from 'react-icons/si'

export default function helperFunctions() {
    function getIcon(string) {
        
        switch(string){
            case "HTML":  
                return <FaHtml5 />
            case "JavaScript":
                return <IoLogoJavascript/> 
            case "Java":
                return <FaJava />
            case "CSS5":
                return <FaCss3Alt />
            case "Mysql":
                return <GrMysql />
            case "React":
                return <FaReact />
            case "Angular":
                return <FaAngular />
            case "Mongoose":
                return "Mongoose"
            case "Mongodb":
                return <SiMongodb />
            case "jQuery":
                return <SiJquery/>
            case "Sequelize":
                return <SiSequelize />
            case "Unity":
                return <SiUnity />
            case "C++":
                return "C++"
            case "Java":
                return <FaJava />
            case "Figma":
                return <SiFigma/>
        }
    }
    return { getIcon }
}