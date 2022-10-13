import getArticles from '../api/articles.api'
import Layout from '../components/Layout'
import { useState, useEffect } from 'react'
import ArticleBlock from '../components/ArticleBlock'

const HomePage = () => {
  const [articles, setArticles] = useState<any[]>([])
  useEffect(() => {
    getArticles().then(data => {
      setArticles(data)
    })
  }, [])
  console.log('All Articles:', articles)
  return (
    <Layout title="DEV Community 👩‍💻👨‍💻">
      <div className='grid grid-cols-7'>
        <div className='col-span-2'>Hello World</div>
        <div className='col-span-5'>
          <div className='flex space-x-2 text-[1.2rem] font-semibold'>
            <div className='cursor-pointer hover:text-blue-700 px-2 py-2 mb-2 sm:hover:bg-white rounded-md'>Latest</div>
            <div className='cursor-pointer hover:text-blue-700 px-2 py-2 mb-2 sm:hover:bg-white rounded-md'>Top</div>
          </div>
          <div className='flex flex-col space-y-2'>
            {articles.map(article => {
              return (
                <div key={article.id}>
                  <ArticleBlock article={article} />
                </div>
              )
            })}
          </div>

        </div>
        <div></div>
      </div>
    </Layout>
  )
}

export default HomePage

