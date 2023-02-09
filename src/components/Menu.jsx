import React from 'react'

export const Menu = () => {

    const posts = [
        {
            id:1,
            title: "Random",
            desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima, a. Qui consequatur fugiat, ipsa pariatur magni officia repellat. Sunt quaerat iure magni consequatur, eveniet neque nesciunt sequi a suscipit corporis!",
            img: "https://fastly.picsum.photos/id/404/1500/1500.jpg?hmac=F8e1BnOqXCgZcYjp1ITDqJ3uDeV8lYgPi-ZCoodiDLs"
        },
        {
            id:2,
            title: "tests",
            desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima, a. Qui consequatur fugiat, ipsa pariatur magni officia repellat. Sunt quaerat iure magni consequatur, eveniet neque nesciunt sequi a suscipit corporis!",
            img: "https://fastly.picsum.photos/id/404/1500/1500.jpg?hmac=F8e1BnOqXCgZcYjp1ITDqJ3uDeV8lYgPi-ZCoodiDLs"
        },
        {
            id:3,
            title: "hahhaa",
            desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima, a. Qui consequatur fugiat, ipsa pariatur magni officia repellat. Sunt quaerat iure magni consequatur, eveniet neque nesciunt sequi a suscipit corporis!",
            img:"https://fastly.picsum.photos/id/404/1500/1500.jpg?hmac=F8e1BnOqXCgZcYjp1ITDqJ3uDeV8lYgPi-ZCoodiDLs"
        },
        {
            id:4,
            title: "fish",
            desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima, a. Qui consequatur fugiat, ipsa pariatur magni officia repellat. Sunt quaerat iure magni consequatur, eveniet neque nesciunt sequi a suscipit corporis!",
            img: "https://fastly.picsum.photos/id/404/1500/1500.jpg?hmac=F8e1BnOqXCgZcYjp1ITDqJ3uDeV8lYgPi-ZCoodiDLs"
        },
    
    ]

  return (
    <div className="menu">
        <h1>Other posts you may like</h1>

        {posts.map(post=>(
            <div className="post" key={post.id}></div>
        ))}
    </div>
  )
}
