"use client";

"text-amber-100 text-amber-200 text-amber-300 text-amber-400 text-amber-500 text-amber-600 text-amber-700 text-amber-800 text-amber-900"

import DecisionCard from "@/components/decisionCard"
import Decisions from "@/utils/decisions"
import { useState } from "react"


export default function Home() {
  const scenario = "you stumbled across a dead body in the woods..."
  const [decisions, setDecisions] = useState([])
  const [previousDecisions, setPreviousDecisions] = useState("init")

  return (
    <main className="flex min-h-screen flex-col items-center gap-10 p-24 bg-slate-900 text-slate-400">
      <h1 className="text-6xl font-bold text-slate-200">Stormy mode</h1>
      <div className="text-4xl font-medium">{scenario}</div>
      <div className="flex gap-4 flex-wrap">{
        decisions.map((decision, index) => {
          return (
            <div className={
              `text-amber-${index * 100 + 100} text-xl font-medium`
            } key={index}>{decision} -&gt;</div> 
           
          )
        })
      }</div>
      <div className="text-3xl font-medium">wtf will you do now?</div>
      <div className="w-full">
        <div className="grid grid-cols-3 gap-4">
          {
            Decisions[previousDecisions].options.map((option, index) => {
              const decisionNode = Decisions[option]
              return (
                <DecisionCard
                  key={index}
                  title={option}
                  description={decisionNode.description}
                  setPreviousDecisions={setPreviousDecisions}
                  setDecisions={setDecisions}
                />
              )
            })
          }
        </div>
      </div>
    </main>
  )
}
