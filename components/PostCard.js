import Link from "next/link";
export default function PostCard(props) {
  const { post } = props;
  return (
    <Link className="unstyled" href={`/content/${post.slug}`}>
      <div className="postCard">
        <h3>{post.title}</h3>
        <p>{post.bio}</p>
        <div className="statsContainer">
          <div>
            <h5>Date</h5>
            <p>{post.date}</p>
          </div>
          <div>
            <h5>Author</h5>
            <p>{post.author}</p>
          </div>
        </div>
      </div>
    </Link>
  );
}
