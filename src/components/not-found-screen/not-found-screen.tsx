import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';

function NotFoundScreen(): JSX.Element {
  return (
    <div style={{marginTop: '50px'}}>
      <h1 style={{textAlign: 'center'}}>404 Страница не найдена</h1>
      <p style={{textAlign: 'center'}}><Link to={AppRoute.Main} style={{color: '#c90606', textDecoration: 'underline'}}>Вернуться на главную страницу</Link></p>
    </div>
  );
}

export default NotFoundScreen;
