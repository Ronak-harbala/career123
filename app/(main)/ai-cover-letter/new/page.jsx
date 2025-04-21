import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import CoverLetterGenerator from "../_components/cover-letter-generator";

export default function NewCoverLetterPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <div className="mb-8">
        <Link href="/ai-cover-letter">
          <Button variant="link" className="gap-2 pl-0 text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-300">
            <ArrowLeft className="h-4 w-4" />
            Back to Cover Letters
          </Button>
        </Link>
        
        <div className="mt-6 bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-slate-800 dark:to-slate-900 rounded-xl p-8 shadow-sm">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400 bg-clip-text text-transparent">
            Create Cover Letter
          </h1>
          <p className="text-gray-600 dark:text-gray-300 mt-3 text-lg">
            Generate a tailored cover letter for your job application
          </p>
        </div>
      </div>

      <div className="bg-white dark:bg-slate-950 rounded-xl shadow-sm p-6">
        <CoverLetterGenerator />
      </div>
    </div>
  );
}