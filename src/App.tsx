import { Post } from "./components/posts/Post";
import { Header } from "./components/header/Header";
import { Sidebar } from "./components/sidebar/Sidebar";

import styles from "./App.module.css";

import "./style/global.css";

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/Lucasdias067.png',
      name: "Lucas Dias",
      role: "Web Dev"
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋' },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },
      { type: 'link', content: 'Lucasdias067/doctorcare' },
    ],
    publishedAt: new Date('2022-10-19 10:00:00')
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/truediogo.png',
      name: "Diogo Silva",
      role: "Web Dev"
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋' },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },
      { type: 'link', content: 'truediogo/doctorcare' },
    ],
    publishedAt: new Date('2022-10-20 15:45:22')
  },
]

export function App() {
  return (
    <>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post => {
            return (
              <Post
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            )
          })}
        </main>
      </div>
    </>
  );
}
