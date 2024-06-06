import Contact from "@/models/contact";
import dbConnect from "@/utils/dbConn";
import { NextResponse } from "next/server";

export async function POST(req){

    try{
    await dbConnect();
    const data= await req.json();
    console.log(data);
    await Contact.create({...data});
    

    return NextResponse.json({msg:"done"}, {
        status:200
    })
    }
    catch(err) {
        console.log(err);
        return NextResponse.json({msg:"some error occured"},{
        status:200
    })
}
}