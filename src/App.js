import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" integrity="sha512-iecdLmaskl7CVkqkXNQ/ZH/XLlvWZOJyj7Yy7tcenmpD1ypASozpmT/E0iPtmFIB46ZmdtAc9eNBvH0H/ZpiBw==" crossorigin="anonymous" referrerpolicy="no-referrer" />
      <div className="body">
        <div className="nav">                 
          <div className="nav-top nav-margin">       {/* nav 상단 */}
            <div className="title">more먹지</div>    {/* 이름 */}
          </div>
          <div className="nav-mid nav-margin">      {/* nav 중단 (메뉴) */}
            
              <li>메뉴추천</li>                       
              <li>메뉴판 스캔</li>
              <li>미니 게임</li>
            
          </div>
          <div className="nav-bot nav-margin">       {/* nav 하단 (아이콘)*/}
            <div className="nav-icon">
              <div className="camera icon-margin gray"><i class="fa-solid fa-camera fa-2x"></i></div>
              <div className="file gray"><i class="fa-solid fa-image fa-2x"></i></div>
            </div>
          </div>
        </div>
        <div className="content">                     {/* 메인 컨텐츠 */}
          <div className="left">                      {/* 좌측 박스 (메뉴판 업로드 칸)*/}
            <div className="yellow-box left">          {/* 클릭 시에 나오는 노란 박스*/}
              <div className="box"></div>             {/* 사진 업로드 박스*/}
              <div className="choice">                {/* 파일 선택 버튼 */}
                <button> 파일선택 </button> 
              </div>          
            </div>
            <div className="upload">                  {/* 업로드 버튼 */}
              <button className="yellow">이미지 업로드</button>
            </div>            
          </div>
          <div className="right">                     {/* 우측 박스 (메뉴판 스캔 후 표로 정리해서 보여주는 칸) */}
            <div className="yellow-box">              {/* 클릭시 나오는 노란 박스*/}
              <div className="box"></div>             {/* 표가 나오는 박스 */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
