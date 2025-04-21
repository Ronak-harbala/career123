"use client";

import { Trophy, CheckCircle2, XCircle, BarChart, ArrowRight, Lightbulb } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CardContent, CardFooter } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

export default function QuizResult({
  result,
  hideStartNew = false,
  onStartNew,
}) {
  if (!result) return null;

  // Determine score color based on result
  const getScoreColorClass = (score) => {
    if (score >= 80) return "text-green-600";
    if (score >= 60) return "text-amber-500";
    return "text-red-500";
  };

  // Determine progress color based on score
  const getProgressColor = (score) => {
    if (score >= 80) return "bg-green-500";
    if (score >= 60) return "bg-amber-500";
    return "bg-red-500";
  };

  return (
    <div className="mx-auto">
      <div className="flex items-center justify-between mb-6">
        <h1 className="flex items-center gap-2 text-3xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
          <Trophy className="h-8 w-8 text-amber-500" />
          Quiz Results
        </h1>
        <div className="bg-gradient-to-r from-indigo-100 to-purple-100 px-4 py-2 rounded-full">
          <span className="font-medium text-indigo-800">
            {result.questions.filter(q => q.isCorrect).length} / {result.questions.length} correct
          </span>
        </div>
      </div>

      <CardContent className="space-y-8 px-0">
        {/* Score Overview */}
        <div className="bg-gradient-to-r from-indigo-50 to-purple-50 p-6 rounded-xl">
          <div className="flex flex-col sm:flex-row items-center justify-between mb-4 gap-4">
            <div className="flex items-center gap-3">
              <BarChart className="h-6 w-6 text-indigo-600" />
              <h3 className="text-lg font-medium text-gray-700">Score Overview</h3>
            </div>
            <div className={`text-4xl font-bold ${getScoreColorClass(result.quizScore)}`}>
              {result.quizScore.toFixed(1)}%
            </div>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
            <div 
              className={`h-3 ${getProgressColor(result.quizScore)}`}
              style={{ width: `${result.quizScore}%` }}
            ></div>
          </div>
        </div>

        {/* Improvement Tip */}
        {result.improvementTip && (
          <div className="bg-amber-50 border border-amber-200 p-5 rounded-xl">
            <div className="flex items-start gap-3">
              <Lightbulb className="h-6 w-6 text-amber-500 flex-shrink-0 mt-1" />
              <div>
                <p className="font-semibold text-amber-800 mb-1">Improvement Tip</p>
                <p className="text-amber-700">{result.improvementTip}</p>
              </div>
            </div>
          </div>
        )}

        {/* Questions Review */}
        <div className="space-y-5">
          <h3 className="text-xl font-bold flex items-center gap-2 px-1">
            Question Review
          </h3>
          {result.questions.map((q, index) => (
            <div 
              key={index} 
              className={`border-l-4 ${q.isCorrect ? 'border-l-green-500' : 'border-l-red-500'} bg-white shadow-sm hover:shadow-md transition-shadow rounded-lg p-5 space-y-4`}
            >
              <div className="flex items-start justify-between gap-4">
                <h4 className="font-medium text-gray-800">Q{index + 1}: {q.question}</h4>
                {q.isCorrect ? (
                  <CheckCircle2 className="h-6 w-6 text-green-500 flex-shrink-0" />
                ) : (
                  <XCircle className="h-6 w-6 text-red-500 flex-shrink-0" />
                )}
              </div>
              
              <div className="pl-4 border-l border-gray-200 space-y-2">
                <div className="flex items-center gap-2">
                  <span className="text-sm font-medium text-gray-500">Your answer:</span>
                  <span className={`text-sm ${q.isCorrect ? 'text-green-600 font-medium' : 'text-red-600'}`}>
                    {q.userAnswer}
                  </span>
                </div>
                
                {!q.isCorrect && (
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-medium text-gray-500">Correct answer:</span>
                    <span className="text-sm text-green-600 font-medium">{q.answer}</span>
                  </div>
                )}
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="font-medium text-gray-700 mb-1">Explanation:</p>
                <p className="text-gray-600 text-sm">{q.explanation}</p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>

      {!hideStartNew && (
        <CardFooter className="px-0 mt-6">
          <Button 
            onClick={onStartNew} 
            className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-medium rounded-lg py-6"
          >
            <span className="flex items-center gap-2">
              Start New Quiz 
              <ArrowRight className="h-4 w-4" />
            </span>
          </Button>
        </CardFooter>
      )}
    </div>
  );
}