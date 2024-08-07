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
            
            const question = completion.choices[0].message?.content;
            
            logger.info('Question generated: ' + question); 
            return question
        }catch(error){
            console.log(error);

            return error
        }
    }
}

export async function generateAnswer(prompt: string) {
    if (!prompt) {
        return NextResponse.json({ error: "Prompt is required" });
    }else{
        try{
            const completion = await openai.chat.completions.create({
                model: "gpt-4o-mini",
                messages: [
                    { role: "user", content: `Choose the correct answer to this question and provide the answer with the correct variant: ${prompt}. Do not provide additional text.` }
                ],
            });   
            
            const answer = completion.choices[0].message?.content;
            
            logger.info('Answer generated: ' + answer);
            return answer
        }catch(error){
            console.log(error);

            return error
        }
    }
}