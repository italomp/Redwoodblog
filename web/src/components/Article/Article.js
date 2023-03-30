import { Link, routes } from '@redwoodjs/router'
import CommentsCell from "src/components/CommentsCell"

const truncate = (text, lenght) => {
  return text.substring(0, lenght) + "..."
}

const Article = ({ article, summary = false }) => {
  return (
    <article>
      <header>
        <h2 className="text-xl text-blue-700 font-semibold">
          <Link to={routes.article({ id: article.id })}>{article.title}</Link>
        </h2>
      </header>
      <div className="mt-2 text-gray-900 font-light">
        {summary ? truncate(article.body, 100) : article.body}
      </div>
      {!summary && <CommentsCell />}
    </article>
  )
}

export default Article
