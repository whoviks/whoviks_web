import { allProjects } from "contentlayer/generated";
import { Navigation } from "../components/nav";
import { ProjectsView } from "./ProjectsView";

export const dynamic = "force-dynamic";

export default async function ProjectsPage() {
  const sorted = allProjects
    .filter((p) => p.published)
    .sort(
      (a, b) =>
        new Date(b.date ?? Number.POSITIVE_INFINITY).getTime() -
        new Date(a.date ?? Number.POSITIVE_INFINITY).getTime()
    );

  return (
    <div className="relative pb-16">
      <Navigation />
      <ProjectsView projects={sorted} />
    </div>
  );
}
