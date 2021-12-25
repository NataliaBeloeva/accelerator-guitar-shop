import { useSelector } from 'react-redux';
import { getGuitars, getIsDataLoaded } from '../../store/guitars-data/selectors';
import Filter from '../filter/filter';
import Footer from '../footer/footer';
import Header from '../header/header';
import LoadingScreen from '../loading-screen/loading-screen';
import Pagination from '../pagination/pagination';
import Product from '../product/product';
import Sort from '../sort/sort';

const MAX_GUITAR_COUNT = 9;

function MainScreen(): JSX.Element {
  const guitars = useSelector(getGuitars);
  const isDataLoaded = useSelector(getIsDataLoaded);

  return (
    <div className="wrapper">
      <Header />
      <main className="page-content">
        <div className="container">
          <h1 className="page-content__title title title--bigger">Каталог гитар</h1>
          <ul className="breadcrumbs page-content__breadcrumbs">
            <li className="breadcrumbs__item"><a className="link" href="./main.html">Главная</a>
            </li>
            <li className="breadcrumbs__item"><a className="link">Каталог</a>
            </li>
          </ul>
          <div className="catalog">
            <Filter />
            <Sort />
            {
              !isDataLoaded ?
                <LoadingScreen /> :
                <div className="cards catalog__cards">
                  {guitars.slice(0, MAX_GUITAR_COUNT).map((guitar) => <Product key={guitar.id} guitar={guitar} />)}
                </div>
            }
            <Pagination />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default MainScreen;
