import React from 'react'

async function getData() {
  return {
    message: "This is a static page"
  }

}

const Static = async () => {
  const data = await getData()
  return (
    <div id='message'>{data.message}</div>
  )
}

export default Static