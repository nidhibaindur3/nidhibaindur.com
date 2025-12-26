import type { Project } from '@/data/projects';

type Props = {
  project: Project;
};

export default function ProjectPage({ project }: Props) {
  return (
    <main className="mx-auto max-w-4xl px-6 py-20">
      <h1 className="text-4xl font-semibold">{project.name}</h1>
      <p className="mt-4 text-zinc-400">{project.description}</p>

      <div className="mt-6 flex gap-2">
        {project.tags.map((tag) => (
          <span key={tag} className="rounded-full border border-zinc-700 px-3 py-1 text-xs">
            {tag}
          </span>
        ))}
      </div>

      {project.url && (
        <a
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-block text-blue-400"
        >
          Visit site →
        </a>
      )}
    </main>
  );
}
