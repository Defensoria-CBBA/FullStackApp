import Image from 'next/image'
import { Inter } from 'next/font/google'
import Link from 'next/link'
import {useForm} from 'react-hook-form'
import { createEmployee, getAllScheds } from './api/backend.api' 
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import axios from 'axios'


const inter = Inter({ subsets: ['latin'] })

export default function Employee() {

 
    const {register, handleSubmit} = useForm();
    const router = useRouter();
    const onSubmit = handleSubmit(async data => {
        const res = await createEmployee(data)
        //console.log(res);

        if(res.status === 400){
            alert("Ha ocurrido un error al registrar el funcionario")
        }
        router.reload();
            
    })


    const handleAlert = () => {
        alert("Se ha registrado el funcionario ")
    };

    const [schedsAll, setScheds] = useState([]);

    useEffect(() => {
        async function loadData(){
            const res = await getAllScheds();
            console.log(res);
            setScheds(res.data);
        }
        loadData();
    }, [])

  return (
    
    <div className="mainFormContainer">
       <div className="circlesConatiner">
        <div className="big--circle">
                <div className="big--circle-content">
                </div>
                <div className="big--circle-content bottom: auto; top: auto; left: -50px; right: 0">
                </div>
                <div className="big--circle-content top: auto; bottom: auto; right: -50px">
                </div>
                <div className="big--circle-content top: auto; bottom: -50px">
                </div>
                <div className="mid--circle">
                    <div className="mid--circle-content">
                    </div>
                    <div className="mid--circle-content bottom: auto; top: auto; left: -35px; right: 0">
                    </div>
                    <div className="mid--circle-content top: auto; bottom: auto; right: -35px">
                    </div>
                    <div className="mid--circle-content top: auto; bottom: -35px">
                    </div>
                    <div className="small--circle">
                    <div className="small--circle-content">
                    </div>
                    <div className="small--circle-content bottom: auto; top: auto; left: -25px; right: 0">
                    </div>
                    <div 
                        className="small--circle-content top: auto; bottom: auto; right: -25px">
                    </div>
                    <div className="small--circle-content top: auto; bottom: -25px">
                    </div>
                    </div>
                </div>
            </div>
       </div>
       

        <div className="formSubContainer">
            <div className="formTitle">
                <div className="picContainer">
                    <div className="formssubTitle">
                        <h1>Registro de Funcionarios</h1>
                    </div>
                </div>
                
            </div>
            <form className="formMargins" onSubmit={onSubmit}>
            <input value={1} type="hidden" id="floating_first_name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " {...register("role", {required:true})} />
            <input value={1} type="hidden" id="floating_first_name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " {...register("status", {required:true})} />
               
            <div className="grid md:grid-cols-2 md:gap-6">
                    <div className="relative z-0 w-full mb-6 group">
                        <input type="text" id="floating_first_name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " {...register("email", {required:true})} />
                        <label htmlFor="floating_first_name" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email</label>
                    </div>
                    <div className="relative z-0 w-full mb-6 group">
                        <input type="password" id="floating_last_name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " {...register("password")} />
                        <label htmlFor="floating_last_name" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Password</label>
                    </div>
                </div>

                  
                <div className="grid md:grid-cols-2 md:gap-6">
                    <div className="relative z-0 w-full mb-6 group">
                        <input type="text" id="floating_first_name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " {...register("name", {required:true})} />
                        <label htmlFor="floating_first_name" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Nombre</label>
                    </div>
                    <div className="relative z-0 w-full mb-6 group">
                        <input type="text" id="floating_last_name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " {...register("secondName")} />
                        <label htmlFor="floating_last_name" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Segundo Nombre</label>
                    </div>
                </div>

                <div className="grid md:grid-cols-2 md:gap-6">
                    <div className="relative z-0 w-full mb-6 group">
                        <input type="text" id="floating_first_name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " {...register("lastName", {required:true})}/>
                        <label htmlFor="floating_first_name" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Apellido Paterno</label>
                    </div>
                    <div className="relative z-0 w-full mb-6 group">
                        <input type="text" id="floating_last_name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" "  {...register("secondLastName")}/>
                        <label htmlFor="floating_last_name" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Apellido Materno</label>
                    </div>
                </div>

                <div className="grid md:grid-cols-2 md:gap-6">
                    <div className="relative z-0 w-full mb-6 group">
                        <input type="number" id="floating_phone" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " {...register("phone", {required:true})} />
                        <label htmlFor="floating_phone" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Número de Teléfono</label>
                    </div>
                    <div className="relative z-0 w-full mb-6 group">
                        <input type="text" id="floating_company" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " {...register("ci", {required:true})} />
                        <label htmlFor="floating_company" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">C.I.</label>
                    </div>
                </div>

                <div className="relative z-0 w-full mb-6 group">
                    <select  id="cars" {...register("schedule_id" , {required:true})}>
                            {schedsAll.map((scheds) => (
                                <option value={scheds.id}>{scheds.name}</option>
                            ))}
                        </select>
                </div>
                     

                <button onClick={handleAlert} type="submit" className="text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-800" >Registrar</button>
                <Link href={"/datatable"}>Ver Todos</Link>
            </form>
        
        </div>
    </div>
  )
}
