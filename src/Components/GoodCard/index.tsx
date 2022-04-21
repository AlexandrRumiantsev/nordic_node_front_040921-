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

export default function GoodCard ({element, goods}) {
  
  const {PRICE, ID, TITLE, DISCR, IMG} = element 
  const dispatch = useDispatch()
  // получаем из стора роль авторизованного пользователя
  const itemUserRole = useSelector((state) => state.User.item?.DATA[0]?.role);
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
