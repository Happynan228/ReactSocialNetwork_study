
// const Users = (props) => {
  // if (props.users.length === 0) {
  //   axios.get('https://social-network.samuraijs.com/api/1.0/users')
  //        .then(response=>{
  //         props.setUsers(response.data.items)
  //        })

  // }
//   return (
// <div>
//   {props.users.map((u) => (
//     <div key={u.id}>
//       <span>
//         <div className={s.photo}>
//           <img src={u.photos.small != null ?  u.photos.small :  UserIcon  } alt="Avatar" />
//         </div>
//         <div>
//           {u.followed ? (
//             <button
//               onClick={() => {
//                 props.follow(u.id);
//               }}
//             >
//               Follow
//             </button>
//           ) : (
//             <button
//               onClick={() => {
//                 props.follow(u.id);
//               }}
//             >
//               Unfollow
//             </button>
//           )}
//         </div>
//       </span>
//       <span>
//         <div>{u.name}</div>
//         <div>{u.status}</div>
//       </span>
//       <span>
//         <div>{"u.location.sity"}</div>
//         <div>{"u.location.country"}</div>
//       </span>

//       <span></span>
//     </div>
//   ))}
// </div>
//   );
// };




export default UsersAPI;
