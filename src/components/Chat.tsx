"use client";

import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "./ui/card";
import { useChat } from "ai/react"
import { ScrollArea } from "./ui/scroll-area";

export function Chat(){

  const { messages, input, handleInputChange, handleSubmit} = useChat()

  return(
      <Card className="w-[440px]">

        <CardHeader>
          <CardTitle>Chat AI</CardTitle>
          <CardDescription>Using Vercel SDK to create a chat bot.</CardDescription>
        </CardHeader>

        <CardContent >
          <ScrollArea className="h-[640px] w-full space-y-4 pr-4">
            {messages.map(message => {
              return(
                <div key={message.id} className="flex gap-3 text-slate-600 text-sm mb-4">
                  {message.role === "user" && (
                    <Avatar>
                    <AvatarFallback>HG</AvatarFallback>
                    <AvatarImage src="https://github.com/Hayran-Guilherme.png"/>
                  </Avatar>
                  )}

                  {message.role === "assistant" && (
                    <Avatar>
                    <AvatarFallback>RS</AvatarFallback>
                    <AvatarImage src="https://github.com/rocketseat.png"/>
                  </Avatar>
                  )}

                  <p className="leading-relaxed">
                    <span className="block font-bold text-slate-700">
                      {message.role === "user" ? "User" : "AI"}:
                    </span>
                    {message.content}
                  </p>
                </div>
              );
            })}
          </ScrollArea>
        </CardContent>

        <CardFooter >
          <form className="flex w-full gap-2" onSubmit={handleSubmit}>
            <Input placeholder="How can i help you?" value={input} onChange={handleInputChange}/>
            <Button type="submit">Send</Button>
          </form>
        </CardFooter>

      </Card>
  );
}