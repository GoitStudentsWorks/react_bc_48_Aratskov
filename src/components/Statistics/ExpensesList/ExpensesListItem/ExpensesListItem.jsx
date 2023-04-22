// import s from './ExpensesListItem.module.css';
// import icons from '../../../../assets/icons/sprite.svg';
// // import { useState } from 'react';
// import { ModalEditTransaction } from 'components/ModalEditTransaction/ModalEditTransaction';
// import { usePopup } from 'hooks/usePopup';

// const ExpensesListItem = ({ item, onDeleteItem }) => {
//   const { show, showPopup, closePopup } = usePopup();

//   console.log();
//   return (
//     <>
//       <li className={s.list}>
//         <ul className={s.colum}>
//           <li>
//             <ul>
//               <li
//                 style={{
//                   color: 'rgba(243, 243, 243, 0.3)',
//                   fontSize: '12px',
//                   lineHeight: '14px',
//                 }}
//               >
//                 {item.month}
//               </li>
//               <li>{item.name}</li>
//             </ul>
//           </li>
//           <li>{item.prise} UAH</li>
//         </ul>
//         <ul className={s.colum}>
//           <li className={s.categorie} style={{}}>
//             {item.categorie}
//           </li>
//           <li>
//             <ul className={s.colum_icons}>
//               <li>
//                 <div onClick={showPopup}>
//                   <svg className={s.icon}>
//                     <use href={`${icons}#icon-pen`}></use>
//                   </svg>
//                   <ModalEditTransaction show={show} onClose={closePopup} />
//                 </div>
//               </li>
//               <li className={s.iconPos}>
//                 <div onClick={() => onDeleteItem(item.id)}>
//                   <svg className={s.icon}>
//                     <use href={`${icons}#icon-trash`}></use>
//                   </svg>
//                 </div>
//               </li>
//             </ul>
//           </li>
//         </ul>
//       </li>
//     </>
//   );
// };

// export default ExpensesListItem;
