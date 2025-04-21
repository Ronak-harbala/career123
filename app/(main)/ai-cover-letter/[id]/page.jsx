import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { getCoverLetter } from "@/actions/cover-letter";
import CoverLetterPreview from "../_components/cover-letter-preview";

export default async function EditCoverLetterPage({ params }) {
  const { id } = await params;
  const coverLetter = await getCoverLetter(id);

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <div className="mb-6">
        <Link href="/ai-cover-letter">
          <Button variant="link" className="gap-2 pl-0 text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300">
            <ArrowLeft className="h-4 w-4" />
            Back to Cover Letters
          </Button>
        </Link>
      </div>

      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-slate-800 dark:to-slate-900 rounded-lg p-6 mb-8">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400 bg-clip-text text-transparent">
          {coverLetter?.jobTitle} at {coverLetter?.companyName}
        </h1>
        <div className="h-1 w-24 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full mt-4"></div>
      </div>

      <div className="bg-white dark:bg-slate-950 rounded-lg shadow-sm p-6 border border-gray-100 dark:border-gray-800">
        <CoverLetterPreview content={coverLetter?.content} />
      </div>
    </div>
  );
}