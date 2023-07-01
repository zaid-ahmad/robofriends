/* eslint react/prop-types: 0 */
import Card from './Card'

const CardList = ({ robots }) => {
  return (
    <>
      {robots.map((user, i) => {
        return (
          <Card
            id={robots[i].id}
            name={robots[i].name}
            email={robots[i].email}
            key={i}
          />
        )
      })}
    </>
  )
}

export default CardList
