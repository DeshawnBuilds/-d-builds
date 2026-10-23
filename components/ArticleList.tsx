import Link from "next/link";
import { pillarByKey, type Article } from "@/data/site";

export default function ArticleList({ items }: { items: Article[] }) {
  if (items.length === 0) {
    return <p className="empty meta">Nothing published in this build yet.</p>;
  }
  return (
    <ol className="articles">
      {items.map((a, i) => (
        <li key={a.slug} className="article-row reveal">
          <Link href={`/writing/${a.slug}`} className="article-row__link">
            <span className="meta article-row__num">{String(i + 1).padStart(3, "0")}</span>
            <span className="meta article-row__pillar">{pillarByKey(a.pillar).short}</span>
            <span className="article-row__main">
              <span className="article-row__title">{a.title}</span>
              <span className="article-row__excerpt">{a.excerpt}</span>
            </span>
            <span className="meta article-row__status">{a.body ? "Read" : "In development"}</span>
          </Link>
        </li>
      ))}
    </ol>
  );
}
