import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";

import Navbar from "./Navbar";
import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";
import handler from "../../api/medium";


const MEDIUM_API =
  "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@sujaybuilds";

const Blog = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, []);

  useEffect(() => {
    let isMounted = true;

    fetch("/api/medium")
      .then((res) => res.text())
      .then((xml) => {
        const parser = new DOMParser();
        const data = parser.parseFromString(xml, "text/xml");

        const items = [...data.querySelectorAll("item")].slice(0, 9);

        const formatted = items.map((item) => {
          const title = item.querySelector("title")?.textContent || "";
          const link = item.querySelector("link")?.textContent || "";
          const pubDate = item.querySelector("pubDate")?.textContent || "";
          const description =
            item.querySelector("description")?.textContent || "";

          const imageMatch = description.match(/<img.*?src="(.*?)"/);
          const image = imageMatch ? imageMatch[1] : null;

          const text = description.replace(/<[^>]+>/g, "").slice(0, 130);

          return {
            title,
            slug: link,
            coverImage: { url: image },
            excerpt: text ? `${text}...` : "",
            date: pubDate
              ? new Date(pubDate).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "short",
                  day: "numeric",
                })
              : null,
          };
        });

        if (isMounted) setPosts(formatted);
      })
      .catch((err) => {
        if (isMounted) setHasError(true);
        console.error(err);
      })
      .finally(() => {
        if (isMounted) setLoading(false);
      });

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <div className="relative z-0 bg-primary min-h-screen">
      <Navbar />

      <section className="pt-28 pb-16 sm:px-16 px-6 max-w-7xl mx-auto">
        <motion.div
          variants={textVariant()}
          initial="hidden"
          animate="show"
          className="text-center"
        >
          <p className={styles.sectionSubText}>Insights and Builds</p>
          <h1 className={styles.sectionHeadText}>Latest Articles.</h1>
        </motion.div>

        <motion.p
          variants={fadeIn("", "", 0.1, 0.9)}
          initial="hidden"
          animate="show"
          className="mt-4 text-secondary text-[17px] max-w-3xl mx-auto text-center leading-[30px]"
        >
          Notes from my engineering journey: practical patterns, architecture
          choices, and lessons from building AI and full-stack products.
        </motion.p>

        {loading && (
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-7">
            {Array.from({ length: 6 }).map((_, idx) => (
              <div
                key={idx}
                className="h-[360px] rounded-3xl bg-tertiary/50 animate-pulse border border-white/5"
              />
            ))}
          </div>
        )}

        {!loading && hasError && (
          <div className="mt-16 text-center text-secondary">
            Could not load blogs right now. Please try again in a moment.
          </div>
        )}

        {!loading && !hasError && (
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-7">
            {posts.map((post, index) => (
              <motion.a
                key={post.slug}
                variants={fadeIn("up", "spring", index * 0.08, 0.7)}
                initial="hidden"
                animate="show"
                href={post.slug}
                target="_blank"
                rel="noreferrer"
                className="group block h-full rounded-3xl overflow-hidden bg-tertiary/85 border border-white/10 hover:border-[#915eff]/50 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="h-[200px] w-full overflow-hidden bg-black-200">
                  {post.coverImage?.url ? (
                    <img
                      src={post.coverImage.url}
                      alt={post.title}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                  ) : (
                    <div className="h-full w-full bg-gradient-to-br from-[#1b1733] to-[#101522] flex items-center justify-center px-4">
                      <p className="text-white/70 text-center text-sm">
                        No cover image
                      </p>
                    </div>
                  )}
                </div>

                <div className="p-5">
                  {post.date && (
                    <p className="text-[12px] uppercase tracking-wide text-secondary/90 mb-3">
                      {post.date}
                    </p>
                  )}

                  <h2
                    className="text-white font-semibold text-[20px] leading-snug min-h-[56px]"
                    style={{
                      display: "-webkit-box",
                      WebkitLineClamp: 2,
                      WebkitBoxOrient: "vertical",
                      overflow: "hidden",
                    }}
                  >
                    {post.title}
                  </h2>

                  <p
                    className="mt-3 text-secondary text-[14px] leading-6 min-h-[72px]"
                    style={{
                      display: "-webkit-box",
                      WebkitLineClamp: 3,
                      WebkitBoxOrient: "vertical",
                      overflow: "hidden",
                    }}
                  >
                    {post.excerpt}
                  </p>

                  <div className="mt-5 inline-flex items-center text-sm font-semibold text-[#b8a4ff] group-hover:text-[#d1c3ff] transition-colors">
                    Read article
                  </div>
                </div>
              </motion.a>
            ))}
          </div>
        )}
      </section>
    </div>
  );
};

export default Blog;
