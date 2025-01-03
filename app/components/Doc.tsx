import { FaEdit } from 'react-icons/fa'
import { DocTitle } from '~/components/DocTitle'
import { Markdown } from '~/components/Markdown'

export function Doc({
  title,
  content,
  repo,
  branch,
  filePath,
}: {
  title: string
  content: string
  repo: string
  branch: string
  filePath: string
}) {
  return (
    <div className="p-4 lg:p-6 overflow-auto w-full bg-white/70 dark:bg-black/30 m-2 md:m-4 xl:m-8 rounded-xl">
      {title ? <DocTitle>{title}</DocTitle> : null}
      <div className="h-4" />
      <div className="h-px bg-gray-500 opacity-20" />
      <div className="h-4" />
      <div className="prose prose-gray prose-sm prose-p:leading-7 dark:prose-invert max-w-none">
        <Markdown code={content} />
      </div>
      <div className="h-12" />
      <div className="w-full h-px bg-gray-500 opacity-30" />
      <div className="py-4 opacity-70">
        <a
          href={`https://github.com/${repo}/tree/${branch}/${filePath}`}
          className="flex items-center gap-2"
        >
          <FaEdit /> Edit on GitHub
        </a>
      </div>
      <div className="h-24" />
    </div>
  )
}
