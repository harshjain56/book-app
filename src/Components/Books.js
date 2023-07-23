import React from "react";
import { useState,useEffect } from "react";
import axios from "axios";

const Books =({querry})=>{

    let [books,setBooks] =useState([])

    useEffect(() => {
        async function fetchData1() {
            try{
                let response = await axios.get("https://www.googleapis.com/books/v1/volumes?q=harry+potter")
                setBooks((prevdata)=>([...prevdata , ...response.data.items]))
            }
           catch(error){
                console.log("Erro while fetching data:" , error)
           }
         
        }
        async function fetchData2() {
            try{
                let response = await axios.get("https://www.googleapis.com/books/v1/volumes?q=Sherlock+Holmes")
                setBooks((prevdata)=>([...prevdata , ...response.data.items]))
            }
           catch(error){
                console.log("Erro while fetching data:" , error)
           }
         
        }
        fetchData1()
        fetchData2()
      }, [])
    
    

    
      useEffect(() => {
        if(querry!==""){
            async function fetchData() {
                let response = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=${querry}`)
                setBooks([...response.data.items])
              }
              fetchData()
        }
        
      }, [querry])

   
   return(
        <div>
            {
                books.length>0 ? (
                    books.map((book,index)=>(<img src={book.volumeInfo.imageLinks.smallThumbnail} key={index}/>))
                ):(<div>
                    we are fetching wait
                </div>)
            }
        </div>
   )  
}

export default Books