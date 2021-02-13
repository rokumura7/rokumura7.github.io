import { WorkCardProps } from '../components/components/molecules/WorkCard'

export const works = [
  {
    title: 'TicTakToe',
    url: '/works/tictactoe',
    detail: 'work_tictactoe_description',
    ghUrl:
      'https://github.com/rokumura7/portfolio/tree/main/components/containers/pages/works/tictactoe',
    icons: ['react', 'typescript', 'git'],
    image: '/static/img/works/tictaktoe.png',
  },
  {
    title: 'Hungry Shark',
    url: 'https://scratch.mit.edu/projects/200882990/',
    detail: 'work_hungryshark_description',
    image: '/static/img/works/hungryShark.png',
  },
] as WorkCardProps[]
