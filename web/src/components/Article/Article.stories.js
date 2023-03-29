import { Success } from './Article'
import { standard } from '../ArticleCell/ArticleCell.mock'

export const full = () => {
  return <Success article={standard().article} />
}

export const summary = () => {
  return <Success article={standard().article} summary={true} />
}

export default { title: 'Components/Article' }
