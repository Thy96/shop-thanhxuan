import { useRouter } from "next/router";
import { useBlog } from "@/services/api";

function BlogDetail() {
  const router = useRouter();
  const { slug } = router.query;

  const { blog, isLoadingBlog } = useBlog(slug as string);

  if (isLoadingBlog) return <p>Loading...</p>;
  if (!blog) return <p>Không tìm thấy bài viết</p>;

  return (
    <div>
      <h1>{blog.title}</h1>
      <p>{blog.author?.fullName}</p>
    </div>
  );
}

export default BlogDetail;
