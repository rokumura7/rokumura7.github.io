import { WorkCardProps } from '../components/components/molecules/WorkCard'

export const works = [
  {
    title: 'TicTakToe',
    url: '/works/tictactoe',
    detail: 'Implemented React Tutorial using TypeScript and tailwindcss.',
    ghUrl:
      'https://github.com/rokumura7/portfolio/tree/main/components/containers/pages/works/tictactoe',
    icons: ['react'],
    image: '/static/img/works/tictaktoe.png',
  },
  {
    title: 'Hungry Shark',
    url: 'https://scratch.mit.edu/projects/200882990/',
    detail:
      'Using SCRATCH, made a simple game. I was using it for instructing Programming for kids.',
    image: '/static/img/works/hungryShark.png',
  },
] as WorkCardProps[]
