"use server";

import { logger } from "@/config/loggerConfig";
import { openai } from "../config/openaiConfig";
import { NextResponse, NextRequest } from "next/server";

export async function generatePrompt(prompt: string) {
    console.log(prompt);
    if (!prompt) {
        return NextResponse.json({ error: "Prompt is required" });
    }else{
        try{
            const completion = await openai.chat.completions.create({
                model: "gpt-4o-mini",
                messages: [
                    { role: "system", content: `
                        You are a helpful assistant that generates SAT questions based on a given difficulty,
                        topics and question type. Only provide the question, without the answer.
                    ` },
                    { role: "user", content: prompt }
                ],
            });   
            
            const answer = completion.choices[0].message?.content;
            
            logger.info('Answer generated: ' + answer);
            return answer
            // return NextResponse.json({ answer });
        }catch(error){
            console.log(error);

            return error
            // return NextResponse.json({ error: "Failed to generate answer", errorMessage:error });
        }
    }
}