export default function Event({name, description, date}) {

  return (
    <>
    <ul>
      <li>{name}</li>
      <li>{description}</li>
      <li>{date}</li>
    </ul>
    </>
  )
}
