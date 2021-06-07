import Event from './Event'
export default function History() {

  const history = [
    {name: 'курнуть', description: 'description', date: 'random data',},
    {name: 'погулять', description: 'погулять', date: 'random data',}
  ]

  return (
    <>
    <div className="container">
      <ul className="history">
        {history.map(event => <Event name={event.name} description={description} date={date}/>)}
      </ul>
    </div>
    </>
  )
}
