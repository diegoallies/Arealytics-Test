import React from 'react';
import Edit from "../images/edit.png";
import Delete from "../images/delete.png";
import { Link } from 'react-router-dom';


export const Single = () => {
  return (
    <div className='single'>
        <div className="content">
            <img src="https://fastly.picsum.photos/id/982/200/200.jpg?hmac=X2ocb-PEJJpYgQn2Ib8SKCaWKsI-2hGcsvwZjWStNAw" alt="" />
        <div className="user">
            <img src="https://fastly.picsum.photos/id/404/1500/1500.jpg?hmac=F8e1BnOqXCgZcYjp1ITDqJ3uDeV8lYgPi-ZCoodiDLs" alt="" />
            <div className="info">
            <span>John</span>
            <p>posted 2 days ago</p>
        </div>
        <div className="edit">
            <Link to={`write?edit=2`}>
             <img src={Edit} alt="" />
            </Link>
           
            <img src={Delete} alt="" />
        </div>
        </div>
        <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, quas?</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi velit similique nemo, magnam cupiditate ipsam, illo blanditiis iste modi dicta atque. Officia libero quod sit beatae numquam praesentium reprehenderit. Sed est distinctio provident consequuntur repellendus. Nobis ipsa fugit doloremque deserunt error pariatur nesciunt, alias porro laborum quidem voluptatibus aut obcaecati temporibus esse modi commodi cum, omnis dolorem deleniti repellendus reprehenderit at. Voluptas eum quisquam necessitatibus fugit suscipit corrupti quibusdam nisi aspernatur, incidunt ipsum dolor eveniet laudantium quo expedita, debitis recusandae obcaecati quae optio laboriosam enim beatae. Consequatur, beatae molestias quae nisi iusto eligendi voluptatem ab deleniti numquam assumenda quod molestiae minima dolor ipsa, excepturi nesciunt minus harum. Ab officiis quod consequuntur laudantium dignissimos? Excepturi suscipit, distinctio accusantium molestias nesciunt, tempore vitae, minus rem dolorem consequatur earum similique? Vitae repellendus cumque modi, ex illum repellat assumenda magnam expedita. Pariatur inventore, excepturi nobis voluptate dolore non labore eveniet temporibus ab itaque unde, dolorum aperiam architecto nisi error, quaerat eaque quod. Nulla deleniti, impedit veritatis eaque iure cum nisi magni praesentium explicabo ut dignissimos doloribus, culpa a optio cumque rem aliquam. Quae, quis. Vero, ea! Enim, labore, perferendis eveniet impedit similique quia facere necessitatibus doloribus consequatur rerum aspernatur. Reprehenderit culpa aliquam corporis vitae cupiditate earum sunt illum, facere sed reiciendis accusamus officia exercitationem, ullam laboriosam obcaecati minima ratione atque possimus. Vitae nobis beatae expedita illo nihil! Consequatur earum repudiandae laudantium porro deleniti, dolorem ducimus, sunt debitis sit, omnis tenetur recusandae soluta minima sapiente amet. Numquam dignissimos a beatae quos ullam officiis quasi doloribus, quidem nam recusandae ut quod voluptatum laboriosam quam in temporibus, doloremque aspernatur ipsa asperiores error voluptas? Nam velit delectus, corrupti doloribus ea impedit ad accusamus molestias repellat aut sunt voluptas quisquam quia quibusdam. Labore ullam fugit impedit nesciunt mollitia maiores quam? Animi provident placeat quis veniam quasi eveniet enim, fuga hic nobis! Ipsa facilis soluta quia nobis iste, alias expedita perspiciatis pariatur laudantium ullam quidem esse impedit? Modi reiciendis vero labore repellat blanditiis alias quod facilis provident laborum ut, doloribus eius reprehenderit sequi quis dignissimos accusamus nobis doloremque odit commodi animi eaque velit. Fugiat porro odit, nesciunt voluptatum blanditiis quidem est, inventore laudantium alias facere fuga eius nihil illum quos unde, quas nostrum cum laboriosam vero. Repellat vero dolorum atque consequuntur sit quisquam, quidem laborum sapiente adipisci eum molestiae eligendi fugiat voluptate rem ex, culpa quibusdam voluptates voluptatum cumque nostrum qui, ullam totam doloribus! Quibusdam eum dolorum magni odio recusandae.</p>
        </div>
        <Menu />
    </div>
  )
}
