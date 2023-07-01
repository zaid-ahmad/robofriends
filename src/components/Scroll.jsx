/* eslint react/prop-types: 0 */

const Scroll = (props) => {
  return (
    <>
      <div
        style={{
          overflowY: 'scroll',
          border: '2px solid black',
          height: '550px',
        }}
      >
        {props.children}
      </div>
    </>
  )
}

export default Scroll
