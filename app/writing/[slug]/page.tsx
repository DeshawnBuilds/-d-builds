import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { articles, pillarByKey } from "@/data/site";
import Newsletter from "@/components/Newsletter";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = articles.find((a) => a.slug === slug);
  if (!article) return {};
  return { title: article.title, description: article.excerpt };
}

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params;
  const article = articles.find((a) => a.slug === slug);
  if (!article) notFound();
  const pillar = pillarByKey(article.pillar);

  return (
    <>
      <article className="article">
        <div className="container article__inner">
          <p className="meta article__crumbs">
            <Link href="/writing">Writing</Link> <span className="dim">/</span>{" "}
            <Link href={pillar.href}>{pillar.title}</Link>
          </p>
          <h1 className="article__title">{article.title}</h1>
          <p className="article__excerpt">{article.excerpt}</p>
          {article.body ? (
            <div className="article__body">
              {article.date && <p className="meta article__date">{article.date}</p>}
              {article.body.map((para, i) =>
                para.startsWith("## ") ? (
                  <h2 key={i}>{para.slice(3)}</h2>
                ) : (
                  <p key={i}>{para}</p>
                ),
              )}
              {article.originalUrl && (
                <p className="meta article__original">
                  <a href={article.originalUrl} target="_blank" rel="noopener">
                    Also on X <span aria-hidden="true">↗</span>
                  </a>
                </p>
              )}
            </div>
          ) : (
            <div className="article__pending">
              <p className="meta">
                <span className="dot" aria-hidden="true" /> In development
              </p>
              <p>
                This piece is still being written. It will be published here when it&rsquo;s
                ready—follow the build to know when.
              </p>
            </div>
          )}
        </div>
      </article>
      <Newsletter />
    </>
  );
}
