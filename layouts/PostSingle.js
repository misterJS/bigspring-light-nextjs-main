import { markdownify } from "@lib/utils/textConverter";
import config from "@config/config.json";
import shortcodes from "@shortcodes/all";
import { MDXRemote } from "next-mdx-remote";
import Image from "next/image";
import Base from "./Baseof";
import { convertISOTime } from "@lib/converter";
import Link from "next/link";

const PostSingle = ({ frontmatter, content, mdxContent, posts }) => {
  let { description, title, image, date } = frontmatter;
  description = description ? description : content.slice(0, 120);
  const { blog_folder } = config.settings;
  const shuffledArray = posts.sort(() => Math.random() - 0.5); // Shuffle the array randomly
  const recommended = shuffledArray.slice(0, 3);
  console.log(recommended);

  return (
    <Base title={title} description={description}>
      <section className="section">
        <div className="container">
          <div className="row">
            <article className="col-12 mx-auto text-center md:col-8">
              {image && (
                <Image
                  src={image}
                  height="500"
                  width="1000"
                  alt={title}
                  priority={true}
                  layout="responsive"
                  className="rounded-lg"
                />
              )}
              {markdownify(title, "h1", "h2 mb-6 mt-6 text-left")}

              <div className="content mb-16 text-left">
                <MDXRemote {...mdxContent} components={shortcodes} />
              </div>
              <>{convertISOTime(date)}</>
              <h3 className="h3 font-normal text-[30px] mt-2 text-left -mb-12">More Article</h3>
              <div className="section row pb-0">
                {recommended.map((post, i) => (
                  <div
                    key={`key-${i}`}
                    className="col-12 mb-8 sm:col-6 lg:col-4"
                  >
                    {post.frontmatter.image && (
                      <Image
                        className="rounded-lg"
                        src={post.frontmatter.image}
                        alt={post.frontmatter.title}
                        width={i === 0 ? "925" : "445"}
                        height={i === 0 ? "475" : "230"}
                      />
                    )}
                    <h2 className="h3 mb-2 mt-4">
                      <Link
                        href={`/${blog_folder}/${post.slug}`}
                        className="block hover:text-primary"
                      >
                        {post.frontmatter.title}
                      </Link>
                    </h2>
                    <p className="text-text">{post.frontmatter.desc}</p>
                    <Link
                      className="btn btn-primary mt-4"
                      href={`/${blog_folder}/${post.slug}`}
                      rel=""
                    >
                      Read More
                    </Link>
                  </div>
                ))}
              </div>
            </article>
          </div>
        </div>
      </section>
    </Base>
  );
};

export default PostSingle;
