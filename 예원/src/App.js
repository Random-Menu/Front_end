import { Route } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBowlFood } from '@fortawesome/free-solid-svg-icons';
import { faCamera } from '@fortawesome/free-solid-svg-icons';
import { faGamepad } from '@fortawesome/free-solid-svg-icons';
import './main.css';


function Main() {
  return (
    <><div className='hd'>
      <nav>
        <div className='hd_name'>
          <div>more 먹지</div>
          <div className='hd_name_lg'>로그인</div>
          <div>회원가입</div>
        </div>
      </nav>
      {/* 이 메뉴바는 고정 */}
      <nav className='hd_menu'>
        <span>메뉴추천</span>
        <span>메뉴판 스캔</span>
        <span>미니 게임</span>
      </nav>
    </div>
    {/*홈페이지 센터 */}
    <div className='mn'>
        <a>오늘은 <br></br> MORE 먹지? </a>
        <h3>메뉴 고르기 어려울 때!</h3>
      </div>
      <div className='sc'>
        {/* 메뉴 큰 노란 박스 */}

        <div className='sc_box'>
          <div className='sc_box_text'>뭐 먹을지 고민된다면?</div>
          <nav className='sc_box_int_1'>
            <div>
              {/* 흰박스  classname은 사용하지 않음 식별하기 위해 존재 */}
              <div className='inbox1' >
                <div>
                 
                  <FontAwesomeIcon icon={faBowlFood}size='5x' />
                </div>
              </div>
              <h3>메뉴 추천</h3>
            </div>
          </nav>

          <nav className='sc_box_int_2'>
            <div>
              {/* 흰박스 */}
                <div className='inbox2'>
                  <div>
                  <FontAwesomeIcon icon={faCamera} size='5x' />
                  </div>
                </div>
              <h3>메뉴 스캔</h3>
              <a href=''></a>
            </div>
          </nav>

          <nav className='sc_box_int_3'>
            <div>
              {/* 흰박스 */}
                <div className='inbox3'>
                  <div>
                  <FontAwesomeIcon icon={faGamepad} size='5x'/>
                  </div>
                </div>
              <h3>미니 게임</h3>
              <a href='/game.js'>{'user Page >>'}</a>
            </div>
          </nav>
        </div>
        </div></>
  );
};

export default './App';

