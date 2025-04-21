import { getCoverLetters } from "@/actions/cover-letter";
import Link from "next/link";
import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import CoverLetterList from "./_components/cover-letter-list";

export default async function CoverLetterPage() {
  const coverLetters = await getCoverLetters();

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-slate-800 dark:to-slate-900 rounded-xl p-6 mb-8 shadow-sm">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400 bg-clip-text text-transparent mb-2">
              My Cover Letters
            </h1>
            <p className="text-gray-600 dark:text-gray-300">
              Manage and create professional cover letters
            </p>
          </div>
          <Link href="/ai-cover-letter/new">
            <Button className="bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg px-5 py-2 transition-all">
              <Plus className="h-4 w-4 mr-2" />
              Create New
            </Button>
          </Link>
        </div>
      </div>

      <div className="bg-white dark:bg-slate-950 rounded-xl shadow-sm p-6">
        <CoverLetterList coverLetters={coverLetters} />
      </div>
    </div>
  );
}