import PropTypes from 'prop-types'
function AnotherComponent({state}) {
    if(typeof state!== 'object'){
      state=[]
    }
  return (
    <div></div>
  )
}
AnotherComponent.propTypes={
    state:PropTypes.arrayOf(
      PropTypes.oneOfType(
        [PropTypes.string,PropTypes.number])
        )
}
export default AnotherComponent