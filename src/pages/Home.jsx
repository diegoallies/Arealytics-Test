import React from 'react'
import { Link } from 'react-router-dom' 

export const Home = () => {

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
    <div className='Home'>
        <div className="posts">
            {posts.map(post=>(
                <div className='post' key={post.id}>
                    <div className='img'>
                        <img src={post.img} alt="" />
                    </div>
                    <div className='content'>
                        <Link className='link' to ={`/post/${post.id}`}>
                            <h1>{post.title}</h1>
                            <p>{post.desc}</p>
                            <button>View More</button>
                        </Link>

                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}
