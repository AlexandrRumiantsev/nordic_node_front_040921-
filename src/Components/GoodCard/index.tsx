import { useEffect } from 'react';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import { useSelector, useDispatch } from 'react-redux'

import { delItemGood } from '../../store/actons/good/good-action'

import './style.css';

const bull = (
    <Box
      component="span"
      sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
    >
      •
    </Box>
  );

interface IElementGood {
  CATEGORY_ID: string;
  COMMENTS_ID: number;
  DISCR: string;
  FILE_IMG: string;
  ID: string;
  IMG: string;
  PRICE: string;
  TITLE: string
}

interface IGoodCard {
  element: IElementGood;
  goods: [IElementGood];
}

interface IUserItem {
  role: string,
  DATA: any
}

interface IUser {
  list: [IUserItem],
  item: IUserItem,
  error: string
}

interface IStore {
  User: IUser
}

export default function GoodCard ({element, goods} : IGoodCard) {
  
  const {PRICE, ID, TITLE, DISCR, IMG} = element 
  const dispatch = useDispatch()
  // получаем из стора роль авторизованного пользователя
  const USER = useSelector((state: IStore) => state.User);
  console.log('USER', USER);

  const itemUserRole = useSelector((state: IStore) => state.User.item?.DATA[0]?.role);
  //Для след занятия!
  useEffect(() => {
  }, [])

  return (
     <Card sx={{ minWidth: 275 }} id={ID} className='card-item'>
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            <h3>{TITLE}</h3>
          </Typography>
          <Typography variant="h5" component="div">
             <div className="img-container">
              <img src={IMG} />
             </div>
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            {DISCR}
          </Typography>
          <Typography variant="body2">
            {PRICE}
          </Typography>
        </CardContent>
        <CardActions>
          <a href={`/catalog/${ID}`} target="_blank">
            Подробнее
          </a>
          {
            itemUserRole === "ADMIN" &&
            <Button onClick={() => dispatch(delItemGood(ID, goods)) } size="small">
              Удалить
            </Button>
          }
        </CardActions>
      </Card>
    )

}
