import { standard } from '../ArticleCell/ArticleCell.mock'

import Article from './Article'

export const full = () => {
  return <Article article={standard().article} />
}

export const summary = () => {
  return <Article article={standard().article} summary={true} />
}

export default { title: 'Components/Article' }
