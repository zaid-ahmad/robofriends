/* eslint react/prop-types: 0 */
const Card = ({ name, email, id }) => {
  return (
    <>
      <div className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
        <img src={`https://robohash.org/${id}?200x200`} alt='robot jane' />
        <div>
          <h2>{name}</h2>
          <p>{email}</p>
        </div>
      </div>
    </>
  )
}

export default Card
