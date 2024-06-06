import movie from "@/models/movie";
import dbConnect from "@/utils/dbConn";
import { NextResponse } from "next/server";
import fs from 'fs';
import { writeFile } from 'fs/promises'
import path from 'path';


export  async function POST(req){
    try{
        let data = await req.formData();

        console.log(data);
        let obj = {};

        for(let [name,value] of data){
            if(name !== "image")
            obj[name] = value;
        }
        // retur
        console.log(obj);
        await dbConnect();
        let file= data.get("image");
        const bytes = await file.arrayBuffer()
         const buffer = Buffer.from(bytes)
        
        const filePath = path.join(process.cwd(), 'public', 'uploads', `${file.name}`);
        
        await writeFile(filePath, buffer);
        obj["image"] = path.join('/public', 'uploads', `${file.name}`);
        

        await movie.create(obj);

        return NextResponse.json({msg:"done"}, {status:200});

    }
    catch(e){
        console.log(e);
        return NextResponse.json({msg:"some error ocurred"}, {status:500});
    }
    

}