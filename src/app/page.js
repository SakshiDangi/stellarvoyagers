import styles from './home.module.scss'
import React from 'react';
import dynamic from 'next/dynamic';
import SmoothScroll from '@/components/smoothScroll';
import Projects from '@/components/projects';
import Dashboard from '@/components/dashboard/dashboard';
import Blog from './blog/page';
import About from './about/page';

const Earth = dynamic(() => import('@/components/earth'), {
  ssr: false,
  loading: () => <img src="/assets/placeholder.png"></img>
})

export default function Home() {
  return (
    <div>
    <Dashboard />
    <SmoothScroll>
      <main className={styles.main}>
        <Earth />
        <Projects />
      </main>
    </SmoothScroll>
    <Blog />
    <About />
    </div>
  )
}