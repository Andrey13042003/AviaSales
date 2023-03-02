import { useSelector, useDispatch } from 'react-redux/es/exports';

import { updateCheckBox } from '../store/actions';

import classes from './transfer.module.scss';

const Transfer = () => {
  const dispatch = useDispatch();
  const boxValue = useSelector((state) => state.box.checkedBoxes); //получаем данные из хранилища redux

  let checkedCounter = 0;
  const filtersTransfer = boxValue.map((item) => {
    const { label, name, isCheck } = item;

    if (isCheck) {
      checkedCounter += 1;
    }

    const onChange = () => {
      let newArr = [...boxValue];
      //Если зачекали любую кнопку кроме all
      if (name != 'all' && !isCheck) {
        newArr = newArr.map((el) => {
          if (el.name == name) {
            el.isCheck = true;
          }
          return el;
        });
      }
      //Если расчекали любую кнопку, кроме all
      if (name != 'all' && isCheck) {
        newArr = newArr.map((el) => {
          if (el.name == name) {
            el.isCheck = false;
          }
          return el;
        });
      }
      //Если нажали на кнопку all
      if (name === 'all' && !isCheck) {
        newArr = newArr.map((el) => {
          el.isCheck = true;
          return el;
        });
      }
      //Если отменили нажатие с кнопки all
      if (name === 'all' && isCheck) {
        newArr = newArr.map((el) => {
          el.isCheck = false;
          return el;
        });
      }
      //Если проставили все галочки, кроме all
      if (checkedCounter === 3 && name != 'all') {
        newArr = newArr.map((el) => {
          if (el.name === 'all') el.isCheck = true;
          return el;
        });
      }
      //Если отменили одну галочку и до этого стояло all
      if (name != 'all' && isCheck && newArr[0].isCheck) {
        newArr = newArr.map((el) => {
          if (el.name === 'all') el.isCheck = false;
          return el;
        });
      }

      updateCheckBox(dispatch, newArr);
    };

    return (
      <li className={classes['avia__сhoose-transfer']} key={name}>
        <label>
          <input type="checkbox" className={classes['custom-checkbox']} checked={isCheck} onChange={onChange} />
          <span className={classes.fake}></span> 
          <span className={classes.text}>{label}</span>
        </label>
      </li>
    );
  });

  return filtersTransfer;
};

export default Transfer;
