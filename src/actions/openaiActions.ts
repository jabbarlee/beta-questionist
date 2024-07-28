"use server";

import { openai } from "../config/openaiConfig";
import { NextResponse, NextRequest } from "next/server";

export async function sendPrompt(prompt: string) {
    try{
        const completion = await openai.chat.completions.create({
            model: "gpt-3.5-turbo",
            messages: [{ role: "user", content: prompt }],
        });   
        
        const answer = completion.choices[0].message?.content;

        return NextResponse.json({ answer });
    }catch(error){
        return NextResponse.json({ error: "Failed to generate answer", errorMessage:error });
    }
}