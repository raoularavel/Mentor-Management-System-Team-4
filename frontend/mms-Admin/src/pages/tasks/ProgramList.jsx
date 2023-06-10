import TabView from 'src/components/tabs/TabView'
import ProgramItem from './ProgramItem'
import ProgramItemView from './ProgramItemView'

export default function ProgramList() {

  const programs = (new Array(50)).fill(0).map((v, index) => ({
    index,
    name: <ProgramItem />,
    component: <ProgramItemView />
  }))
  return (

    <TabView
      tabs={programs}
      orientation="vertical"
    />
  )
}
